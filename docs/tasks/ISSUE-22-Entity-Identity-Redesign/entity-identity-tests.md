# Entity Identity Redesign — Test Plan

Companion to [entity-identity-redesign.md](./entity-identity-redesign.md).  
Implements test coverage for every behaviour described in that spec.

---

## Setup

### 1. Jest configuration

Add `jest.config.ts` at the repo root:

```typescript
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '\\.integration\\.test\\.ts$'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config
```

### 2. `package.json` scripts

```json
"test":            "jest",
"test:watch":      "jest --watch",
"test:integration": "jest --testPathPattern=\\.integration\\.test\\.ts$"
```

### 3. Directory structure

```
tests/
  helpers/
    makeApi.ts        # factory: AFApiClient with injected mock fetch
    makeEntity.ts     # factory: bare AFEntity subclass for state tests
  unit/
    AFEntity.state.test.ts
    AFEntity.hasChanged.test.ts
  api/
    resolveId.test.ts
    resolveStubId.test.ts
    resolve.test.ts
    save.preflight.test.ts
    save.nested.test.ts
    delete.test.ts
    callEntityAction.test.ts
  generator/
    classProperty.test.ts
  integration/           # skipped in CI — run with npm run test:integration
    resolve.integration.test.ts
    save.integration.test.ts
```

### 4. Shared helpers

**`tests/helpers/makeEntity.ts`**  
Creates a minimal concrete `AFEntity` subclass with a controlled `propAnnotations` map.
Used in Layer 1 tests that exercise state and dirty-tracking without going through
`AFApiClient`.

**`tests/helpers/makeApi.ts`**  
```typescript
export function makeApi(mockFetch: jest.Mock) {
  return new AFApiClient({
    url: 'https://test.flexi/',
    company: 'testco',
    fetch: mockFetch,
  })
}
```
Every Layer 2 test uses this instead of constructing `AFApiClient` directly.

---

## Layer 1 — `AFEntity` state machine (pure unit, no network)

File: `tests/unit/AFEntity.state.test.ts`

### Initial state

| # | Scenario | Assert |
|---|---|---|
| 1.1 | Entity created via `api.create()` | `isNew === true`, `id === undefined`, `_state === 'new'` |
| 1.2 | Entity state is `'new'` | `isNew` returns `true` (not `undefined`, not `false`) |

### `_setId`

| # | Scenario | Assert |
|---|---|---|
| 1.3 | `_setId(5)` called | `id === 5`, `isNew === false`, `_state === 'exists'` |
| 1.4 | `_setId` called twice with same value | no error, `id` unchanged |
| 1.5 | `id` field is not directly assignable | TypeScript compile error (type-level test via `@ts-expect-error`) |

### `_stub` / `'unknown'` state

| # | Scenario | Assert |
|---|---|---|
| 1.6 | `createIdStub({ id: 5 })` | `_state === 'unknown'`, `isNew === undefined`, `id === undefined`, `_stub.id === 5` |
| 1.7 | `createIdStub({ kod: 'X' })` | `_state === 'unknown'`, `isNew === undefined`, `_stub.kod === 'X'` |
| 1.8 | `createIdStub({ ext: ['SHOP:1'] })` | `_state === 'unknown'`, `_stub.ext === ['SHOP:1']` |
| 1.9 | `isNew` in `'unknown'` state | returns `undefined` (not `true` or `false`) |

### `isNew` exhaustive

| # | State | `isNew` |
|---|---|---|
| 1.10 | `'new'` | `true` |
| 1.11 | `'unknown'` | `undefined` |
| 1.12 | `'exists'` | `false` |

---

## Layer 1 — `AFEntity` dirty tracking (pure unit)

File: `tests/unit/AFEntity.hasChanged.test.ts`

These tests verify that `hasChanged`, `changedKeys`, and `reset` still work correctly after
the state refactor. They must pass for entities in all three states.

| # | Scenario | Assert |
|---|---|---|
| 2.1 | Freshly created entity, no fields set | `hasChanged() === false`, `pristine === true` |
| 2.2 | Scalar field mutated | `hasChanged() === true`, `changedKeys()` includes that key |
| 2.3 | Field set back to original value | `hasChanged() === false` |
| 2.4 | `hasChanged(key)` on unknown key | throws `AFError(PROPERTY_NOT_FOUND)` |
| 2.5 | Relation array reordered | `hasChanged() === true` |
| 2.6 | Relation array item has changed field | `hasChanged() === true` |
| 2.7 | Relation array unchanged | `hasChanged() === false` |
| 2.8 | `reset(true)` resets all fields to `_orig` | `hasChanged() === false` |
| 2.9 | `reset(key)` resets single field | only that field reverts |
| 2.10 | `wasLoaded(key)` returns false when not in `_orig` | `false` |
| 2.11 | `wasLoaded(key)` returns true after decode | `true` |
| 2.12 | Entity in `'exists'` state — dirty tracking unchanged | same behaviour as `'new'` |

