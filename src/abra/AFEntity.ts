import { AFStitkyCache } from './AFStitkyCache'
import { PropertyType, TypeAnnotation } from './AFTypes'
import type { AFStitek } from '../generated/entities/AFStitek'
import { AFSkupinaStitku } from '../generated/entities/AFSkupinaStitku'
import { AFError, AFErrorCode } from './AFError'
import { arraysEqual } from './AFDataType'
export class AFEntity {
  static EntityPath: string = ''
  static EntityName: string = ''
  static EntityType: string = ''

  static propAnnotations: Record<string, TypeAnnotation> = {}

  private _stitkyCache: AFStitkyCache

  id?: number
  kod?: string
  stitky?: string

  _orig: Record<string, any> = {}

  constructor(stitkyCache: AFStitkyCache) {
    this._stitkyCache = stitkyCache
  }

  getPropertyTypeAnnotation(key: string): TypeAnnotation | undefined {
    return (this.constructor as typeof AFEntity).propAnnotations[key]
  }

  getStitky(): AFStitek[] | undefined {
    return this._stitkyCache.stitkyWithString(this.stitky)
  }

  getStitkyBySkupina(skup: string | AFSkupinaStitku): AFStitek[] | undefined {
    return this._stitkyCache.stitkyWithString(this.stitky, skup)
  }

  get pristine(): boolean {
    return !this.hasChanged()
  }

  get isNew(): boolean {
    return !this.id
  }

  hasChanged(key?: string): boolean {
    if (key) {
      const annot = AFEntity.propAnnotations[key]
      if (!annot) 
        throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `Property ${key} not found on entity ${AFEntity.EntityName}.`)

      // First deal with undefined and null
      if ((this as any)[key] === undefined) return false
      if (this._orig[key] === (this as any)[key] === null) return false

      // In case of collections we need to investigate further. It's change if:
      // - array is reordered or changed in length
      // - any item has any change key
      if (annot.type === PropertyType.Relation && annot.isArray) {
        if (!arraysEqual(this._orig[key], (this as any)[key])) return true

        for (const it of ((this as any)[key] as AFEntity[])) {
          if (it.hasChanged()) return true
        }

        return false
      }
      return this._orig[key] === (this as any)[key]
    }
    for (const key of Object.keys(AFEntity.propAnnotations)) {
      if (this.hasChanged(key)) return true
    }
    return false
  }

  wasLoaded(key: string): boolean {
    if (!AFEntity.propAnnotations[key]) 
      throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `Property ${key} not found on entity ${AFEntity.EntityName}.`)

    return !!this._orig[key]
  }

  changedKeys(): string[] {
    const keys: string[] = []
    for (const key of Object.keys(AFEntity.propAnnotations)) {
       if (this.hasChanged(key)) keys.push(key)
    }
    return keys
  }

  reset(key: keyof this | boolean): void {
    if (!key) {
      throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `To reset all properties on entity ${AFEntity.EntityName} use force (1st arg set tu true).`)
    }
    
    if (typeof key === 'string') {
      (this as any)[key] = this._orig || undefined
      return
    }

    for (const keyin of Object.keys(AFEntity.propAnnotations)) {
      this.reset(keyin as keyof this)
    }
  }
}

export function GetPropertyTypeAnnotation(entity: typeof AFEntity, key: string) {
  return entity.propAnnotations[key]
}
