/**
 * Creates a minimal concrete AFEntity subclass with controlled propAnnotations.
 * Use this in Layer 1 tests that exercise state and dirty-tracking without AFApiClient.
 *
 * Usage:
 *   const { EntityClass, makeInstance } = makeEntityClass({ name: PropertyType.String })
 *   const ent = makeInstance()
 *   (ent as any).name = 'foo'   // access dynamic props via cast
 */

import { AFEntity } from '../../src/abra/AFEntity.js'
import { AFStitkyCache } from '../../src/abra/AFStitkyCache.js'
import { PropertyType, TypeAnnotation } from '../../src/abra/AFTypes.js'

// Minimal stub that satisfies AFEntity's use of AFStitkyCache
export function makeStubCache(): AFStitkyCache {
  return {
    stitkyWithString: () => undefined,
    fetchTick: () => Promise.resolve(),
    strategy: undefined,
  } as unknown as AFStitkyCache
}

export type PropMap = Record<string, PropertyType>

/**
 * Returns a concrete AFEntity subclass whose propAnnotations are derived from
 * the given PropMap (each key → scalar TypeAnnotation for that PropertyType).
 * Also returns a factory function so individual tests can create fresh instances.
 */
export function makeEntityClass(props: PropMap = { name: PropertyType.String }) {
  const annotations: Record<string, TypeAnnotation> = {}
  for (const [k, type] of Object.entries(props)) {
    annotations[k] = { key: k, type, isArray: false }
  }

  class TestEntity extends AFEntity {
    static override EntityPath = 'test-entity'
    static override EntityName = 'TestEntity'
    static override EntityType = 'test'
    static override propAnnotations: Record<string, TypeAnnotation> = annotations
  }

  const stubCache = makeStubCache()

  function makeInstance(): TestEntity {
    return new TestEntity(stubCache)
  }

  return { EntityClass: TestEntity, makeInstance }
}
