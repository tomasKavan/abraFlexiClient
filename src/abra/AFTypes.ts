import { AFEntity } from "./AFEntity.js"
import { AFFilter } from "./AFFilter.js"

export enum PropertyType {
  Integer = 'integer',
  String = 'string',
  Select = 'select',
  DateTime = 'datetime',
  Date = 'date',
  YearMonth = 'yearMonth',
  Numeric = 'numeric',
  Logic = 'logic',
  Relation = 'relation',
  Blob = 'blob',
  Array = 'array'
}

export type TypeAnnotation = {
  key: string,
  type: PropertyType,
  isArray: boolean
  afClass?: any,
  digits?: number,
  decimals?: number,
  maxLength?: number,
  enumName?: string,
  enum?: Record<string, string>,
  itemType?: PropertyType,
}

export enum StitkyCacheStrategy {
  None,
  Lazy, // Default
  Eager
}

/** @deprecated — no longer used; will be removed in a future release. */
export enum UpdateStrategy {
  Updated,
}

/**
 * Controls how nested entities in 'unknown' state are handled during
 * serialisation in save(). See spec §7 — Nested entity encoding.
 */
export enum NestedUnknownStrategy {
  /**
   * Resolve each 'unknown' nested entity via _resolveId before encoding.
   * Falls back to ByIdentifier behaviour if resolution returns null.
   * This is the default.
   */
  Resolve = 'resolve',

  /**
   * Encode using the available identifier (kod / ext) without a network call.
   * Throws AFError(MISSING_IDENTIFIER) if no identifier is present.
   */
  ByIdentifier = 'by-identifier',

  /**
   * Throw AFError(UNRESOLVED_ENTITY) immediately if any nested entity is
   * still 'unknown' at encode time. The caller must resolve all relations
   * before calling save().
   */
  Strict = 'strict',
}

export type AFApiFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

// Output formats supported by Abra Flexi (URL extension). The `(string & {})`
// fallback keeps autocomplete on the literals while allowing other extensions
// (e.g. 'isdocx') without changes to this type.
export type AFResponseFormat =
  | 'json'
  | 'xml'
  | 'pdf'
  | 'html'
  | 'csv'
  | 'isdoc'
  | (string & {})

export type AFFileResult = {
  blob: Blob,
  contentType: string,
  filename?: string
}

export type AFLogLevel = 'none' | 'error' | 'warn' | 'info' | 'debug'

export interface AFLogger {
  debug(...args: any[]): void
  info(...args: any[]): void
  warn(...args: any[]): void
  error(...args: any[]): void
}

export type AFApiConfig = {
  url: string,
  company: string,
  fetch?: AFApiFetch,
  stitkyCacheStrategy?: StitkyCacheStrategy,
  logger?: AFLogger,
  logLevel?: AFLogLevel
}

export type NO_LIMIT_T = 0
export const NO_LIMIT = 0

export enum AFQueryDetail {
  FULL = 'full',
  ID = 'id',
  SUMMARY = 'summary'
}

export type AFNestedDetail = (string | [string, AFNestedDetail])[]

/**
 * Return type of `api.query()`. A standard array of entity instances extended
 * with an optional `totalCount` property that is populated when the query was
 * made with `addRowCount: true`. The value reflects the total number of
 * matching records on the server, independent of `limit`/`start`.
 *
 * Because this is still a plain array, all existing code that iterates or
 * spreads the result continues to work without any changes.
 */
export type AFQueryResult<T> = T[] & { totalCount?: number }

export type AFQueryOptions = {
  detail?: AFNestedDetail | AFQueryDetail,
  filter?: AFFilter,
  limit?: number | NO_LIMIT_T,
  start?: number,
  addRowCount?: boolean,
  onlyExtIds?: boolean,
  noExtIds?: boolean,
  noIds?: boolean,
  codeAsId?: boolean,
  dryRun?: boolean,
  noSimpleMode?: boolean,
  noValidityCheck?: boolean,
  noUpdateStitkyCache?: boolean,
  ucetniObdobi?: string,
  koncovyMesicRok?: string,
  pocetMesicu?: number
  date?: string
  currency?: string

  // Parent-entity selectors for nested entities. The resolver in
  // AFNestedEntityResolver.ts decides which selector applies to which entity.
  // Example: AFIndividualniCenik uses `adresarId` to scope under /adresar/<id>/
  // Accepts a numeric id, an id-as-string, or an AFFilter built via ID(...) /
  // CODE(...) / EXT(...) for selecting the parent by code or external id.
  adresarId?: number | string | AFFilter

  abortController?: AbortController
}

// Options for non-JSON formats fetched via queryFile / queryFileRaw.
// Adds report-related parameters that Abra Flexi accepts on file endpoints
// (e.g. PDF rendered from a named template in a specific language).
export type AFQueryFileOptions = AFQueryOptions & {
  // Maps to the `report-name` URL query parameter — name of the print
  // template/report to use when rendering the file.
  reportName?: string,
  // Maps to the `report-lang` URL query parameter — language code for the
  // report (e.g. 'cs', 'en').
  reportLang?: string
}

export type AFURelOptions = {
  detail?: AFNestedDetail | AFQueryDetail,
  vazbaTyp?: string | string[],
  noUpdateStitkyCache?: boolean

  abortController?: AbortController
}

export type AFPopulateOptions = {
  detail?: AFNestedDetail | AFQueryDetail,
  abortController?: AbortController,
  noUpdateStitkyCache?: boolean
}

export type AFURelResult<T> = {
  entity: AFEntity,
  referencedFrom: T
}

export type AFURelMinimal = AFEntity & {
  'uzivatelske-vazby'?: {
    evidenceType?: string | null,
    objectId?: number | null,
    object?: any,
    vazbaTyp?: {
      kod?: string | null
    } | null
  }[]
}

export type AFSaveOptions = {
  /**
   * How to handle nested entities in 'unknown' state during serialisation.
   * @default NestedUnknownStrategy.Resolve
   */
  nestedUnknown?: NestedUnknownStrategy,
  abortController?: AbortController,
  removeStitky?: boolean
}

export type AFDeleteOptions = {
  abortController?: AbortController,
  // When true, the delete is performed via PUT with `@action: 'delete'` instead
  // of an HTTP DELETE on /entity/<id>. Required for entities like
  // AFUzivatelskaVazba where the standard DELETE endpoint is not supported.
  // The high-level delete() sets this automatically based on the entity class.
  asUserRelation?: boolean
}

export type AFActionOptions = {
  abortController?: AbortController
}

export type AFSessionConfig = {
  url: string,
  username: string,
  password?: string,
  authSessionId?: string,
  keepAlive?: boolean | number
  autoLogin?: boolean
}

export type AFCompany = {
  id: number,
  nazev: string,
  urlComponent: string,
  created: Date
}

export enum AFSessionStatus {
  Offline = 'offline',
  LogingIn = 'logingin',
  Online = 'online',
  LogingOut = 'logingout',
}

/** @deprecated Use api.resolveStubId() instead. */
export type IdStub = {
  id?: number,
  kod?: string,
  ext?: string[]
}
