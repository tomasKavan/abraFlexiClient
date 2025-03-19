import { Big } from 'big.js'
import { PropertyType, TypeAnnotation } from './AFTypes'

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
      return new Date(obj) as ParsedType<T>;
    
    case PropertyType.Date:
      const split = obj.split('+')
      const dateStr = split[0] + 'T00:00:00.000+' + split[1]
      return new Date(dateStr) as ParsedType<T>

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

export function serializePropertyValue<T extends PropertyType>(
  propertyType: T,
  annotation: TypeAnnotation,
  property: any
): string {
  throw new Error('TODO: serializePropertyValue not implemented yet')
}
