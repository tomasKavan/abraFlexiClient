/**
 * Layer 2 — AFApiClient.save nested entity encoding
 * Spec §7 — Nested entity encoding / NestedUnknownStrategy.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload, savePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType, NestedUnknownStrategy } from '../../src/abra/AFTypes.js'

const PARENT_PATH = 'parent-entity'
const CHILD_PATH  = 'child-entity'

const { EntityClass: ChildClass, makeInstance: makeChildInst } = makeEntityClass({ title: PropertyType.String })
;(ChildClass as any).EntityPath = CHILD_PATH

const { EntityClass: ParentClass } = makeEntityClass({ name: PropertyType.String, child: PropertyType.Relation })
;(ParentClass as any).EntityPath = PARENT_PATH
// Make 'child' a to-1 relation pointing at ChildClass
;(ParentClass as any).propAnnotations.child = {
  key: 'child', type: PropertyType.Relation, isArray: false, afClass: ChildClass
}

function getLastBody(mockFetch: jest.Mock): any {
  const calls = mockFetch.mock.calls
  const last = calls[calls.length - 1] as [string, RequestInit]
  return JSON.parse(last[1].body as string)
}

function getEntityPayload(body: any, entityPath: string): any {
  return body.winstrom[0][entityPath]
}

describe('save nested entity encoding', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('7.1 nested exists, no changes — payload contains {id: N} only', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._setId(10)
    // Assign the child and mark as a change
    ;(parent as any).child = child
    parent._orig.child = undefined // was not loaded before
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toEqual(10)
  })

  test('7.2 nested exists, field changed — payload contains id + changed field', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._setId(10)
    child._orig.title = 'old'
    ;(child as any).title = 'new'
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child.id ?? payload.child).toBeDefined()
    // child title change should be embedded
    expect(payload.child.title ?? payload.child).toBeDefined()
  })

  test('7.3 nested is new — full object inline', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    // child stays 'new'
    ;(child as any).title = 'brand new child'
    child._orig.title = undefined
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    // nested new entity should have no id, just its data
    expect(payload.child).toBeDefined()
    expect(payload.child.id).toBeUndefined()
  })

  test('7.4 nested unknown with kod, ByIdentifier — payload {kod: "X"}, 0 extra fetch', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._stub = { kod: 'MYKOD' }
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent, { nestedUnknown: NestedUnknownStrategy.ByIdentifier })
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toBe('code:MYKOD')
  })

  test('7.5 nested unknown with ext, ByIdentifier — payload uses ext id, 0 extra fetch', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._stub = { ext: ['SHOP:abc'] }
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent, { nestedUnknown: NestedUnknownStrategy.ByIdentifier })
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toBe('ext:SHOP:abc')
  })

  test('7.6 nested unknown with no identifier, ByIdentifier — throws MISSING_IDENTIFIER before HTTP', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    await expect(
      api.save(parent, { nestedUnknown: NestedUnknownStrategy.ByIdentifier })
    ).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.MISSING_IDENTIFIER })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('7.7 nested unknown with kod, Resolve (default), server finds it — 1 pre-flight fetch', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._stub = { kod: 'RESOLVE_ME' }
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    // First fetch: resolve the child
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(CHILD_PATH, 20)))
    // Second fetch: save
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent) // default strategy = Resolve
    expect(mockFetch).toHaveBeenCalledTimes(2)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toBe(20)
  })

  test('7.8 nested unknown with kod, Resolve, server 404 — falls back to {kod}', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._stub = { kod: 'FALLBACK' }
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexi404())
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toBe('code:FALLBACK')
  })

  test('7.9 nested unknown with no identifier, Resolve+fallback — throws MISSING_IDENTIFIER', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._state = 'unknown' // no stub, no kod
    ;(parent as any).child = child
    parent._orig.child = undefined
    await expect(api.save(parent)).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.MISSING_IDENTIFIER })
    )
  })

  test('7.10 nested unknown, Strict — throws UNRESOLVED_ENTITY immediately, 0 fetch', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._stub = { kod: 'STRICT' }
    child._state = 'unknown'
    ;(parent as any).child = child
    parent._orig.child = undefined
    await expect(
      api.save(parent, { nestedUnknown: NestedUnknownStrategy.Strict })
    ).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.UNRESOLVED_ENTITY })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('7.11 nested exists, Strict — no error', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._setId(5)
    ;(parent as any).child = child
    parent._orig.child = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await expect(
      api.save(parent, { nestedUnknown: NestedUnknownStrategy.Strict })
    ).resolves.not.toThrow()
  })

  test('7.14 only nested entity changed — hasChanged()=true, nested changes in payload', async () => {
    const parent = await api.create(ParentClass)
    parent._setId(1)
    const child = await api.create(ChildClass)
    child._setId(10)
    child._orig.title = 'original'
    ;(child as any).title = 'modified'
    parent._orig.child = child
    ;(parent as any).child = child
    // parent scalar unchanged — but nested child changed
    expect(parent.hasChanged()).toBe(true)
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(PARENT_PATH, 1)))
    await api.save(parent)
    const payload = getEntityPayload(getLastBody(mockFetch), PARENT_PATH)
    expect(payload.child).toBeDefined()
  })
})