---

## Layer 2 — `AFApiClient` with mock fetch

All tests in this layer pass a `jest.Mock` as `config.fetch`. Response shapes mirror real
Flexi JSON (`{ winstrom: { ... } }`). No network, no server.

### `_resolveId` — `tests/api/resolveId.test.ts`

| # | Scenario | Fetch calls | Assert |
|---|---|---|---|
| 3.1 | Entity has `_id` set (`'exists'`) | 0 | returns `_id` immediately |
| 3.2 | `_stub.id`, server returns 200 `{id: 5}` | 1 — `GET /{path}/5.json?detail=id&no-ext-ids=true` | returns `5`, entity `_state === 'exists'` |
| 3.3 | `_stub.id`, server returns 404 | 1 | returns `null`, entity `_state === 'new'` |
| 3.4 | `_stub.kod`, server returns 200 | 1 — `GET /{path}/code:X.json?detail=id&no-ext-ids=true` | returns id, state `'exists'` |
| 3.5 | `entity.kod` set (no stub), server returns 200 | 1 — same URL pattern | returns id |
| 3.6 | `_stub.ext`, server returns 200 | 1 — `GET /{path}/ext:SHOP:1.json?detail=id&no-ext-ids=true` | returns id |
| 3.7 | Both `_stub.id` and `_stub.kod` present | 1 — uses `_stub.id` (priority: id first) | correct URL |
| 3.8 | Both `_stub.kod` and `_stub.ext` present | 1 — uses `kod` (priority: kod before ext) | correct URL |
| 3.9 | Entity is `'new'`, no identifiers | 0 | returns `null` immediately |

### `resolveStubId` — `tests/api/resolveStubId.test.ts`

| # | Scenario | Assert |
|---|---|---|
| 4.1 | Numeric id, server returns 200 | returns entity, `isNew === false`, `id` set |
| 4.2 | `CODE('ACME')` string, server returns 200 | `code:ACME` URL used, entity resolved |
| 4.3 | `EXT('SHOP:abc')` string, server returns 200 | `ext:SHOP:abc` URL used, entity resolved |
| 4.4 | Raw string without prefix (e.g. `'ACME'`) | throws `AFError(INVALID_IDENTIFIER)`, 0 fetch calls |
| 4.5 | Empty string | throws `AFError(INVALID_IDENTIFIER)` |
| 4.6 | Numeric id, server returns 404 | throws `AFError(OBJECT_NOT_FOUND)` |
| 4.7 | `CODE('X')`, server returns 404 | throws `AFError(OBJECT_NOT_FOUND)` |
| 4.8 | Returned entity has correct `EntityPath` | entity is instance of the requested class |

### `resolve` — `tests/api/resolve.test.ts`

| # | Scenario | Assert |
|---|---|---|
| 5.1 | Entity with `kod`, server finds it | same instance returned, `id` populated, `isNew === false` |
| 5.2 | Entity not found, `throwIfNotFound` falsy | same instance returned, `isNew === true`, `id` undefined |
| 5.3 | Entity not found, `throwIfNotFound: true` | throws `AFError(OBJECT_NOT_FOUND)` |
| 5.4 | Entity already has `_id`, `kod` resolves to same id | 0 extra fetch (fast path — `_id` already set) |
| 5.5 | Entity has `_id = 5`, `kod` resolves to id `7` | throws `AFError(ID_MISMATCH)` |
| 5.6 | `resolve` on `'new'` entity with no identifiers | returns entity unchanged, 0 fetch calls |

### `save` pre-flight — `tests/api/save.preflight.test.ts`

| # | Scenario | Assert |
|---|---|---|
| 6.1 | New entity (`_state === 'new'`) | 0 pre-flight fetch; body contains `create="ok" update="fail"` |
| 6.2 | Existing entity (`_id` set) | 0 pre-flight fetch; body contains `create="fail" update="ok"` |
| 6.3 | `'unknown'` entity, `_resolveId` finds it | 1 pre-flight fetch; body uses `update` path |
| 6.4 | `'unknown'` entity, `_resolveId` returns null | 1 pre-flight fetch; body uses `create` path |
| 6.5 | Server returns id in save response | `entity.id` is set on return |
| 6.6 | New entity with `uzivatelske-vazby` set | throws `AFError(FORBIDDEN_OPERATION)` before any fetch |
| 6.7 | Existing entity with `uzivatelske-vazby` | no error, save proceeds |

