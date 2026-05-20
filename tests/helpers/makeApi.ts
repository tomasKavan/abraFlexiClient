/**
 * Creates an AFApiClient with an injected mock fetch.
 * Every Layer 2 test uses this instead of constructing AFApiClient directly.
 *
 * Usage:
 *   const mockFetch = jest.fn()
 *   const api = makeApi(mockFetch)
 *   mockFetch.mockResolvedValueOnce(flexiResponse({ id: 5 }))
 */

import { AFApiClient } from '../../src/abra/AFApiClient.js'
export { makeStubCache } from './makeEntity.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MockFetch = (...args: any[]) => any

export function makeApi(mockFetch: MockFetch): AFApiClient {
  return new AFApiClient({
    url: 'https://test.flexi/',
    company: 'testco',
    fetch: mockFetch as any,
  })
}

// ---------------------------------------------------------------------------
// Response builders — produce Response-like objects matching Flexi JSON shape
// ---------------------------------------------------------------------------

/** Wraps a winstrom payload in a fetch Response with status 200. */
export function flexiOk(winstrom: object): Response {
  return {
    ok: true,
    status: 200,
    json: () => Promise.resolve({ winstrom }),
    text: () => Promise.resolve(JSON.stringify({ winstrom })),
    headers: { get: () => 'application/json' },
  } as unknown as Response
}

/** Returns a 404 Response. */
export function flexi404(): Response {
  return {
    ok: false,
    status: 404,
    json: () => Promise.resolve({ winstrom: { '@version': '1', status: 'NOT_FOUND' } }),
    text: () => Promise.resolve(''),
    headers: { get: () => 'application/json' },
  } as unknown as Response
}

/**
 * Builds the minimal winstrom payload that _resolveId expects:
 * { 'test-entity': [{ id: N }] }
 */
export function resolvePayload(entityPath: string, id: number): object {
  return {
    '@version': '1.0',
    [entityPath]: [{ id }],
  }
}

/**
 * Builds the minimal save result payload that _applySaveResultToEntity expects:
 * { results: [{ ref: '/c/testco/<entityPath>/<id>', id: N }] }
 */
export function savePayload(entityPath: string, id: number): object {
  return {
    '@version': '1.0',
    results: [
      {
        ref: `/c/testco/${entityPath}/${id}`,
        id,
      },
    ],
  }
}
