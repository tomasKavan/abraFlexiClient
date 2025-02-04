type Constructor<T extends AFEntity> = new (...args: any[]) => T;

export enum PropertyType {
  Integer = 'integer',
  String = 'string',
  Select = 'select',
  DateTime = 'datetime',
  Date = 'date',
  Numeric = 'numeric',
  Logic = 'logic',
  Relation = 'relation',
  Blob = 'blob',
  Array = 'array'
}

export type TypeAnnotation = {
  key: string,
  type: PropertyType,
  isArray: boolean
  afClass?: any,
  digits?: number,
  decimals?: number,
  maxLength?: number,
  enumName?: string,
  enum?: Record<string, string>,
  itemType?: PropertyType,
}

export class AFEntity {
  static EntityPath: string = ''
  static EntityName: string = ''
  static EntityType: string = ''

  static propAnnotations: Record<string, TypeAnnotation> = {}

  getPropertyTypeAnnotation(key: string): TypeAnnotation | undefined {
    return (this.constructor as typeof AFEntity).propAnnotations[key]
  }
}