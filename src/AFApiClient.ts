import { AFEntity, PropertyType, TypeAnnotation } from "./AFEntity"
import { AFError, AFErrorCode } from "./AFError"
import { AFFilter } from "./AFFilter"
import Big from 'big.js'

const ABRA_API_FORMAT = 'json'

export type AFApiFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

export type AFApiConfig = {
  url: string,
  company?: string,
  fetch?: AFApiFetch
}

export type NO_LIMIT = 0

export enum AFQueryDetail {
  FULL = 'full',
  ID = 'id',
  SUMMARY = 'summary'
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type NestedDetail<T> = (keyof T | [keyof T, NestedDetail<UnwrapPromise<T[keyof T]>>[]])[] | AFQueryDetail
type AFQueryOptions<T extends AFEntity> = { 
  detail?: NestedDetail<T>,
  filter?: AFFilter,
  limit?: number | NO_LIMIT,
  start?: number,
  addRowCount?: boolean,
  onlyExtIds?: boolean,
  noExtIds?: boolean,
  noIds?: boolean,
  codeAsId?: boolean,
  dryRun?: boolean,
  noSimpleMode?: boolean,
  noValidityCheck?: boolean
}

export enum AFQueryStatus {
  LOADING = 'loading',
  OK = 'ok',
  ERROR = 'error'
}

export type AFQueryResponse<T> = {
  data: Promise<T[] | T | undefined>,
  status: AFQueryStatus,
  error: AFError | null,
  cancel: () => void,
  rawResponse?: Response
}

export class AFApiClient {
  private _url: string
  private _fetch: AFApiFetch
  private company?: string

  constructor(config: AFApiConfig) {
    this._url = config.url
    this._fetch = config.fetch || fetch
  }

  query<T extends typeof AFEntity>(
    entity: T, 
    options: AFQueryOptions<InstanceType<T>>
  ): AFQueryResponse<InstanceType<T>> {

    const detail = options.detail || AFQueryDetail.SUMMARY

    let url = this._url + '/c/' + this.company + '/' + entity.EntityPath
    url += options.filter ? options.filter.toUrlComponent() : ''
    url += '.' + ABRA_API_FORMAT
    this._addParamToUrl(url, 'detail', this._composeDetail(detail))
    this._addParamToUrl(url, 'includes', this._composeIncludes(detail))
    this._addParamToUrl(url, 'relations', this._composeRelations(detail))

    const res: Partial<AFQueryResponse<InstanceType<T>>> = {
      status : AFQueryStatus.LOADING,
      error: null
    }

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

  private _composeDetail<T>(level: NestedDetail<T>): string | null{
    return null
  }

  private _composeIncludes<T>(level: NestedDetail<T>): string | null {
    return null
  }

  private _composeRelations<T>(level: NestedDetail<T>): string | null {
    return null
  }

  private _addParamToUrl(url: string, key: string, value: string | null) {
    const isFirst = url.includes('?')
    if (!value || !key.length) {
      return
    }
    url += (isFirst ? '?' : '&') + key + '=' + value
  }

  private _processEntityObj<T extends typeof AFEntity>(entity: T, obj: any): InstanceType<T>[] {
    if (!obj) return []
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
    }

    // Else set it as scalar type
    this._setScalar(entity, annot, obj)
  }

  private _setScalar<T extends AFEntity>(entity: T, annot: TypeAnnotation, obj: any) {
    (entity as any)[annot.key] = parsePropertyValue(annot.type, annot, obj)
  }
}

type PropertyTypeMap = {
  [PropertyType.Integer]: number;
  [PropertyType.String]: string;
  [PropertyType.Select]: string; // Enum conversion happens outside
  [PropertyType.DateTime]: Date;
  [PropertyType.Date]: Date;
  [PropertyType.Numeric]: Big;
  [PropertyType.Logic]: boolean;
  [PropertyType.Blob]: Buffer;
  [PropertyType.Array]: any[]; // Must be inferred from typeAnnotation
}

type ParsedType<T extends PropertyType> = T extends keyof PropertyTypeMap ? PropertyTypeMap[T] : never

function parsePropertyValue<T extends PropertyType>(
  propertyType: T,
  annot: TypeAnnotation,
  obj: any
): ParsedType<T> | undefined {
  if (obj === null || obj === undefined) return undefined

  switch (propertyType) {
    case PropertyType.Integer:
      return parseInt(obj, 10) as ParsedType<T>;

    case PropertyType.String:
      return (annot?.maxLength ? obj.slice(0, annot.maxLength) : obj) as ParsedType<T>;

    case PropertyType.Select:
      if (!annot?.enum) throw new Error(`Enum typeAnnotation is required for Select (property ${annot.key})`);
      return (annot.enum[obj] ?? obj) as ParsedType<T>;

    case PropertyType.DateTime:
    case PropertyType.Date:
      return new Date(obj) as ParsedType<T>;

    case PropertyType.Numeric:
      return new Big(obj).round(annot?.decimals ?? 2) as ParsedType<T>;

    case PropertyType.Logic:
      return (obj.toLowerCase() === "true") as ParsedType<T>;

    case PropertyType.Blob:
      return Buffer.from(obj, "base64") as ParsedType<T>;

    case PropertyType.Array:
      if (!annot?.itemType) throw new Error("itemType is required for Array");
      const myAnnot = { ...annot }
      myAnnot.type = annot.itemType
      return (Array.isArray(obj)
        ? obj.map((item) => parsePropertyValue(annot.itemType!, myAnnot, item))
        : []) as ParsedType<T>;

    default:
      throw new Error(`Unknown PropertyType: ${propertyType} of property ${annot.key}`);
  }

}


