import { AFEntity } from "./AFEntity"
import { AFFilter } from "./AFFilter"

export enum PropertyType {
  Integer = 'integer',
  String = 'string',
  Select = 'select',
  DateTime = 'datetime',
  Date = 'date',
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

export enum UpdateStrategy {
  Updated,
  // TODO: Folowing will be added later
  // Populated,
  // All,
  // Custom
}

export type AFApiFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

export type AFApiConfig = {
  url: string,
  company: string,
  fetch?: AFApiFetch,
  stitkyCacheStrategy?: StitkyCacheStrategy
}

export type NO_LIMIT_T = 0
export const NO_LIMIT = 0

export enum AFQueryDetail {
  FULL = 'full',
  ID = 'id',
  SUMMARY = 'summary'
}

export type NestedDetail = (string | [string, NestedDetail])[]

export type AFQueryOptions = { 
  detail?: NestedDetail | AFQueryDetail,
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
  noUpdateStitkyCache?: boolean

  abortController?: AbortController
}

export type AFURelOptions = {
  detail?: NestedDetail | AFQueryDetail,
  vazbaTyp?: string | string[],
  noUpdateStitkyCache?: boolean

  abortController?: AbortController
}

export type AFPopulateOptions = {
  detail?: NestedDetail | AFQueryDetail,
  abortController?: AbortController,
  noUpdateStitkyCache?: boolean
}

export type AFURelResult<T> = {
  entity: AFEntity,
  referencedFrom: T
}

export type AFURelMinimal = AFEntity & {
  'uzivatelske-vazby'?: {
    evidenceType?: string,
    objectId?: number,
    object?: any,
    vazbaTyp?: {
      kod?: string
    }
  }[]
}

export type AFSaveOptions = {
  updateStrategy?: UpdateStrategy,
  abortController?: AbortController
}

export type AFDeleteOptions = {
  abortController?: AbortController
}
