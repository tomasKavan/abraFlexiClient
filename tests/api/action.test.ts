/**
 * Layer 2 — AFApiClient.action pre-flight
 * Spec §7.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk, flexi404, resolvePayload } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { AFError, AFErrorCode } from '../../src/abra/AFError.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'
const { EntityClass } = makeEntityClass(
  { name: PropertyType.String },
  { actions: { Storno: 'storno' } }
)

function actionOk(): Response {
  return {
    ok: true,
    status: 200,
    json: () => Promise.resolve({ winstrom: { '@version': '1' } }),
    headers: { get: () => 'application/json' },
  } as unknown as Response
}

describe('action pre-flight', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  test('9.1 entity has _id — no pre-flight, action request sent', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    mockFetch.mockResolvedValueOnce(actionOk())
    const result = await api.action(ent, 'storno')
    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const [, init] = mockFetch.mock.calls[0] as [string, RequestInit]
    const body = JSON.parse(init.body as string)
    expect(body.winstrom[0][`${ENTITY_PATH}@action`]).toBe('storno')
  })

  test('9.2 unknown entity, resolve finds it — pre-flight fetch then action', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'EXISTING' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexiOk(resolvePayload(ENTITY_PATH, 7)))
    mockFetch.mockResolvedValueOnce(actionOk())
    const result = await api.action(ent, 'storno')
    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  test('9.3 unknown entity, resolve returns null — throws OBJECT_NOT_FOUND', async () => {
    const ent = await api.create(EntityClass)
    ent._stub = { kod: 'GHOST' }
    ent._state = 'unknown'
    mockFetch.mockResolvedValueOnce(flexi404())
    await expect(api.action(ent, 'storno')).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.OBJECT_NOT_FOUND })
    )
  })

  test('9.4 unsupported action — throws UNKNOWN, no action request sent', async () => {
    const ent = await api.create(EntityClass)
    ent._setId(5)
    await expect(api.action(ent, 'not-a-real-action')).rejects.toThrow(
      expect.objectContaining({ code: AFErrorCode.UNKNOWN })
    )
    expect(mockFetch).not.toHaveBeenCalled()
  })
})
