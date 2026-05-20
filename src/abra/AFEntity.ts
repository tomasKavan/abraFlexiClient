import { AFStitkyCache } from './AFStitkyCache.js'
import { PropertyType, TypeAnnotation } from './AFTypes.js'
import type { AFStitek } from '../generated/entities/AFStitek.js'
import { AFSkupinaStitku } from '../generated/entities/AFSkupinaStitku.js'
import { AFError, AFErrorCode } from './AFError.js'
import { arraysEqual } from './AFDataType.js'

// Internal only — not exported from src/index.ts
type AFEntityState = 'new' | 'unknown' | 'exists'

export class AFEntity {
  static EntityPath: string = ''
  static EntityName: string = ''
  static EntityType: string = ''

  static propAnnotations: Record<string, TypeAnnotation> = {}

  private _stitkyCache: AFStitkyCache

  // ----- Identity fields ---------------------------------------------------

  private _id?: number | null
  private _state: AFEntityState = 'new'

  /**
   * Server-assigned internal id. Readonly — never set by application code.
   * Use api.resolveStubId() or api.resolve() to obtain a confirmed id.
   */
  get id(): number | null | undefined {
    return this._id
  }

  /**
   * @internal — called only by AFApiClient. Do NOT call from application code.
   * Sets the confirmed server id and transitions state to 'exists'.
   */
  _setId(id: number): void {
    this._id = id
    this._state = 'exists'
  }

  /**
   * Pending unverified identifiers stored by the deprecated createIdStub().
   * @internal
   */
  _stub?: {
    id?: number
    kod?: string
    ext?: string[]
  }

  // ----- Other base fields -------------------------------------------------

  kod?: string | null
  stitky?: string | null

  _orig: Record<string, any> = {}

  // ----- State accessors ---------------------------------------------------

  /**
   * Returns the entity's existence state:
   * - true      — definitely no server record ('new')
   * - undefined — has identifiers but existence unconfirmed ('unknown')
   * - false     — server existence confirmed ('exists')
   */
  get isNew(): boolean | undefined {
    switch (this._state) {
      case 'new':     return true
      case 'unknown': return undefined
      case 'exists':  return false
    }
  }

  // ----- Constructor -------------------------------------------------------

  constructor(stitkyCache: AFStitkyCache) {
    this._stitkyCache = stitkyCache
  }

  // ----- Stitky helpers ----------------------------------------------------

  getPropertyTypeAnnotation(key: string): TypeAnnotation | undefined {
    return (this.constructor as typeof AFEntity).propAnnotations[key]
  }

  getStitky(): AFStitek[] | undefined {
    return this._stitkyCache.stitkyWithString(this.stitky)
  }

  getStitkyBySkupina(skup: string | AFSkupinaStitku): AFStitek[] | undefined {
    return this._stitkyCache.stitkyWithString(this.stitky, skup)
  }

  // ----- Dirty tracking ----------------------------------------------------

  get pristine(): boolean {
    return !this.hasChanged()
  }

  protected getCotr(): typeof AFEntity {
    return this.constructor as typeof AFEntity
  }

  hasChanged(key?: string): boolean {
    if (key) {
      const self = (this as any)
      const v = self[key]
      const origV = self._orig[key]

      const annot = this.getCotr().propAnnotations[key]
      if (!annot)
        throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `Property ${key} not found on entity ${this.getCotr().EntityName}.`)

      // First deal with undefined and null
      if (v === undefined) return false
      if (origV === v && v === null) return false

      // In case of collections we need to investigate further. It's change if:
      // - array is reordered or changed in length
      // - any item has any change key
      if (annot.type === PropertyType.Relation && annot.isArray) {
        if (!origV) return true
        if (!arraysEqual(origV, v)) return true

        for (const it of (v as AFEntity[])) {
          if (it.hasChanged()) return true
        }

        return false
      }

      // Non-array relation: check reference equality, then recursively check nested changes
      if (annot.type === PropertyType.Relation) {
        if (origV !== v) return true
        if (v instanceof AFEntity && v.hasChanged()) return true
        return false
      }

      // Else it's scalar - simple equality
      return origV !== v
    }

    // If key is not defined - we are checking the whole entity (all keys)
    for (const key of Object.keys(this.getCotr().propAnnotations)) {
      if (this.hasChanged(key)) return true
    }
    return false
  }

  wasLoaded(key: string): boolean {
    if (!this.getCotr().propAnnotations[key])
      throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `Property ${key} not found on entity ${this.getCotr().EntityName}.`)

    return !!this._orig[key]
  }

  changedKeys(): string[] {
    const keys: string[] = []
    for (const key of Object.keys(this.getCotr().propAnnotations)) {
       if (this.hasChanged(key)) keys.push(key)
    }
    return keys
  }

  reset(key: keyof this | boolean): void {
    if (!key) {
      throw new AFError(AFErrorCode.PROPERTY_NOT_FOUND, `To reset all properties on entity ${this.getCotr().EntityName} use force (1st arg set to true).`)
    }

    if (typeof key === 'string') {
      (this as any)[key] = this._orig[key] || undefined
      return
    }

    for (const keyin of Object.keys(this.getCotr().propAnnotations)) {
      this.reset(keyin as keyof this)
    }
  }
}

export function GetPropertyTypeAnnotation(entity: typeof AFEntity, key: string) {
  return entity.propAnnotations[key]
}
