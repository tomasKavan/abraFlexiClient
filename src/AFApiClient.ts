import { EntityByName } from "."
import { parsePropertyValue } from "./AFDataType"
import { AFEntity, GetPropertyTypeAnnotation } from "./AFEntity"
import { AFError, AFErrorCode } from "./AFError"
import { 
  AFApiConfig, 
  AFApiFetch, 
  PropertyType, 
  TypeAnnotation, 
  AFQueryDetail,
  AFQueryResponse,
  AFQueryOptions,
  AFQueryStatus,
  NestedDetail
} from "./AFTypes"

const ABRA_API_FORMAT = 'json'

export class AFApiClient {
  private _url: string
  private _fetch: AFApiFetch
  private company?: string

  constructor(config: AFApiConfig) {
    this._url = config.url
    this.company = config.company
    this._fetch = config.fetch || fetch
  }

  query<T extends typeof AFEntity, IS extends boolean = true>(
    entity: T, 
    options: AFQueryOptions<InstanceType<T>, IS>
  ): AFQueryResponse<InstanceType<T>> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `[AFError].MISSING_ABRA_COMPANY - Can't query AFApiClient without providing company path component first.`)
    }

    const detail = options.detail || AFQueryDetail.SUMMARY

    let url = this._url + '/c/' + this.company + '/' + entity.EntityPath
    url += options.filter ? options.filter.toUrlComponent() : ''
    url += '.' + ABRA_API_FORMAT
    url = this._addParamToUrl(url, 'detail', this._composeDetail(detail))
    url = this._addParamToUrl(url, 'includes', this._composeIncludes(detail, entity))
    url = this._addParamToUrl(url, 'relations', this._composeRelations(detail))

    const res: Partial<AFQueryResponse<InstanceType<T>>> = {
      status : AFQueryStatus.LOADING,
      error: null
    }

    console.log(url)

    const ac = new AbortController()
    const run = async (): Promise<InstanceType<T>[]> => {
      try {
        const raw = await this._fetch(url, { signal: ac.signal })
        res.rawResponse = raw

        if (raw.status >= 400 && raw.status < 600) {
          throw new AFError(AFErrorCode.ABRA_FLEXI_ERROR, `[AFError].ABRA_SERVER_ERROR: ${raw.status} ${raw.statusText}`)
        }

        const json = await raw.json()
        let entityObj = json.winstrom[entity.EntityPath]
        const data = this._processEntityObj(entity, entityObj)

        return Promise.resolve(data)
      } catch (e) {
        if (!(e instanceof AFError)) {
          console.log(e)
          e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
        }
        res.error = e as AFError
        throw e
      }
    }

    res.data = run()
    res.cancel = () => ac.abort()

    return res as AFQueryResponse<InstanceType<T>>
  }

  private _composeDetail<T, IS extends boolean>(level: NestedDetail<T, IS>[] | AFQueryDetail): string | null{
    if (level === AFQueryDetail.FULL) return 'full'
    if (level === AFQueryDetail.ID) return 'id'
    if (level === AFQueryDetail.SUMMARY) return null
    
    const levProc = (inp: NestedDetail<T, IS>[]): string => {
      let out = ''
      for (const ndi of inp) {
        if (out.length) out += ','
        if (typeof ndi === 'string') {
          out += ndi
        } else if (ndi instanceof Array) {
          out += ndi[0] as string + '(' + levProc(ndi[1] as NestedDetail<T, IS>[]) + ')'
        }
      }
      return out
    }
    
    const out = 'custom:' + levProc(level)
    return out
  }

  private _composeIncludes<T, IS extends boolean>(level: NestedDetail<T, IS>[] | AFQueryDetail, entity: typeof AFEntity): string | null {
    if (level === AFQueryDetail.FULL) return null
    if (level === AFQueryDetail.ID) return null
    if (level === AFQueryDetail.SUMMARY) return null

    const includes: string[] = []

    const levProc = (inp: NestedDetail<T, IS>[], base:string, evidence: typeof AFEntity) => {
      for (const ndi of inp) {
        if (typeof ndi === 'string') continue
        if (ndi instanceof Array) {
          const key = ndi[0] as string
          const list = ndi[1] as NestedDetail<T, IS>[]
          const annot = GetPropertyTypeAnnotation(evidence, key)
          if (!annot || !annot.afClass) throw new AFError(AFErrorCode.QUERY_DETAIL_UNKNOWN_KEY, `[AFError].QUERY_DETAIL_UNKNOWN_KEY: Requested unknown key ${key} on entity ${(typeof evidence)}. Or it has't type annotation set.`)
          const relEnt = annot.afClass as typeof AFEntity
          const thisIncl = base + '/' + key + '/' + relEnt.EntityPath
          includes.push(thisIncl)
          levProc(list, thisIncl, relEnt)
        }
      }
    }
    levProc(level, entity.EntityPath, entity)

    return includes.join(',')
  }

  private _composeRelations<T, IS extends boolean>(level: NestedDetail<T, IS>[] | AFQueryDetail): string | null {
    if (level === AFQueryDetail.FULL) return null
    if (level === AFQueryDetail.ID) return null
    if (level === AFQueryDetail.SUMMARY) return null

    return null
  }

  private _addParamToUrl(url: string, key: string, value: string | null): string {
    const isFirst = !url.includes('?')
    if (!value || !key.length) {
      return url
    }
    return url + (isFirst ? '?' : '&') + key + '=' + value
  }

  private _processEntityObj<T extends typeof AFEntity>(entity: T, obj: any): InstanceType<T>[] {
    if (!obj) return []
    if (typeof obj === 'string') {
      if (obj.slice(0,5) === 'code:') {
        obj = {
          kod: obj.slice(5)
        }
      }
    }

    if (!(obj instanceof Array)) {
      obj = [obj]
    }
    const res: InstanceType<T>[] = []
    for (const o of obj) {
      const ent = new entity() as InstanceType<T>
      const oKeys = Object.keys(o)
      for (const okey of oKeys) {
        this._setProperty(ent, okey, o)        
      }
      res.push(ent)
    }
    return res
  }

  private _setProperty<T extends AFEntity>(entity: T, key: string, obj: any) {
    const annot = entity.getPropertyTypeAnnotation(key)
    if (!annot) return

    const v = obj[key]
    if (!v) return

    // If it's relation, recursively call _processEntityObj
    if (annot.type === PropertyType.Relation) {
      if (!annot.afClass) return 
      const propOut = this._processEntityObj(annot.afClass, v)
      if (!propOut) return
      if (annot.isArray) {
        (entity as any)[key] = propOut
        return
      }
      if (propOut.length) {
        (entity as any)[key] = propOut[0]
      }
      return
    }

    // Else set it as scalar type
    this._setScalar(entity, annot, obj)
  }

  private _setScalar<T extends AFEntity>(entity: T, annot: TypeAnnotation, obj: any) {
    if (!obj) return
    (entity as any)[annot.key] = parsePropertyValue(annot.type, annot, obj[annot.key])
  }
}



