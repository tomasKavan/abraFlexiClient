/**
 * Layer 2 — AFApiClient._resolveId (private, tested via cast)
 * Spec §4.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, makeStubCache, flexiOk, flexi404, resolvePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass, makeInstance } = makeEntityClass({ name: PropertyType.String })

// Shortcut: create an entity already wired to the right stubCache
function makeEnt(api: any) {
  return api.create(EntityClass).then ? api.create(EntityClass) : makeInstance()
}

describe('_resolveId', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('3.1 entity already has _id — returns _id immediately, 0 fetch calls', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    const result = await api._resolveId(ent)
    expect(result).toBe(5)
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('3.2 _stub.id, server 200 — sets id, state exists, returns id', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { id: 5 }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 5)))
    const result = await api._resolveId(ent)
    expect(result).toBe(5)
    expect(ent.id).toBe(5)
    expect(ent.isNew).toBe(false)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/5.json`)
    expect(url).toContain('detail=id')
    expect(url).toContain('no-ext-ids=true')
  })

  test('3.3 _stub.id, server 404 — returns null, state new', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { id: 99 }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexi404())
    const result = await api._resolveId(ent)
    expect(result).toBeNull()
    expect(ent.isNew).toBe(true)
    expect(ent._state).toBe('new')
  })

  test('3.4 _stub.kod, server 200 — uses code: URL, returns id', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'MYCODE' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 7)))
    const result = await api._resolveId(ent)
    expect(result).toBe(7)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/code:MYCODE.json`)
  })

  test('3.5 entity.kod set (no stub), server 200 — resolves via kod', async () => {
    const ent = await api.create(EntityClass)
    ent.kod = 'MYKOD'
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 8)))
    const result = await api._resolveId(ent)
    expect(result).toBe(8)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/code:MYKOD.json`)
  })

  test('3.6 _stub.ext, server 200 — uses ext: URL, returns id', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { ext: ['SHOP:abc-1'] }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 9)))
    const result = await api._resolveId(ent)
    expect(result).toBe(9)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/ext:SHOP:abc-1.json`)
  })

  test('3.7 _stub.id takes priority over _stub.kod', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { id: 3, kod: 'IGNORED' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 3)))
    await api._resolveId(ent)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/3.json`)
    expect(url).not.toContain('code:')
  })

  test('3.8 _stub.kod takes priority over _stub.ext', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'USED', ext: ['IGNORED:1'] }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 4)))
    await api._resolveId(ent)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/code:USED.json`)
    expect(url).not.toContain('ext:')
  })

  test('3.9 new entity with no identifiers — returns null, 0 fetch calls', async () => {
    const ent = await api.create(EntityClass)
    // state is 'new', no stub, no kod
    const result = await api._resolveId(ent)
    expect(result).toBeNull()
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
