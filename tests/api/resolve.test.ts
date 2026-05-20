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

  test('5.6 new entity with no identifiers — returns entity unchanged, 0 fetch calls', async () => {
    const ent = await api.create(EntityClass)
    // state is 'new', no kod, no stub
    const returned = await api.resolve(ent)
    expect(returned).toBe(ent)
    expect(ent.isNew).toBe(true)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
