/**
 * Layer 2 — AFApiClient.query decode (ISSUE-22 regression)
 *
 * Guards against two bugs that emerged when `id` became a getter-only
 * property on AFEntity but was still present in propAnnotations of generated
 * entity classes:
 *
 *  Q.1  query() resolves and entity.id is correctly set via _setId
 *  Q.2  decoded entity is not dirty after query (secondary bug: hasChanged
 *       must return false when the entity was just loaded from the server)
 *  Q.3  defense-in-depth: entity that still has `id` in propAnnotations
 *       does not throw — the guard in _decodeProperty swallows it silently
 *       and _setId still sets the id correctly
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { makeApi, flexiOk } from '../helpers/makeApi.js'
import { makeEntityClass } from '../helpers/makeEntity.js'
import { PropertyType } from '../../src/abra/AFTypes.js'

const ENTITY_PATH = 'test-entity'

// Normal entity — id is NOT in propAnnotations (correct post-ISSUE-22 state)
const { EntityClass: CleanEntity } = makeEntityClass({ name: PropertyType.String })
;(CleanEntity as any).EntityPath = ENTITY_PATH

// Simulates a stale generated entity that still has id in propAnnotations.
// The _decodeProperty guard must prevent a TypeError here.
const { EntityClass: StaleEntity } = makeEntityClass({
  id:   PropertyType.Integer,   // ← the old, buggy annotation
  name: PropertyType.String,
})
;(StaleEntity as any).EntityPath = ENTITY_PATH

function queryResponse(entityPath: string, records: object[]): object {
  return { '@version': '1.0', [entityPath]: records }
}

describe('query decode', () => {
  let mockFetch: any
  let api: any

  beforeEach(() => {
    mockFetch = jest.fn()
    api = makeApi(mockFetch)
  })

  // noUpdateStitkyCache suppresses the fetchTick() call so tests only need
  // one mocked response (the entity query itself).
  const NO_STITKY = { noUpdateStitkyCache: true }

  // ── Q.1 ─────────────────────────────────────────────────────────────────
  test('Q.1 query resolves and entity.id is set correctly', async () => {
    mockFetch.mockResolvedValueOnce(
      flexiOk(queryResponse(ENTITY_PATH, [{ id: 42, name: 'Acme' }]))
    )
    const results = await api.query(CleanEntity, NO_STITKY)
    expect(results).toHaveLength(1)
    expect(results[0].id).toBe(42)
    expect((results[0] as any).name).toBe('Acme')
  })

  // ── Q.2 ─────────────────────────────────────────────────────────────────
  test('Q.2 decoded entity is not dirty — hasChanged() returns false after query', async () => {
    mockFetch.mockResolvedValueOnce(
      flexiOk(queryResponse(ENTITY_PATH, [{ id: 7, name: 'Loaded' }]))
    )
    const results = await api.query(CleanEntity, NO_STITKY)
    const ent = results[0]
    // Entity just came from the server — nothing should be dirty
    expect(ent.hasChanged()).toBe(false)
  })

  // ── Q.3 ─────────────────────────────────────────────────────────────────
  test('Q.3 entity with id in propAnnotations does not throw — guard silently skips it', async () => {
    mockFetch.mockResolvedValueOnce(
      flexiOk(queryResponse(ENTITY_PATH, [{ id: 99, name: 'Stale' }]))
    )
    // Must not throw despite StaleEntity having id in propAnnotations
    const results = await api.query(StaleEntity, NO_STITKY)
    expect(results).toHaveLength(1)
    // id must still be set correctly by the _setId path
    expect(results[0].id).toBe(99)
  })
})
