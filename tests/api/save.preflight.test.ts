/**
 * Layer 2 — AFApiClient.save pre-flight logic
 * Spec §7.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload, savePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass } = makeEntityClass({ name: PropertyType.String })

// Extract the body object that was passed to the most recent fetch call
function getLastBody(mockFetch: jest.Mock): any {
  const calls = mockFetch.mock.calls
  const lastCall = calls[calls.length - 1] as [string, RequestInit]
  return JSON.parse(lastCall[1].body as string)
}

// Get the entity payload from the winstrom body
function getEntityPayload(body: any, entityPath: string): any {
  const item = body.winstrom[0]
  return item[entityPath] ?? item
}

describe('save pre-flight', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('6.1 new entity (state=new) — 0 pre-flight fetch, body has create=ok update=fail', async () => {
    const ent = await api.create(EntityClass)
    ;(ent as any).name = 'hello'
    ent._orig.name = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 1)))
    await api.save(ent)
    // Only one fetch call (the save itself — no pre-flight)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const body = getLastBody(mockFetch)
    const payload = getEntityPayload(body, ENTITY_PATH)
    expect(payload['@create'] ?? payload.create).toBe('ok')
    expect(payload['@update'] ?? payload.update).toBe('fail')
  })

  test('6.2 existing entity (_id set) — 0 pre-flight fetch, body has create=fail update=ok', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(42)
    ;(ent as any).name = 'updated'
    ent._orig.name = 'old'
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 42)))
    await api.save(ent)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const body = getLastBody(mockFetch)
    const payload = getEntityPayload(body, ENTITY_PATH)
    expect(payload['@create'] ?? payload.create).toBe('fail')
    expect(payload['@update'] ?? payload.update).toBe('ok')
  })

  test('6.3 unknown entity, resolve finds it — 1 pre-flight fetch + save with update path', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'EXISTING' }
    ent._state = 'unknown'
    ;(ent as any).name = 'updated'
    ent._orig.name = 'old'
    // First call: resolve
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 10)))
    // Second call: save
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 10)))
    await api.save(ent)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    const body = getLastBody(mockFetch)
    const payload = getEntityPayload(body, ENTITY_PATH)
    expect(payload['@create'] ?? payload.create).toBe('fail')
    expect(payload['@update'] ?? payload.update).toBe('ok')
  })

  test('6.4 unknown entity, resolve returns null — save with create path', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'NEW_ONE' }
    ent._state = 'unknown'
    ;(ent as any).name = 'brand new'
    ent._orig.name = undefined
    mockFetch.mockResolvedValueOnce(flexi404())
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 20)))
    await api.save(ent)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    const body = getLastBody(mockFetch)
    const payload = getEntityPayload(body, ENTITY_PATH)
    expect(payload['@create'] ?? payload.create).toBe('ok')
    expect(payload['@update'] ?? payload.update).toBe('fail')
  })

  test('6.5 server returns id in save response — entity.id is set', async () => {
    const ent = await api.create(EntityClass)
    ;(ent as any).name = 'hello'
    ent._orig.name = undefined
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 99)))
    await api.save(ent)
    expect(ent.id).toBe(99)
    expect(ent.isNew).toBe(false)
  })

  test('6.6 new entity with uzivatelske-vazby — throws FORBIDDEN_OPERATION before any fetch', async () => {
    const ent = await api.create(EntityClass)
    ;(ent as any)['uzivatelske-vazby'] = [{ evidenceType: 'interni-doklad', objectId: 1 }]
    await expect(api.save(ent)).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.FORBIDDEN_OPERATION })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('6.7 existing entity with uzivatelske-vazby — no error, save proceeds', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    ;(ent as any)['uzivatelske-vazby'] = [{ evidenceType: 'interni-doklad', objectId: 1 }]
    ;(ent as any).name = 'ok'
    ent._orig.name = 'old'
    mockFetch.mockResolvedValueOnce(flexiOk(savePayload(ENTITY_PATH, 5)))
    await expect(api.save(ent)).resolves.not.toThrow()
  })
})
