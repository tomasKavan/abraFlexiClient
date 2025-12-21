import { Big } from 'big.js'
import { PropertyType, TypeAnnotation } from './AFTypes.js'
import { AFError, AFErrorCode } from './AFError.js'

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

export function parsePropertyValue<T extends PropertyType>(
  propertyType: T,
  annot: TypeAnnotation,
  obj: any
): ParsedType<T> | undefined | null {
  if (obj === null || obj === undefined) return undefined
  if (!obj.length) return null

  switch (propertyType) {
    case PropertyType.Integer:
      return parseInt(obj, 10) as ParsedType<T>;

    case PropertyType.String:
      return (annot?.maxLength ? obj.slice(0, annot.maxLength) : obj) as ParsedType<T>;

    case PropertyType.Select:
      if (!annot?.enum) throw new AFError(AFErrorCode.ENUM_TYPE_MISSING, `Enum typeAnnotation is required for Select (property ${annot.key})`);
      return (annot.enum[obj] ?? obj) as ParsedType<T>;

    case PropertyType.DateTime:
      return new Date(obj) as ParsedType<T>;
    
    case PropertyType.Date:
      const split = obj.split('+')
      const dateStr = split[0] + 'T00:00:00.000+' + split[1]
      return new Date(dateStr) as ParsedType<T>
    
    case PropertyType.YearMonth:
      if (typeof obj !== 'string') return null
      const s = obj.split('/')
      if (s.length !== 2) return null
      return new Date(parseInt(s[0], parseInt(s[1]) - 1)) as ParsedType<T>

    case PropertyType.Numeric:
      return new Big(obj).round(annot?.decimals ?? 2) as ParsedType<T>;

    case PropertyType.Logic:
      return (obj.toLowerCase() === "true") as ParsedType<T>;

    case PropertyType.Blob:
      return Buffer.from(obj, "base64") as ParsedType<T>;

    case PropertyType.Array:
      if (!annot?.itemType) throw new AFError(AFErrorCode.ITEM_TYPE_MISSING, "itemType is required for Array");
      const myAnnot = { ...annot }
      myAnnot.type = annot.itemType
      return (Array.isArray(obj)
        ? obj.map((item) => parsePropertyValue(annot.itemType!, myAnnot, item))
        : []) as ParsedType<T>;

    default:
      throw new AFError(AFErrorCode.UNKNOWN_PROPERTY_TYPE, `Unknown PropertyType: ${propertyType} of property ${annot.key}`);
  }
}

export function serializePropertyValue<T extends PropertyType>(
  propertyType: T,
  annot: TypeAnnotation,
  val: any
): string | string[] {
  if (val === undefined) throw new AFError(AFErrorCode.UNDEFINED_CANT_BE_SERIALIZED, '')
  if (val === null) return ''

  switch (propertyType) {
    case PropertyType.Integer:
    case PropertyType.String:
      return val

    case PropertyType.Select:
      if (!annot?.enum) throw new AFError(AFErrorCode.ENUM_TYPE_MISSING, `Enum typeAnnotation is required for Select (property ${annot.key})`)
      return val

    case PropertyType.Date:
      const dateStr = dateToLocalIso(val as Date)
      return dateStr.split('T')[0]

    case PropertyType.DateTime:
      return dateToLocalIso(val as Date)

    case PropertyType.YearMonth:
      return (val as Date).getFullYear() + '/' + (val as Date).getMonth() + 1

    case PropertyType.Numeric:
      if (val instanceof Big) return val.toString()
      return val

    case PropertyType.Logic:
      return !!val ? "true" : "false"

    case PropertyType.Blob:
      return val.toString('base64')

    case PropertyType.Array:
      if (!annot?.itemType) throw new AFError(AFErrorCode.ITEM_TYPE_MISSING, "itemType is required for Array");
      const myAnnot = { ...annot }
      myAnnot.type = annot.itemType
      return (Array.isArray(val)
        ? val.map((item) => {
            const p = serializePropertyValue(annot.itemType!, myAnnot, item)
            if (p instanceof Array) return p[0]
            return p
          }) 
        : [])

    default:
      throw new AFError(AFErrorCode.UNKNOWN_PROPERTY_TYPE, `Unknown PropertyType: ${propertyType} of property ${annot.key}`);
  }
}

function dateToLocalIso(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')

  const yyyy = date.getFullYear()
  const mm   = pad(date.getMonth() + 1)
  const dd   = pad(date.getDate())

  const hh   = pad(date.getHours())
  const mi   = pad(date.getMinutes())
  const ss   = pad(date.getSeconds())
  const ms   = String(date.getMilliseconds()).padStart(3, '0')

  // timezone offset
  const offset = -date.getTimezoneOffset()
  const sign = offset >= 0 ? '+' : '-'
  const oh = pad(Math.floor(Math.abs(offset) / 60))
  const om = pad(Math.abs(offset) % 60)

  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}.${ms}${sign}${oh}:${om}`
}

export function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true
  if (a.length !== b.length) return false

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}