import { TypeAnnotation } from './AFTypes'

export class AFEntity {
  static EntityPath: string = ''
  static EntityName: string = ''
  static EntityType: string = ''

  static propAnnotations: Record<string, TypeAnnotation> = {}

  getPropertyTypeAnnotation(key: string): TypeAnnotation | undefined {
    return (this.constructor as typeof AFEntity).propAnnotations[key]
  }
}

export function GetPropertyTypeAnnotation(entity: typeof AFEntity, key: string) {
  return entity.propAnnotations[key]
}
