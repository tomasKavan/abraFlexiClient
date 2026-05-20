/**
 * Layer 2 — AFApiClient.resolveStubId
 * Spec §5.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass } = makeEntityClass({ name: PropertyType.String })

describe('resolveStubId', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('4.1 numeric id, server 200 — returns entity with id set, isNew=false', async () => {
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 5)))
    const ent = await api.resolveStubId(EntityClass, 5)
    expect(ent.id).toBe(5)
    expect(ent.isNew).toBe(false)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/5.json`)
  })

  test('4.2 code: string, server 200 — uses code: URL, entity resolved', async () => {
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 7)))
    const ent = await api.resolveStubId(EntityClass, 'code:ACME')
    expect(ent.id).toBe(7)
    expect(ent.isNew).toBe(false)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/code:ACME.json`)
  })

  test('4.3 ext: string, server 200 — uses ext: URL, entity resolved', async () => {
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 9)))
    const ent = await api.resolveStubId(EntityClass, 'ext:SHOP:abc-123')
    expect(ent.id).toBe(9)
    const [url] = mockFetch.mock.calls[0] as [string]
    expect(url).toContain(`/${ENTITY_PATH}/ext:SHOP:abc-123.json`)
  })

  test('4.4 raw string without prefix — throws INVALID_IDENTIFIER, 0 fetch calls', async () => {
    await expect(api.resolveStubId(EntityClass, 'ACME')).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.INVALID_IDENTIFIER })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('4.5 empty string — throws INVALID_IDENTIFIER', async () => {
    await expect(api.resolveStubId(EntityClass, '')).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.INVALID_IDENTIFIER })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test('4.6 numeric id, server 404 — throws OBJECT_NOT_FOUND', async () => {
    mockFetch.mockResolvedValueOnce(flexi404())
    await expect(api.resolveStubId(EntityClass, 99)).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.OBJECT_NOT_FOUND })
    )
  })

  test('4.7 code: string, server 404 — throws OBJECT_NOT_FOUND', async () => {
    mockFetch.mockResolvedValueOnce(flexi404())
    await expect(api.resolveStubId(EntityClass, 'code:MISSING')).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.OBJECT_NOT_FOUND })
    )
  })

  test('4.8 returned entity is instance of requested class', async () => {
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 5)))
    const ent = await api.resolveStubId(EntityClass, 5)
    expect(ent).toBeInstanceOf(EntityClass)
  })
})
