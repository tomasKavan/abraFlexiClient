# Entity Identity Redesign — Implementation Spec

Closes [#22](https://github.com/tomasKavan/abraFlexiClient/issues/22)

## Motivation

The current `_isNew: boolean` conflates two separate concerns: whether the library has
a stable server-side reference to a record, and what identifier was used to create the
local instance. The ABRA Flexi API has a richer identity model:

- **Internal `id`** — immutable, server-assigned, the only truly stable reference.
- **`kod`** — mutable, user-assigned; can be renamed at any time via GUI or API.
- **`ext:` identifiers** — mutable array, controlled by external systems.

The redesign makes `id` the single source of truth. Everything else is an address that
must be resolved to an `id` before being trusted.

---

## 1. New concept: entity state

Replace `_isNew: boolean` with an explicit tri-state on `AFEntity`.

```typescript
// Internal — not exported
type AFEntityState = 'new' | 'unknown' | 'exists'
```

| State | `isNew` | Meaning |
|---|---|---|
| `'new'` | `true` | Definitely no server record: created via `api.create()` with no identifiers, or resolved and not found. |
| `'unknown'` | `undefined` | Has `kod`/`ext` or stub identifiers but `resolve` has not been called yet. Existence is uncertain. |
| `'exists'` | `false` | Server existence confirmed. `id` is set. |

### State transition table

| Trigger | From | To |
|---|---|---|
| `api.create()` | — | `'new'` |
| `createIdStub(any)` *(deprecated)* | — | `'unknown'` |
| Set `entity.kod` or add ext id | `'new'` | `'unknown'` |
| Set `entity.kod` or add ext id | `'exists'` | `'exists'` *(stay — record still exists)* |
| `_resolveId` / `resolveStubId` / `resolve` — **found** | any | `'exists'` |
| `_resolveId` / `resolveStubId` / `resolve` — **not found** | any | `'new'` |
| `save()` completes successfully | any | `'exists'` |
| `_decodeEntityObj` (server response decoded) | — | `'exists'` |

---

## 2. `AFEntity` changes

### 2.1 `id` — readonly, server-authoritative

`id` becomes a getter backed by a private field `_id`. It is **never** set by
application code. Only the following internal operations may write it:

- `_setId(id: number)` — internal method on `AFEntity`, called by `AFApiClient`.
- Decoding a server response (`_decodeEntityObj`).
- `save()` writing back the server-assigned id.

```typescript
class AFEntity {
  private _id?: number | null
  private _state: AFEntityState = 'new'

  get id(): number | null | undefined {
    return this._id
  }

  /** @internal — called only by AFApiClient */
  _setId(id: number): void {
    this._id = id
    this._state = 'exists'
  }

  get isNew(): boolean | undefined {
    switch (this._state) {
      case 'new':     return true
      case 'unknown': return undefined
      case 'exists':  return false
    }
  }
  // ... rest unchanged
}
```

`_setId` is intentionally not private so `AFApiClient` can call it without
complex patterns. The `@internal` JSDoc tag and naming convention communicate the
restriction. It must NOT be exported from `src/index.ts`.

### 2.2 Stub storage for deprecated `createIdStub`

`createIdStub` needs to store its argument without setting the confirmed `_id`.
Add an internal `_stub` bag to `AFEntity`:

```typescript
/** @internal */
_stub?: {
  id?: number    // pending numeric id (unverified)
  kod?: string   // pending kod (unverified)
  ext?: string[] // pending ext ids (unverified)
}
```

`createIdStub` writes to `_stub`, sets `_state = 'unknown'`, and leaves `_id`
untouched. `_resolveId` reads from `_stub` when the entity is in `'unknown'` state
and `_id` is not set.

---

## 3. `createIdStub` — deprecated

```typescript
/**
 * @deprecated Use `api.resolveStubId()` instead.
 * Creates an entity instance in 'unknown' state. Existence is NOT verified.
 * Use resolveStubId() for a verified reference.
 */
async createIdStub<T extends typeof AFEntity>(
  entity: T,
  id: IdStub
): Promise<InstanceType<T>>
```

Behaviour **unchanged** from today, except:
- State is now explicitly `'unknown'` (so `isNew` returns `undefined`).
- `_stub` is populated with the provided identifiers.
- `_id` is NOT set, even when a numeric `id` is passed in `IdStub`.

The `IdStub` type is kept for backward compatibility but marked deprecated alongside
the method.

---

## 4. New internal method: `_resolveId`

```typescript
private async _resolveId(
  entity: AFEntity,
  throwIfNotFound?: boolean
): Promise<number | null>
```

### Resolution logic

1. **Entity has `_id` set** (state `'exists'`) — return `_id` immediately. No network
   request. This is the optimisation from the design discussion: if `id` is already
   confirmed, trust it.

2. **Entity has `_stub.id`** — send:
   ```
   GET /c/<company>/<entityPath>/<stubId>.json?detail=id&no-ext-ids=true
   ```
   - 200 → call `entity._setId(responseId)`, return `responseId`.
   - 404 → set `entity._state = 'new'`, return `null` (or throw if `throwIfNotFound`).

3. **Entity has `_stub.kod` or `entity.kod`** — send:
   ```
   GET /c/<company>/<entityPath>/code:<kod>.json?detail=id&no-ext-ids=true
   ```
   Same success/failure handling as above.

4. **Entity has `_stub.ext` or ext ids on the entity** — send:
   ```
   GET /c/<company>/<entityPath>/ext:<extId>.json?detail=id&no-ext-ids=true
   ```
   Use the first ext id. Same handling.

5. **No identifiers at all** (state `'new'`, no stub) — return `null` immediately.
   No network request.

**Priority**: `id` → `_stub.id` → `kod` / `_stub.kod` → `ext` / `_stub.ext`.

---

## 5. New public method: `resolveStubId`

```typescript
async resolveStubId<T extends typeof AFEntity>(
  entity: T,
  identifier: number | string
): Promise<InstanceType<T>>
```

`identifier` is either:
- A `number` → treated as internal id.
- A `string` with prefix `code:` → treated as kod. Use `CODE('MY_CODE')` macro.
- A `string` with prefix `ext:` → treated as ext id. Use `EXT('SHOP:123')` macro.

Any other string format throws `AFError(AFErrorCode.INVALID_IDENTIFIER, ...)` immediately,
before any network request.

### Behaviour

1. Creates a new entity instance (via the internal constructor path, like `api.create()`).
2. Writes the identifier into `_stub` appropriately.
3. Sets state to `'unknown'`.
4. Calls `_resolveId(instance, true)` — throws `AFError(AFErrorCode.OBJECT_NOT_FOUND)`
   if not found.
5. Returns the resolved instance (state `'exists'`, `id` set).

### Macros

Reuse the existing `CODE()` and `EXT()` helpers from `AFFilter.ts`. They already produce
strings with the correct `code:` and `ext:` prefixes. No new macro types needed.

```typescript
import { CODE, EXT } from 'abra-flexi'

const firm = await api.resolveStubId(AFAdresar, CODE('ACME'))
const item = await api.resolveStubId(AFCenik, EXT('SHOP:abc-123'))
const invoice = await api.resolveStubId(AFFakturaVydana, 2452)
```

---

## 6. New public method: `resolve`

```typescript
async resolve<T extends AFEntity>(
  entity: T,
  throwIfNotFound?: boolean
): Promise<T>
```

Takes an existing entity instance and resolves its identifiers to confirm existence
and populate `id`.

### Behaviour

1. Calls `_resolveId(entity, throwIfNotFound)`.
2. If found: `id` is written back via `_setId`, state becomes `'exists'`. Returns `entity`
   (same instance).
3. If not found and `throwIfNotFound` is falsy: state becomes `'new'`. Returns `entity`.
4. If not found and `throwIfNotFound` is truthy: throws
   `AFError(AFErrorCode.OBJECT_NOT_FOUND)`.

### ID mismatch detection

If the entity already has `_id` set AND the server returns a different id from a
`kod`/`ext` resolution, throw `AFError(AFErrorCode.ID_MISMATCH, ...)`. This indicates
the identifier points to a different record than the one the entity was loaded from —
a data integrity problem that must never be silently ignored.

```typescript
const entity = await api.queryOne(AFAdresar, { filter: ID(5) })
entity.kod = 'NEW_CODE' // user changed kod locally
await api.resolve(entity) // would throw ID_MISMATCH if 'NEW_CODE' resolves to record 7
```

---

## 7. Changes to `save`, `delete`, `callEntityAction`

### Shared pre-flight logic

Before executing, each method determines the entity's resolved state:

```
if (entity._id is set)          → skip _resolveId, use id directly
else if (entity.isNew === true)  → skip _resolveId, entity is definitely new
else                             → call _resolveId to determine existence
```

### `save`

```typescript
async save<T extends AFEntity>(entity: InstanceType<T>, options?: AFSaveOptions)
```

After pre-flight:

| State after pre-flight | API attributes sent | URL |
|---|---|---|
| Entity is new (no id, `_resolveId` returned null or `isNew === true`) | `create="ok" update="fail"` | list URL |
| Entity exists (id known) | `create="fail" update="ok"` | list URL with `id` in body |

This guarantees: a new record is never silently overwritten, and an expected update never
silently creates a duplicate. Any race between resolve and save is caught by Abra itself
via `update="fail"` or `create="fail"` and surfaced as `AFError(AFErrorCode.ABRA_FLEXI_ERROR)`.

The existing `uzivatelske-vazby` guard (`isNew` check) is updated to use the new state:

```typescript
if (entity._state === 'new' && hasUzivatelskevazby(entity)) {
  throw new AFError(AFErrorCode.FORBIDDEN_OPERATION, '...')
}
```

### Nested entity encoding — `NestedUnknownStrategy`

Before the root entity body is serialised, every relation property is walked recursively.
For each nested `AFEntity` encountered, its state determines encoding:

| State | Encoding |
|---|---|
| `'exists'` (has `_id`) | `{ id: _id, ...changedFields }` — no extra fetch |
| `'new'` | full object serialised inline — Flexi creates the sub-record |
| `'unknown'` | depends on `options.nestedUnknown` (see below) |

The `nestedUnknown` option (type `NestedUnknownStrategy`, default `Resolve`) controls what
happens when a nested entity is in `'unknown'` state:

**`NestedUnknownStrategy.Resolve` (default)**
Call `_resolveId` on the nested entity before encoding. If it resolves → encode as `'exists'`
with the confirmed id. If it does not resolve → fall through to `ByIdentifier` behaviour.
May issue one GET per unresolved nested entity.

**`NestedUnknownStrategy.ByIdentifier`**
Encode using whatever identifier is available, without a network call:
- Has `kod` or `_stub.kod` → `{ kod: "X" }` — Flexi resolves the reference server-side.
- Has `ext` or `_stub.ext` → `{ ext: "X" }` using the first ext id.
- Has neither → throw `AFError(AFErrorCode.MISSING_IDENTIFIER)` at encode time, before any
  HTTP request is sent.

**`NestedUnknownStrategy.Strict`**
Throw `AFError(AFErrorCode.UNRESOLVED_ENTITY)` immediately if any nested entity is
`'unknown'`. The caller is responsible for resolving all relations before calling `save()`.

Nesting is handled depth-first. Each level uses the same `options` object, so the strategy
applies uniformly to all levels of the object graph.

### `delete`

- Entity has `id` → proceed (existing behaviour).
- `_resolveId` returns null (not found) → no-op, return `true`.
- `_resolveId` finds it → proceed with returned id.

### `callEntityAction`

- Entity has `id` → proceed.
- `_resolveId` returns null → throw `AFError(AFErrorCode.OBJECT_NOT_FOUND)`.
- `_resolveId` finds it → proceed with returned id.

---

## 8. New `AFErrorCode` values

```typescript
export enum AFErrorCode {
  // ... existing codes ...
  INVALID_IDENTIFIER = 'INVALID_IDENTIFIER',  // malformed identifier string in resolveStubId
  ID_MISMATCH = 'ID_MISMATCH',                // resolve found a different id than already set
  MISSING_IDENTIFIER = 'MISSING_IDENTIFIER',  // 'unknown' nested entity has no identifier to encode
  UNRESOLVED_ENTITY = 'UNRESOLVED_ENTITY',    // Strict strategy: nested entity is 'unknown'
}
```

---

## 9. `AFTypes` changes

### `NestedUnknownStrategy` — new enum

```typescript
export enum NestedUnknownStrategy {
  /** Resolve each 'unknown' nested entity via _resolveId before encoding.
   *  Falls back to ByIdentifier if resolution returns null. (default) */
  Resolve = 'resolve',

  /** Encode using the available identifier (kod / ext) without a network call.
   *  Throws MISSING_IDENTIFIER if no identifier is present. */
  ByIdentifier = 'by-identifier',

  /** Throw UNRESOLVED_ENTITY if any nested entity is still 'unknown' at encode time.
   *  Caller must resolve all relations before calling save(). */
  Strict = 'strict',
}
```

### `AFSaveOptions`

Remove the internal-only `updateStrategy` (was `UpdateStrategy.Updated`, the only value).
Add `nestedUnknown` to control how nested entities in `'unknown'` state are handled during
serialisation (see section 7 — Nested entity encoding).

```typescript
export type AFSaveOptions = {
  /** How to handle nested entities in 'unknown' state during serialisation.
   *  @default NestedUnknownStrategy.Resolve */
  nestedUnknown?: NestedUnknownStrategy,
  abortController?: AbortController,
  removeStitky?: boolean,
}
```

### `IdStub` — deprecated alongside `createIdStub`

```typescript
/** @deprecated */
export type IdStub = {
  id?: number,
  kod?: string,
  ext?: string[]
}
```

---

## 10. Exports (`src/index.ts`)

- **Add** `resolve`, `resolveStubId` — they are already on `AFApiClient`, no separate export needed.
- **Add** `NestedUnknownStrategy` — public enum, must be exported so callers can pass it to `save()`.
- **Do not export** `_setId`, `_state`, `_stub`, `_resolveId` — internal only.
- `CODE` and `EXT` are already exported. No change needed.
- Mark `createIdStub` and `IdStub` with `@deprecated` in JSDoc. No removal yet.

---

## 11. Generator changes (`generator/templates/classProperty.ejs`)

The Flexi API metadata includes `id` as a property on every evidence. The generator
currently special-cases `id`, `kod`, and `stitky` — all three are already declared on
`AFEntity`, so the template emits `declare <prop>?:` instead of a fresh field definition,
avoiding duplicate-declaration errors.

After the redesign `id` becomes a getter. TypeScript does not allow `declare` to override
an accessor in a subclass, so every generated file would fail to compile.

The fix is to **skip `id` entirely** — emit nothing for it. The getter is inherited with
the correct type (`number | null | undefined`) and there is nothing to narrow in subclasses.
`kod` and `stitky` remain regular fields on `AFEntity`, so their `declare` pattern is
unaffected.

Change in `classProperty.ejs` (the only template file that needs updating):

```ejs
<%# id is a getter on AFEntity — skip, nothing to emit in subclasses %>
<% if (propertyName === 'id') { /* skip */ } else { %>
  // <%= name %> (db: <%= dbName %>) - <%= title %>)
  <% if (propertyName === 'kod' || propertyName === 'stitky') { %>declare <% } %><%= propertyName %>?: <%= genType %> | null
<% } %>
```

After this change, regenerating the entity classes (`npm run generate`) will produce files
that compile cleanly against the new `AFEntity`.

---

## 12. Breaking changes

| Change | Impact |
|---|---|
| `entity.id` is now readonly | Any code that sets `entity.id = x` will fail to compile. |
| `isNew` type widens to `boolean \| undefined` | Code with `if (entity.isNew === false)` or strict boolean comparisons needs updating. |
| `createIdStub` with numeric id no longer sets `entity.id` | Code that reads `entity.id` immediately after `createIdStub({ id: n })` will get `undefined`. Must call `api.resolve(entity)` or `api.resolveStubId(Entity, n)` instead. |

---

## 13. Migration guide (for README / changelog)

```typescript
// BEFORE
const firm = await api.createIdStub(AFAdresar, { id: 123 })
// firm.id === 123, but existence was never checked

// AFTER — verified by server
const firm = await api.resolveStubId(AFAdresar, 123)
// firm.id === 123, existence confirmed; throws if not found

// BEFORE
const firm = await api.createIdStub(AFAdresar, { kod: 'ACME' })
// firm.id === undefined, isNew was false (misleading)

// AFTER
const firm = await api.resolveStubId(AFAdresar, CODE('ACME'))
// firm.id === resolved numeric id, isNew === false

// AFTER — using resolve() on an entity you already have
const entity = await api.create(AFAdresar)
entity.kod = 'ACME'
await api.resolve(entity) // populates entity.id in place
```
