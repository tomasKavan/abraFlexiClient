/**
 * Layer 2 — AFApiClient.resolve
 * Spec §6.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass } = makeEntityClass({ name: PropertyType.String })

describe('resolve', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('5.1 entity with kod, server finds it — same instance returned, id populated', async () => {
    const ent = await api.create(EntityClass)
    ent.kod = 'ACME'
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 5)))
    const returned = await api.resolve(ent)
    expect(returned).toBe(ent)             // same instance
    expect(ent.id).toBe(5)
    expect(ent.isNew).toBe(false)
  })

  test('5.2 not found, throwIfNotFound falsy — state new, id undefined, same instance', async () => {
    const ent = await api.create(EntityClass)
    ent.kod = 'MISSING'
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexi404())
    const returned = await api.resolve(ent, false)
    expect(returned).toBe(ent)
    expect(ent.isNew).toBe(true)
    expect(ent.id).toBeUndefined()
  })

  test('5.3 not found, throwIfNotFound=true — throws OBJECT_NOT_FOUND', async () => {
    const ent = await api.create(EntityClass)
    ent.kod = 'MISSING'
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexi404())
    await expect(api.resolve(ent, true)).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.OBJECT_NOT_FOUND })
    )
  })

  test('5.4 entity already has _id — 0 fetch calls (fast path)', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    ent.kod = 'ACME'
    const returned = await api.resolve(ent)
    expect(returned).toBe(ent)
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('5.5 entity has _id=5, kod resolves to id=7 — throws ID_MISMATCH', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    ent.kod = 'DIFFERENT'
    // Manually allow the resolve to reach the server (bypass fast path)
    // by directly testing the mismatch scenario
    // We simulate this by calling _resolveId on an entity without _id but then
    // triggering the mismatch check in resolve()
    const ent2 = await api.create(EntityClass)
    ent2._setId(5)
    // Override _id to force a path where _resolveId is called and returns different id
    // We achieve this by having entity with _id set but also triggering a check
    // In practice, resolve() should call _resolveId when entity has _id set to verify.
    // Per spec: if entity has _id AND kod, resolve uses kod URL and checks mismatch.
    // For the test, we need to mock a server returning id=7 for entity with _id=5.
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 7)))
    // Create entity in exists state but with a kod that resolves to a different id
    const ent3 = await api.create(EntityClass)
    ent3._setId(5)
    ent3.kod = 'CONFLICTING'
    // Force resolve to re-check even though _id is set
    await expect(api.resolve(ent3)).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.ID_MISMATCH })
    )
  })

  test('5.6 new entity with no identifiers — returns entity unchanged, 0 fetch calls', async () => {
    const ent = await api.create(EntityClass)
    // state is 'new', no kod, no stub
    const returned = await api.resolve(ent)
    expect(returned).toBe(ent)
    expect(ent.isNew).toBe(true)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
