import { AFError } from "./AFError"
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

export type AFApiFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

export type AFApiConfig = {
  url: string,
  company?: string,
  fetch?: AFApiFetch
}

export type NO_LIMIT = 0

export enum AFQueryDetail {
  FULL = 'full',
  ID = 'id',
  SUMMARY = 'summary'
}

export enum AFQueryStatus {
  LOADING = 'loading',
  OK = 'ok',
  ERROR = 'error'
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

export type StrictNestedDetail<T> = (
  keyof T | [keyof T, StrictNestedDetail<UnwrapPromise<T[keyof T]>>[]]
)[] | AFQueryDetail

export type LooseNestedDetail = string | [string, LooseNestedDetail[]]

export type NestedDetail<T, IsStrict extends boolean> = 
  IsStrict extends true ? StrictNestedDetail<T> : LooseNestedDetail

export type AFQueryOptions<T extends AFEntity, IsStrict extends boolean = true> = { 
  detail?: NestedDetail<T, IsStrict>[] | AFQueryDetail,
  filter?: AFFilter,
  limit?: number | NO_LIMIT,
  start?: number,
  addRowCount?: boolean,
  onlyExtIds?: boolean,
  noExtIds?: boolean,
  noIds?: boolean,
  codeAsId?: boolean,
  dryRun?: boolean,
  noSimpleMode?: boolean,
  noValidityCheck?: boolean
}

export type AFQueryResponse<T> = {
  data: Promise<T[] | T | undefined>,
  status: AFQueryStatus,
  error: AFError | null,
  cancel: () => void,
  rawResponse?: Response
}
