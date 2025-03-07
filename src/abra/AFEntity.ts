import { AFStitkyCache } from './AFStitkyCache'
import { TypeAnnotation } from './AFTypes'
import type { AFStitek } from '../generated/entities/AFStitek'
import { AFSkupinaStitku } from '../generated/entities/AFSkupinaStitku'

export class AFEntity {
  static EntityPath: string = ''
  static EntityName: string = ''
  static EntityType: string = ''

  static propAnnotations: Record<string, TypeAnnotation> = {}

  private _stitkyCache: AFStitkyCache

  id?: number
  kod?: string
  stitky?: string

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
}

export function GetPropertyTypeAnnotation(entity: typeof AFEntity, key: string) {
  return entity.propAnnotations[key]
}