### `save` nested entity encoding — `tests/api/save.nested.test.ts`

Tests cover the three `NestedUnknownStrategy` values and the default.

**Common setup**: root entity in `'exists'` state, with one relation property pointing to a
nested entity.

| # | Nested state | Strategy | Assert |
|---|---|---|---|
| 7.1 | `'exists'`, no changes | any | payload contains `{ id: N }` only, no extra fields |
| 7.2 | `'exists'`, field changed | any | payload contains `{ id: N, changedField: val }` |
| 7.3 | `'new'` | any | payload contains full nested object inline |
| 7.4 | `'unknown'` with `kod` | `ByIdentifier` (explicit) | payload `{ kod: "X" }`, 0 extra fetch |
| 7.5 | `'unknown'` with `ext` | `ByIdentifier` | payload `{ ext: "SHOP:1" }`, 0 extra fetch |
| 7.6 | `'unknown'`, no identifiers | `ByIdentifier` | throws `AFError(MISSING_IDENTIFIER)` before HTTP |
| 7.7 | `'unknown'` with `kod` | `Resolve` (default), server finds it | 1 pre-flight fetch for nested; payload `{ id: N }` |
| 7.8 | `'unknown'` with `kod` | `Resolve`, server returns 404 | falls back to `{ kod: "X" }` |
| 7.9 | `'unknown'`, no identifiers | `Resolve`, server returns 404 | throws `AFError(MISSING_IDENTIFIER)` |
| 7.10 | `'unknown'` | `Strict` | throws `AFError(UNRESOLVED_ENTITY)` immediately, 0 fetch |
| 7.11 | `'exists'` | `Strict` | no error — only `'unknown'` triggers throw |
| 7.12 | Two-level deep: root `'exists'`, child `'unknown'`, grandchild `'new'` | `Resolve` | correct payload at each level |
| 7.13 | Root has changed scalar AND changed nested entity | any | both appear in payload |
| 7.14 | Only nested entity has changes, root scalar unchanged | any | `hasChanged()` is `true`, nested changes in payload |

### `delete` — `tests/api/delete.test.ts`

| # | Scenario | Assert |
|---|---|---|
| 8.1 | Entity has `_id` | single DELETE request, no pre-flight |
| 8.2 | `'unknown'` entity, resolve finds it | pre-flight fetch, then DELETE with resolved id |
| 8.3 | `'unknown'` entity, resolve returns null | returns `true`, no DELETE sent |
| 8.4 | `'new'` entity | returns `true`, 0 fetch calls |

### `callEntityAction` — `tests/api/callEntityAction.test.ts`

| # | Scenario | Assert |
|---|---|---|
| 9.1 | Entity has `_id` | no pre-flight fetch, action request sent |
| 9.2 | `'unknown'` entity, resolve finds it | pre-flight fetch, action proceeds |
| 9.3 | `'unknown'` entity, resolve returns null | throws `AFError(OBJECT_NOT_FOUND)` |

---

## Generator smoke test — `tests/generator/classProperty.test.ts`

Runs the EJS template directly against a controlled property descriptor list and asserts
the rendered output.

| # | Input `propertyName` | Assert output contains |
|---|---|---|
| 10.1 | `'id'` | empty string — nothing emitted |
| 10.2 | `'kod'` | `declare kod?: string \| null` |
| 10.3 | `'stitky'` | `declare stitky?: string \| null` |
| 10.4 | any other property | regular `propName?: Type \| null` (no `declare`) |

This guards against the generator accidentally re-emitting `id` after the template fix.

---

## Layer 3 — Integration tests (optional, not run in CI)

Files: `tests/integration/*.integration.test.ts`

Require environment variables `FLEXI_URL`, `FLEXI_COMPANY`, `FLEXI_USER`, `FLEXI_PASS`
pointing to a real test company with a stable set of fixtures.

Run with: `npm run test:integration`

| # | Scenario |
|---|---|
| I.1 | `resolveStubId(AFAdresar, CODE('TEST_FIRM'))` — known kod resolves to expected numeric id |
| I.2 | `resolveStubId(AFAdresar, 99999999)` — non-existent id throws `OBJECT_NOT_FOUND` |
| I.3 | `resolve(entity)` where entity has `kod` set — populates `id` in place |
| I.4 | `save()` on new entity — id written back, state transitions to `'exists'` |
| I.5 | `save()` on existing entity — update succeeds, no duplicate created |
| I.6 | `save()` with `'unknown'` nested entity (default `Resolve` strategy) — resolves and saves |
