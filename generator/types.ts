export interface EvidenceDef {
  evidenceName: string,
  evidenceType: string,
  evidencePath: string,
  formCode: string,
  beanKey: string,
  className: string,
  extIdSupported: boolean,
  dbName: string,

  tsClassName: string
}

export enum PropertyType {
  Integer = 'integer',
  String = 'string',
  Select = 'select',
  DateTime = 'datetime',
  Date = 'date',
  YearMonth = 'yearMonth',
  Numeric = 'numeric',
  Logic = 'logic',
  Relation = 'relation',
  Blob = 'blob',
  Array = 'array'
}

export type EnumValue = {
  "@key": string,
  "$": string
}

export type ValueObj = {
  value: EnumValue[]
}

export interface PropertyDef {
  propertyName: string,
  dbName: string,
  name: string,
  title: string,
  type: PropertyType,
  typeName?: string,

  // Visibility
  isVisible: boolean,
  isSortable: boolean,
  isHighlight: boolean,
  inId: boolean,
  inSummary: boolean,
  inDetail: boolean,
  inExpensive: boolean,

  // Behavioar
  isMassUpdateable: boolean,
  mandatory: boolean,
  isWritable: boolean,
  isOverWritable: boolean,
  hasBusinessLogic: boolean

  // Other
  isUpperCase: boolean,
  isLowerCase: boolean,
  links: null | {
    link: string
  }

  // Values
  importableValues?: ValueObj,
  values?: ValueObj,
  digits?: number,
  decimals?: number,
  maxLength?: number,
  enumName?: string,
  itemType?: PropertyType,

  // to 1 relations
  fkName?: string,
  fkEvidencePath?: string,
  fkEvidenceType?: string,
  url?: string,
  tsClassName?: string,

  genType?: string
}

export interface RelationDef {
  url: string,
  evidenceType: string,
  name: string,

  tsClassName: string,
  relationName: string,
  getter?: string | null
}

export type EnumOptionDef = {
  key: string,
  value: string,
  comment: string
}

export interface EnumDef {
  key: string,
  file: string
  options: EnumOptionDef[]
}