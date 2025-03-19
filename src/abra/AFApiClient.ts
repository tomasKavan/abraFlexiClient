import { parsePropertyValue } from "./AFDataType"
import { AFEntity } from "./AFEntity"
import { AFError, AFErrorCode } from "./AFError"
import { Filter, ID } from "./AFFilter"
import { 
  AFApiConfig, 
  AFApiFetch, 
  PropertyType, 
  AFQueryDetail,
  AFQueryOptions,
  AFURelOptions,
  AFURelResult,
  AFPopulateOptions,
  AFURelMinimal,
  StitkyCacheStrategy
} from "./AFTypes"
import { EntityByName, EntityByPath } from "../generated/AFEntityRegistry"
import { addParamToUrl } from "../helpers/urlHelper"
import { composeDetail, composeIncludes, composeRelations } from "./AFApiUrlHelper"
import { AFStitkyCache } from "./AFStitkyCache"

const ABRA_API_FORMAT = 'json'

export class AFApiClient {
  private _url: string
  private _fetch: AFApiFetch
  private _company: string

  private _stitkyCache: AFStitkyCache

  constructor(config: AFApiConfig) {
    this._url = config.url
    this._company = config.company
    this._fetch = config.fetch || fetch

    this._stitkyCache = new AFStitkyCache(this, config.stitkyCacheStrategy)
  }

  get url(): string { return this._url }
  get company(): string { return this._company }
  get stitkyCacheStrategy(): StitkyCacheStrategy { return this._stitkyCache.strategy }

  async queryRaw<T extends typeof AFEntity>(
    entityPath: string,
    options: AFQueryOptions
  ): Promise<any> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    const detail = options.detail || AFQueryDetail.SUMMARY

    let url = this._url + '/c/' + this.company + '/' + entityPath
    url += options.filter ? options.filter.toUrlComponent() : ''
    url += '.' + ABRA_API_FORMAT
    url = addParamToUrl(url, 'detail', composeDetail(detail))
    url = addParamToUrl(url, 'includes', composeIncludes(detail, entityPath))
    url = addParamToUrl(url, 'relations', composeRelations(detail))

    url = addParamToUrl(url, 'limit', options.limit)
    url = addParamToUrl(url, 'start', options.start)

    url = addParamToUrl(url, 'addRowCount', options.addRowCount)
    url = addParamToUrl(url, 'onlyExtIds', options.onlyExtIds)
    url = addParamToUrl(url, 'noExtIds', options.noExtIds)
    url = addParamToUrl(url, 'noIds', options.noIds)
    url = addParamToUrl(url, 'codeAsId', options.codeAsId)
    url = addParamToUrl(url, 'dryRun', options.dryRun)
    url = addParamToUrl(url, 'noSimpleMode', options.noSimpleMode)
    url = addParamToUrl(url, 'noValidityCheck', options.noValidityCheck)

    // TODO - remove
    console.log(url)

