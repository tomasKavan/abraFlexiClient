/**
 * Layer 1 — AFEntity state machine
 * Tests for the tri-state _state / isNew redesign (spec §2).
 * No network, no AFApiClient.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'
import { makeEntityClass } from '../helpers/makeEntity.js'

const { makeInstance } = makeEntityClass({ name: PropertyType.String })

// ---------------------------------------------------------------------------
// 1.1–1.2  Initial state
// ---------------------------------------------------------------------------
describe('initial state', () => {
  test('1.1 freshly created entity: isNew true, id undefined, state new', () => {
    const ent = makeInstance()
    expect(ent.isNew).toBe(true)
    expect(ent.id).toBeUndefined()
    expect((ent as any)._state).toBe('new')
  })

  test('1.2 isNew returns true (not undefined, not false) in new state', () => {
    const ent = makeInstance()
    expect(ent.isNew).toBe(true)
    expect(ent.isNew).not.toBeUndefined()
    expect(ent.isNew).not.toBe(false)
  })
})

// ---------------------------------------------------------------------------
// 1.3–1.5  _setId
// ---------------------------------------------------------------------------
describe('_setId', () => {
  test('1.3 _setId(5) → id=5, isNew=false, state exists', () => {
    const ent = makeInstance()
    ;(ent as any)._setId(5)
    expect(ent.id).toBe(5)
    expect(ent.isNew).toBe(false)
    expect((ent as any)._state).toBe('exists')
  })

  test('1.4 _setId called twice with same value does not throw', () => {
    const ent = makeInstance()
    expect(() => {
      ;(ent as any)._setId(5)
      ;(ent as any)._setId(5)
    }).not.toThrow()
    expect(ent.id).toBe(5)
  })

  test('1.5 id is not directly assignable — compile-time error, runtime TypeError', () => {
    const ent = makeInstance()
    // Compile-time: @ts-expect-error suppresses the TS error for the assignment below.
    // Runtime: assigning to a getter-only property throws TypeError in strict mode.
    expect(() => {
      // @ts-expect-error — id must be readonly (getter-only)
      ent.id = 99
    }).toThrow(TypeError)
  })
})

// ---------------------------------------------------------------------------
// 1.6–1.9  _stub / 'unknown' state (via deprecated createIdStub)
// ---------------------------------------------------------------------------
describe('createIdStub / _stub / unknown state', () => {
  let api: import('../../src/abra/AFApiClient.js').AFApiClient

  beforeEach(async () => {
    const { makeApi } = await import('../helpers/makeApi.js')
    api = makeApi(jest.fn() as any)
  })

  test('1.6 createIdStub({ id: 5 }) → unknown state, id undefined, _stub.id=5', async () => {
    const { EntityClass } = makeEntityClass()
    const ent = await (api as any).createIdStub(EntityClass, { id: 5 })
    expect((ent as any)._state).toBe('unknown')
    expect(ent.isNew).toBeUndefined()
    expect(ent.id).toBeUndefined()
    expect((ent as any)._stub?.id).toBe(5)
  })

  test('1.7 createIdStub({ kod: "X" }) → unknown state, _stub.kod="X"', async () => {
    const { EntityClass } = makeEntityClass()
    const ent = await (api as any).createIdStub(EntityClass, { kod: 'X' })
    expect((ent as any)._state).toBe('unknown')
    expect(ent.isNew).toBeUndefined()
    expect((ent as any)._stub?.kod).toBe('X')
  })

  test('1.8 createIdStub({ ext: ["SHOP:1"] }) → unknown state, _stub.ext set', async () => {
    const { EntityClass } = makeEntityClass()
    const ent = await (api as any).createIdStub(EntityClass, { ext: ['SHOP:1'] })
    expect((ent as any)._state).toBe('unknown')
    expect((ent as any)._stub?.ext).toEqual(['SHOP:1'])
  })

  test('1.9 isNew returns undefined (not true or false) in unknown state', async () => {
    const { EntityClass } = makeEntityClass()
    const ent = await (api as any).createIdStub(EntityClass, { kod: 'X' })
    expect(ent.isNew).toBeUndefined()
    expect(ent.isNew).not.toBe(true)
    expect(ent.isNew).not.toBe(false)
  })
})

// ---------------------------------------------------------------------------
// 1.10–1.12  isNew exhaustive across all three states
// ---------------------------------------------------------------------------
describe('isNew exhaustive', () => {
  test('1.10 state=new → isNew=true', () => {
    const ent = makeInstance()
    expect(ent.isNew).toBe(true)
  })

  test('1.11 state=unknown → isNew=undefined', () => {
    const ent = makeInstance()
    ;(ent as any)._state = 'unknown'
    expect(ent.isNew).toBeUndefined()
  })

  test('1.12 state=exists → isNew=false', () => {
    const ent = makeInstance()
    ;(ent as any)._setId(1)
    expect(ent.isNew).toBe(false)
  })
})
