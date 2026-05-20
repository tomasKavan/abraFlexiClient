/**
 * Layer 2 — AFApiClient.delete pre-flight
 * Spec §7.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass } = makeEntityClass({ name: PropertyType.String })

function deleteOk(): Response {
  return {
    ok: true,
    status: 200,
    json: () => Promise.resolve({ winstrom: { '@version': '1' } }),
    headers: { get: () => 'application/json' },
  } as unknown as Response
}

describe('delete pre-flight', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('8.1 entity has _id — single DELETE, no pre-flight', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    mockFetch.mockResolvedValueOnce(deleteOk())
    const result = await api.delete(ent)
    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const [url, init] = mockFetch.mock.calls[0] as [string, RequestInit]
    expect(url).toContain(`/${ENTITY_PATH}/5.json`)
    expect(init.method).toBe('DELETE')
  })

  test('8.2 unknown entity, resolve finds it — pre-flight fetch then DELETE', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'EXISTING' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 7)))
    mockFetch.mockResolvedValueOnce(deleteOk())
    const result = await api.delete(ent)
    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    const [deleteUrl, init] = mockFetch.mock.calls[1] as [string, RequestInit]
    expect(deleteUrl).toContain(`/${ENTITY_PATH}/7.json`)
    expect(init.method).toBe('DELETE')
  })

  test('8.3 unknown entity, resolve returns null — returns true, no DELETE sent', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'GHOST' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexi404())
    const result = await api.delete(ent)
    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledTimes(1) // only the resolve fetch
    // no DELETE request
    const methods = (mockFetch.mock.calls as [string, RequestInit][]).map(c => c[1]?.method)
    expect(methods).not.toContain('DELETE')
  })

  test('8.4 new entity — returns true, 0 fetch calls', async () => {
    const ent = await api.create(EntityClass)
    // state is 'new'
    const result = await api.delete(ent)
    expect(result).toBe(true)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