    try {
      const raw = await this._fetch(url, { signal: options.abortController?.signal })

      if (raw.status >= 400 && raw.status < 600) {
        throw new AFError(AFErrorCode.ABRA_FLEXI_ERROR, `${raw.status} ${raw.statusText}`)
      }

      const json = await raw.json()
      let entityObj = json.winstrom[entityPath]

      return entityObj
    } catch (e) {
      if (!(e instanceof AFError)) {
        console.log(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async query<T extends typeof AFEntity>(
    entity: T, 
    options: AFQueryOptions
  ): Promise<InstanceType<T>[]> {
    const res = this.queryRaw(entity.EntityPath, options)

    try {
      const rawData = await res
      const data = this._processEntityObj(entity, rawData)
      
      if (!options.noUpdateStitkyCache) {
        await this._stitkyCache.fetchTick()
      }
      
      return data

    } catch (e) {
      if (!(e instanceof AFError)) {
        console.log(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async queryOne<T extends typeof AFEntity>(
    entity: T, 
    options: AFQueryOptions
  ): Promise<InstanceType<T>> {
    const data = await this.query(entity, options)
    if (!data || !data.length) throw new AFError(AFErrorCode.OBJECT_NOT_FOUND, `${entity} object not found. Query filter: ${options.filter}`)
    return data[0]
  }

  public async queryURels<T extends typeof AFEntity = typeof AFEntity>(
    relatedEntity: T,
    forObjects: AFURelMinimal | AFURelMinimal[], 
    options: AFURelOptions = {},
  ): Promise<AFURelResult<InstanceType<T>>[]> {
    if (!(forObjects instanceof Array)) {
      forObjects = [forObjects]
    }

    if (options.vazbaTyp === 'string') {
      options.vazbaTyp = [options.vazbaTyp]
    }

    const out: AFURelResult<InstanceType<T>>[] = []
    const fetchedList: [string, InstanceType<T>[]][] = []
    
    for (const uobj of forObjects) {
      const uvs = uobj["uzivatelske-vazby"]
      if (!uvs) continue
      for (const uv of uvs) {
        // Check if vazba is properly defined and if it has proper vazbaTyp (if required)
        if (!uv.evidenceType || !uv.objectId) continue
        if (options.vazbaTyp && 
          (!uv.vazbaTyp || 
            typeof uv.vazbaTyp.kod !== 'string' || 
            !options.vazbaTyp.includes(uv.vazbaTyp.kod)) 
        ) continue

        // Check if related evidence type matches the requested type
        const cls = EntityByPath(uv.evidenceType)
        if (cls !== relatedEntity) continue
        
        // Get (or create) list of already fetched objects by evidenceType
        let list = fetchedList.find(fli => fli[0] === uv.evidenceType)
        if (!list) {
          list = [uv.evidenceType, []]
          fetchedList.push(list)
        }
        
        // Load data from cache or fetch it if missing
        let data = list[1].find(li => li.id === uv.objectId)
        if (!data) {
          try {
            const opts = { 
              detail: options.detail, 
              filter: ID(uv.objectId), 
              abort: options.abortController,
              noUpdateStitkyCache: true
            }
            let outInner = await this.query(relatedEntity, opts)
            if (!outInner || !outInner.length) continue
            list[1].push(outInner[0])
            data = outInner[0]
            const res: AFURelResult<InstanceType<T>> = {
              entity: uobj,
              referencedFrom: outInner[0]
            }
            out.push(res)
          } catch (e) {
            if (!(e instanceof AFError)) {
              console.log(e)
              e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
            }
            throw e
          }
        }
        uv.object = data
      }
    }

    if (!options.noUpdateStitkyCache) {
      await this._stitkyCache.fetchTick()
    }

    return out
  }

  public async populate<T extends typeof AFEntity = typeof AFEntity>(
    entities: InstanceType<T>[], 
    options: AFPopulateOptions
  ): Promise<InstanceType<T>[]> {
    const fetchBy: [string, string][] = []
    for (const en of entities) {
      if (typeof en.id !== 'undefined') {
        fetchBy.push(['id', en.id.toString()]) 
        continue
      }
      if (typeof en.kod !== 'undefined') {
        fetchBy.push(['kod', en.kod || ''])
        continue
      }
      throw new AFError(AFErrorCode.MISSING_ID_IN_POPULATE, `Can't populate entity withoud id or kod set. It's not possible to fetch data. Entity: ${en}`)
    }
    
    // Nothing was requested to populate
    if (!fetchBy.length) return []

    let tplArr: string[] = fetchBy.map(entry => `${entry[0]} = '${entry[1]}'`)
    if (!options.detail) options.detail = []
    if (options.detail instanceof Array) {
      if (!options.detail.includes('id')) options.detail.push('id')
      if (!options.detail.includes('kod')) options.detail.push('kod')
    }
    const opts: AFQueryOptions = {
      filter: Filter(tplArr.join(' or ')),
      detail: options.detail,
      abortController: options.abortController
    }

    try { 
      const cls = EntityByName(entities[0].constructor.name)
      const resQRaw = this.queryRaw(cls.EntityPath, opts)
      
      let dataQ = await resQRaw
      if (!dataQ) throw new AFError(AFErrorCode.UNKNOWN, 'Unable to fetch data to populate')
      if (!(dataQ instanceof Array)) dataQ = [dataQ]

      for (const enQ of dataQ) {
        const en = entities.find(e => {
          if (typeof e.id !== 'undefined') return enQ.id === String(e.id)
          if (typeof e.kod !== 'undefined') return enQ.kod === String(e.kod)
          return false
        })
        if (!en) continue
        
        const oKeys = Object.keys(enQ)
        for (const okey of oKeys) {
          this._setProperty(en, okey, enQ)        
        }
      }

      if (!options.noUpdateStitkyCache) {
        await this._stitkyCache.fetchTick()
      }
    } catch (e) {
      if (!(e instanceof AFError)) {
        console.log(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }

    return entities
  }

  public async populateOne<T extends typeof AFEntity = typeof AFEntity>(
    entity: InstanceType<T>, 
    options: AFPopulateOptions
  ): Promise<InstanceType<T>> {
    const res = await this.populate([entity], options)
    if (!res || !res.length) throw new AFError(AFErrorCode.OBJECT_NOT_FOUND, `${entity} object not found. Kod / ID: ${entity.kod} / ${entity.id}`)
    return res[0]
  }

  private _processEntityObj<T extends typeof AFEntity>(entity: T, obj: any): InstanceType<T>[] {
    if (!obj) return []

    // If there is no detail, prepare stub with code (kod)
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
      const ent = new entity(this._stitkyCache) as InstanceType<T>
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
      const cls = typeof annot.afClass === 'string' ? EntityByName(annot.afClass) : annot.afClass
      const propOut = this._processEntityObj(cls, v)
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
    //console.log(obj)
    if (!obj) return
    (entity as any)[annot.key] = parsePropertyValue(annot.type, annot, obj[annot.key])
  }
}
