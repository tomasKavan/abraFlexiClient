/**
 * Layer 1 — AFEntity dirty tracking
 * Verifies hasChanged, changedKeys, pristine, reset, wasLoaded still work
 * correctly after the state refactor. Covers all three entity states.
 */

import { describe, test, expect } from '@jest/globals'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'
import { makeEntityClass, makeStubCache } from '../helpers/makeEntity.js'

// Entity with a scalar string field and a relation array field
const { makeInstance } = makeEntityClass({
  name: PropertyType.String,
  amount: PropertyType.Integer,
})

// Entities with a relation for array tests
const { makeInstance: makeParent } = makeEntityClass({
  name: PropertyType.String,
  items: PropertyType.Relation,
})
const { makeInstance: makeChild } = makeEntityClass({
  title: PropertyType.String,
})

// Override items annotation to be an array relation
;(makeParent() as any).constructor.propAnnotations.items = {
  key: 'items', type: PropertyType.Relation, isArray: true
}

// ---------------------------------------------------------------------------
// 2.1–2.3  Basic scalar tracking
// ---------------------------------------------------------------------------
describe('scalar dirty tracking', () => {
  test('2.1 freshly created entity: hasChanged=false, pristine=true', () => {
    const ent = makeInstance()
    expect(ent.hasChanged()).toBe(false)
    expect(ent.pristine).toBe(true)
  })

  test('2.2 mutating a scalar field marks it changed', () => {
    const ent = makeInstance()
    ent._orig.name = 'original'
    ;(ent as any).name = 'changed'
    expect(ent.hasChanged()).toBe(true)
    expect(ent.changedKeys()).toContain('name')
  })

  test('2.3 setting field back to original value: hasChanged=false', () => {
    const ent = makeInstance()
    ent._orig.name = 'original'
    ;(ent as any).name = 'changed'
    ;(ent as any).name = 'original'
    expect(ent.hasChanged()).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// 2.4  Unknown key throws
// ---------------------------------------------------------------------------
describe('hasChanged with unknown key', () => {
  test('2.4 hasChanged("nonexistent") throws PROPERTY_NOT_FOUND', () => {
    const ent = makeInstance()
    expect(() => ent.hasChanged('nonexistent')).toThrow(AFError)
    expect(() => ent.hasChanged('nonexistent')).toThrow(
      expect.objectContaining({ code: AFErrorCode.PROPERTY_NOT_FOUND })
    )
  })
})

// ---------------------------------------------------------------------------
// 2.5–2.7  Relation array tracking
// ---------------------------------------------------------------------------
describe('relation array dirty tracking', () => {
  test('2.5 reordering relation array marks entity changed', () => {
    const parent = makeParent()
    // Override annotation to isArray=true
    ;(parent.constructor as any).propAnnotations.items = { key: 'items', type: PropertyType.Relation, isArray: true }
    const c1 = makeChild()
    const c2 = makeChild()
    ;(c1 as any)._setId(1)
    ;(c2 as any)._setId(2)
    parent._orig.items = [c1, c2]
    ;(parent as any).items = [c2, c1]
    expect(parent.hasChanged()).toBe(true)
  })

  test('2.6 nested item with changed field marks parent changed', () => {
    const parent = makeParent()
    ;(parent.constructor as any).propAnnotations.items = { key: 'items', type: PropertyType.Relation, isArray: true }
    const child = makeChild()
    ;(child as any)._setId(1)
    child._orig.title = 'original'
    parent._orig.items = [child]
    ;(parent as any).items = [child]
    ;(child as any).title = 'changed'
    expect(parent.hasChanged()).toBe(true)
  })

  test('2.7 unchanged relation array: hasChanged=false', () => {
    const parent = makeParent()
    ;(parent.constructor as any).propAnnotations.items = { key: 'items', type: PropertyType.Relation, isArray: true }
    const child = makeChild()
    ;(child as any)._setId(1)
    parent._orig.items = [child]
    ;(parent as any).items = [child]
    expect(parent.hasChanged()).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// 2.8–2.9  reset
// ---------------------------------------------------------------------------
describe('reset', () => {
  test('2.8 reset(true) resets all fields to _orig values', () => {
    const ent = makeInstance()
    ent._orig.name = 'original'
    ent._orig.amount = 42
    ;(ent as any).name = 'changed'
    ;(ent as any).amount = 99
    ent.reset(true)
    expect(ent.hasChanged()).toBe(false)
  })

  test('2.9 reset(key) resets only that field', () => {
    const ent = makeInstance()
    ent._orig.name = 'original'
    ent._orig.amount = 10
    ;(ent as any).name = 'changed'
    ;(ent as any).amount = 99
    ent.reset('name' as any)
    expect(ent.hasChanged('amount')).toBe(true)
    expect(ent.hasChanged('name')).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// 2.10–2.11  wasLoaded
// ---------------------------------------------------------------------------
describe('wasLoaded', () => {
  test('2.10 wasLoaded returns false when key not in _orig', () => {
    const ent = makeInstance()
    expect(ent.wasLoaded('name')).toBe(false)
  })

  test('2.11 wasLoaded returns true after _orig is populated', () => {
    const ent = makeInstance()
    ent._orig.name = 'loaded'
    expect(ent.wasLoaded('name')).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// 2.12  Dirty tracking works identically in 'exists' state
// ---------------------------------------------------------------------------
describe('dirty tracking in exists state', () => {
  test('2.12 entity in exists state behaves identically for dirty tracking', () => {
    const ent = makeInstance()
    ;(ent as any)._setId(7)
    expect(ent.isNew).toBe(false)

    ent._orig.name = 'original'
    expect(ent.hasChanged()).toBe(false)

    ;(ent as any).name = 'changed'
    expect(ent.hasChanged()).toBe(true)
    expect(ent.changedKeys()).toContain('name')
  })
})
