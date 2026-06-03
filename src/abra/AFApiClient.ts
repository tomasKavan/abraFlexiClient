import { parsePropertyValue, serializePropertyValue } from "./AFDataType.js"
import { AFEntity } from "./AFEntity.js"
import { AFError, AFErrorCode } from "./AFError.js"
import { Filter, ID } from "./AFFilter.js"
import {
  AFApiConfig,
  AFApiFetch,
  PropertyType,
  AFQueryDetail,
  AFQueryOptions,
  AFQueryResult,
  AFURelOptions,
  AFURelResult,
  AFPopulateOptions,
  AFURelMinimal,
  AFSaveOptions,
  AFDeleteOptions,
  AFActionOptions,
  StitkyCacheStrategy,
  IdStub,
  AFLogger,
  AFLogLevel,
  AFResponseFormat,
  AFFileResult,
  AFQueryFileOptions,
  AFReportInfo,
  AFQueryReportsOptions,
  NestedUnknownStrategy
} from "./AFTypes.js"
import { EntityByName, EntityByPath } from "../generated/AFEntityRegistry.js"
import { addParamToUrl } from "../helpers/urlHelper.js"
import { composeDetail, composeIncludes, composeRelations } from "./AFApiUrlHelper.js"
import { resolveNestedEntityPathPrefix } from "./AFNestedEntityResolver.js"
import { AFStitkyCache } from "./AFStitkyCache.js"
import { AFUzivatelskaVazba } from '../generated/entities/AFUzivatelskaVazba.js'
import { AFPriloha } from '../generated/entities/AFPriloha.js'

const ABRA_API_FORMAT = 'json'

const LOG_LEVEL_RANK: Record<AFLogLevel, number> = {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4
}

export class AFApiClient {
  private _url: string
  private _fetch: AFApiFetch
  private _company: string

  private _stitkyCache: AFStitkyCache

  // Filtering wrapper around the configured logger. Always defined so call
  // sites can use `this._logger.debug(...)` etc. without checking for null.
  private _logger: AFLogger

  constructor(config: AFApiConfig) {
    this._url = config.url
    this._company = config.company
    this._fetch = config.fetch || fetch

    // Default level depends on whether the user supplied a logger:
    //   - logger only         → 'debug' (forward everything; user's logger filters)
    //   - logLevel only       → wrap `console` and filter at the given level
    //   - both                → forward levels ≤ logLevel to user's logger
    //   - neither             → 'none' (silent)
    const target: AFLogger = config.logger ?? console
    const level: AFLogLevel = config.logLevel ?? (config.logger ? 'debug' : 'none')
    this._logger = makeFilteringLogger(target, level)

    this._stitkyCache = new AFStitkyCache(this, config.stitkyCacheStrategy)
  }

  get url(): string { return this._url }
  get company(): string { return this._company }
  get stitkyCacheStrategy(): StitkyCacheStrategy { return this._stitkyCache.strategy }

  private _buildQueryUrl(
    entityPath: string,
    format: string,
    options: AFQueryOptions
  ): string {
    const detail = options.detail || AFQueryDetail.SUMMARY

    let furl = options.filter?.toUrlComponent()
    if (furl && !furl.length) furl = undefined

    const pathPrefix = resolveNestedEntityPathPrefix(entityPath, options)
    let url = this._url + '/c/' + this.company + '/' + pathPrefix + entityPath
    url += furl ? ('/' + furl) : ''
    url += '.' + format
    url = addParamToUrl(url, 'detail', composeDetail(detail))
    url = addParamToUrl(url, 'includes', composeIncludes(detail, entityPath))
    url = addParamToUrl(url, 'relations', composeRelations(detail))

    url = addParamToUrl(url, 'limit', options.limit)
    url = addParamToUrl(url, 'start', options.start)

    url = addParamToUrl(url, 'addRowCount', options.addRowCount)
    url = addParamToUrl(url, 'onlyExtIds', options.onlyExtIds)
    url = addParamToUrl(url, 'noExtIds', options.noExtIds)
    url = addParamToUrl(url, 'noIds', options.noIds)
    url = addParamToUrl(url, 'codeAsId', options.codeAsId)
    url = addParamToUrl(url, 'dryRun', options.dryRun)
    url = addParamToUrl(url, 'noSimpleMode', options.noSimpleMode)
    url = addParamToUrl(url, 'noValidityCheck', options.noValidityCheck)

    // Specific to "ucetni vystupy"
    url = addParamToUrl(url, 'ucetniObdobi', options.ucetniObdobi)
    url = addParamToUrl(url, 'koncovyMesicRok', options.koncovyMesicRok)
    url = addParamToUrl(url, 'pocetMesicu', options.pocetMesicu)

    // Specific to "individualni cenik"
    url = addParamToUrl(url, 'date', options.date)
    url = addParamToUrl(url, 'currency', options.currency)

    return url
  }

  async queryRaw(
    entityPath: string,
    options: AFQueryOptions = {}
  ): Promise<any> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    const url = this._buildQueryUrl(entityPath, ABRA_API_FORMAT, options)
    this._logger.debug(url)

    try {
      const raw = await this._fetch(url, { signal: options.abortController?.signal })

      const json = await raw.json().catch(() => null)

      if (raw.status >= 400 && raw.status < 600) {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      let entityObj = json?.winstrom?.[entityPath]

      // When addRowCount was requested, smuggle @rowCount onto the array so
      // query() can surface it as `totalCount` on the typed AFQueryResult.
      // Flexi returns @rowCount as a string (e.g. "1234"), not a number.
      if (options.addRowCount && Array.isArray(entityObj)) {
        const rc = json?.winstrom?.['@rowCount']
        if (rc !== undefined) (entityObj as any).__rowCount = rc
      }

      return entityObj
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  async queryFileRaw(
    entityPath: string,
    format: AFResponseFormat,
    options: AFQueryFileOptions = {}
  ): Promise<AFFileResult> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    let url = this._buildQueryUrl(entityPath, format, options)
    const reportName = typeof options.reportName === 'object' && options.reportName !== null
      ? options.reportName.reportId
      : options.reportName
    const reportLang = typeof options.reportLang === 'object' && options.reportLang !== null
      ? options.reportLang.code
      : options.reportLang
    url = addParamToUrl(url, 'report-name', reportName)
    url = addParamToUrl(url, 'report-lang', reportLang)
    this._logger.debug(url)

    try {
      const raw = await this._fetch(url, { signal: options.abortController?.signal })

      if (raw.status >= 400 && raw.status < 600) {
        let details = ''
        const ct = raw.headers.get('content-type') || ''
        if (ct.includes('application/json')) {
          const json = await raw.json().catch(() => null)
          details = this._extractAbraErrors(json)
        }
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      const blob = await raw.blob()
      const contentType = raw.headers.get('content-type') || 'application/octet-stream'
      const filename = parseContentDispositionFilename(raw.headers.get('content-disposition'))
      return { blob, contentType, filename }
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async queryFile<T extends typeof AFEntity>(
    entity: T,
    format: AFResponseFormat,
    options: AFQueryFileOptions = {}
  ): Promise<AFFileResult> {
    return this.queryFileRaw(entity.EntityPath, format, options)
  }

  public async queryReports<T extends typeof AFEntity>(
    entity: T,
    options: AFQueryReportsOptions = {}
  ): Promise<AFReportInfo[]> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    const url = this._url + '/c/' + this.company + '/' + entity.EntityPath + '/reports.' + ABRA_API_FORMAT
    this._logger.debug(url)

    try {
      const raw = await this._fetch(url, { signal: options.abortController?.signal })
      const json = await raw.json().catch(() => null)

      if (raw.status >= 400 && raw.status < 600) {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      // The reports endpoint is unusual — its response is NOT wrapped in
      // `winstrom`. Shape: { reports: { report: AFReportInfo | AFReportInfo[] } }.
      // Abra collapses single-element arrays to a bare object, so we
      // normalize to an array.
      const report = json?.reports?.report
      if (!report) return []
      return Array.isArray(report) ? report : [report]
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async query<T extends typeof AFEntity>(
    entity: T,
    options: AFQueryOptions = {}
  ): Promise<AFQueryResult<InstanceType<T>>> {
    const res = this.queryRaw(entity.EntityPath, options)

    try {
      const rawData = await res
      const data = this._decodeEntityObj(entity, rawData) as AFQueryResult<InstanceType<T>>

      // Populate totalCount when addRowCount was requested.
      // queryRaw() attaches the raw @rowCount string as __rowCount on the
      // intermediate array; we parse it here and expose it as a number.
      if (options.addRowCount && (rawData as any)?.__rowCount !== undefined) {
        data.totalCount = parseInt((rawData as any).__rowCount, 10)
      }

      if (!options.noUpdateStitkyCache) {
        await this._stitkyCache.fetchTick()
      }

      return data

    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async queryOne<T extends typeof AFEntity>(
    entity: T,
    options: AFQueryOptions
  ): Promise<InstanceType<T>> {
    const data = await this.query(entity, options)
    if (!data || !data.length) throw new AFError(AFErrorCode.OBJECT_NOT_FOUND, `${entity} object not found. Query filter: ${options.filter}`)
    return data[0]
  }

  public async queryURels<T extends typeof AFEntity = typeof AFEntity>(
    relatedEntity: T,
    forObjects: AFURelMinimal | AFURelMinimal[],
    options: AFURelOptions = {},
  ): Promise<AFURelResult<InstanceType<T>>[]> {
    if (!(forObjects instanceof Array)) {
      forObjects = [forObjects]
    }

    if (options.vazbaTyp === 'string') {
      options.vazbaTyp = [options.vazbaTyp]
    }

    const out: AFURelResult<InstanceType<T>>[] = []
    const fetchedList: [string, InstanceType<T>[]][] = []

    for (const uobj of forObjects) {
      const uvs = uobj["uzivatelske-vazby"]
      if (!uvs) continue
      for (const uv of uvs) {
        // Check if vazba is properly defined and if it has proper vazbaTyp (if required)
        if (!uv.evidenceType || !uv.objectId) continue
        if (options.vazbaTyp &&
          (!uv.vazbaTyp ||
            typeof uv.vazbaTyp.kod !== 'string' ||
            !options.vazbaTyp.includes(uv.vazbaTyp.kod))
        ) continue

        // Check if related evidence type matches the requested type
        const cls = EntityByPath(uv.evidenceType)
        if (cls !== relatedEntity) continue

        // Get (or create) list of already fetched objects by evidenceType
        let list = fetchedList.find(fli => fli[0] === uv.evidenceType)
        if (!list) {
          list = [uv.evidenceType, []]
          fetchedList.push(list)
        }

        // Load data from cache or fetch it if missing
        let data = list[1].find(li => li.id === uv.objectId)
        if (!data) {
          try {
            const opts = {
              detail: options.detail,
              filter: ID(uv.objectId),
              abort: options.abortController,
              noUpdateStitkyCache: true
            }
            let outInner = await this.query(relatedEntity, opts)
            if (!outInner || !outInner.length) continue
            list[1].push(outInner[0])
            data = outInner[0]
            const res: AFURelResult<InstanceType<T>> = {
              entity: uobj,
              referencedFrom: outInner[0]
            }
            out.push(res)
          } catch (e) {
            if (!(e instanceof AFError)) {
              this._logger.error(e)
              e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
            }
            throw e
          }
        }
        uv.object = data
      }
    }

    if (!options.noUpdateStitkyCache) {
      await this._stitkyCache.fetchTick()
    }

    return out
  }

  public async populate<T extends typeof AFEntity = typeof AFEntity>(
    entities: InstanceType<T>[],
    options: AFPopulateOptions = {}
  ): Promise<InstanceType<T>[]> {
    const fetchBy: [string, string][] = []
    for (const en of entities) {
      if (typeof en.id !== 'undefined' && en.id !== null) {
        fetchBy.push(['id', en.id.toString()])
        continue
      }
      if (typeof en.kod !== 'undefined') {
        fetchBy.push(['kod', en.kod || ''])
        continue
      }
      throw new AFError(
        AFErrorCode.MISSING_ID,
        `Can't populate entity withoud id or kod set. It's not possible to fetch data. Entity: ${en}`
      )
    }

    // Nothing was requested to populate
    if (!fetchBy.length) return []

    let tplArr: string[] = fetchBy.map(entry => `${entry[0]} = '${entry[1]}'`)
    if (!options.detail) options.detail = []
    if (options.detail instanceof Array) {
      if (!options.detail.includes('id')) options.detail.push('id')
      if (!options.detail.includes('kod')) options.detail.push('kod')
    }
    const opts: AFQueryOptions = {
      filter: Filter(tplArr.join(' or ')),
      detail: options.detail,
      abortController: options.abortController
    }

    try {
      const cls = EntityByName(entities[0].constructor.name)
      const resQRaw = this.queryRaw(cls.EntityPath, opts)

      let dataQ = await resQRaw
      if (!dataQ) throw new AFError(AFErrorCode.UNKNOWN, 'Unable to fetch data to populate')
      if (!(dataQ instanceof Array)) dataQ = [dataQ]

      for (const enQ of dataQ) {
        const en = entities.find(e => {
          if (typeof e.id !== 'undefined') return enQ.id === String(e.id)
          if (typeof e.kod !== 'undefined') return enQ.kod === String(e.kod)
          return false
        })
        if (!en) continue

        const oKeys = Object.keys(enQ)
        for (const okey of oKeys) {
          this._decodeProperty(en, okey, enQ)
        }
        // Mark entity as confirmed existing with server-assigned id
        if (enQ.id) en._setId(Number(enQ.id))
      }

      if (!options.noUpdateStitkyCache) {
        await this._stitkyCache.fetchTick()
      }
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }

    return entities
  }

  public async populateOne<T extends typeof AFEntity = typeof AFEntity>(
    entity: InstanceType<T>,
    options: AFPopulateOptions = {}
  ): Promise<InstanceType<T>> {
    const res = await this.populate([entity], options)
    if (!res || !res.length) throw new AFError(AFErrorCode.OBJECT_NOT_FOUND, `${entity} object not found. Kod / ID: ${entity.kod} / ${entity.id}`)
    return res[0]
  }

  public async create<T extends typeof AFEntity>(
    entity: T
  ): Promise<InstanceType<T>> {
    return new entity(this._stitkyCache) as InstanceType<T>
  }

  // ---------------------------------------------------------------------------
  // Identity resolution
  // ---------------------------------------------------------------------------

  /**
   * Resolves the server-assigned id for an entity that may be in 'unknown' state.
   * Priority order: confirmed _id → _stub.id → _stub.kod / entity.kod → _stub.ext
   *
   * Returns the resolved id (number), or null if the entity was not found.
   * On a 404 response, the entity state is reset to 'new'.
   * @internal
   */
  private async _resolveId(entity: AFEntity): Promise<number | null> {
    // Fast path: already has a confirmed server id
    if (entity.id !== undefined && entity.id !== null) {
      return entity.id as number
    }

    // New entity with no identifiers — nothing to look up
    if (entity.isNew === true && !(entity as any)._stub && !entity.kod) {
      return null
    }

    const entityPath = (entity.constructor as typeof AFEntity).EntityPath
    const stub = (entity as any)._stub as { id?: number; kod?: string; ext?: string[] } | undefined

    // Determine the best identifier available (priority order per spec)
    let identifier: string | number | undefined
    if (stub?.id !== undefined) {
      identifier = stub.id
    } else if (stub?.kod) {
      identifier = `code:${stub.kod}`
    } else if (entity.kod) {
      identifier = `code:${entity.kod}`
    } else if (stub?.ext?.length) {
      identifier = `ext:${stub.ext[0]}`
    }

    if (identifier === undefined) {
      return null
    }

    const url = `${this._url}/c/${this._company}/${entityPath}/${identifier}.json?detail=id&no-ext-ids=true`
    this._logger.debug(url)

    try {
      const raw = await this._fetch(url)

      if (raw.status === 404) {
        // Entity does not exist on the server — reset to new
        ;(entity as any)._state = 'new'
        ;(entity as any)._id = undefined
        return null
      }

      if (raw.status >= 400) {
        const json = await raw.json().catch(() => null)
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status}${details ? ` — ${details}` : ''}`
        )
      }

      const json = await raw.json().catch(() => null)
      const items = json?.winstrom?.[entityPath]
      if (!Array.isArray(items) || !items.length) {
        ;(entity as any)._state = 'new'
        ;(entity as any)._id = undefined
        return null
      }

      const resolvedId = Number(items[0].id)
      if (!Number.isFinite(resolvedId)) {
        ;(entity as any)._state = 'new'
        return null
      }

      entity._setId(resolvedId)
      return resolvedId
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  /**
   * Resolves an entity by a validated identifier string or numeric id.
   * Accepted identifier forms:
   *   - number   → looks up by internal id
   *   - "code:X" → looks up by business code
   *   - "ext:X"  → looks up by external id
   * Throws INVALID_IDENTIFIER for any other string.
   * Throws OBJECT_NOT_FOUND if the server returns 404.
   */
  public async resolveStubId<T extends typeof AFEntity>(
    entity: T,
    identifier: number | string
  ): Promise<InstanceType<T>> {
    // Validate identifier
    if (typeof identifier === 'string') {
      if (!identifier.length) {
        throw new AFError(AFErrorCode.INVALID_IDENTIFIER, `Identifier must not be empty.`)
      }
      if (!identifier.startsWith('code:') && !identifier.startsWith('ext:')) {
        throw new AFError(
          AFErrorCode.INVALID_IDENTIFIER,
          `Identifier "${identifier}" is not a valid Flexi identifier. Use a number, "code:<value>", or "ext:<value>".`
        )
      }
    }

    const ent = new entity(this._stitkyCache) as InstanceType<T>

    // Set up the stub so _resolveId can build the right URL
    if (typeof identifier === 'number') {
      ;(ent as any)._stub = { id: identifier }
    } else if (identifier.startsWith('code:')) {
      ;(ent as any)._stub = { kod: identifier.slice(5) }
    } else {
      // ext:...
      ;(ent as any)._stub = { ext: [identifier.slice(4)] }
    }
    ;(ent as any)._state = 'unknown'

    const resolvedId = await this._resolveId(ent)
    if (resolvedId === null) {
      throw new AFError(
        AFErrorCode.OBJECT_NOT_FOUND,
        `${entity.EntityName} not found for identifier "${identifier}".`
      )
    }

    return ent
  }

  /**
   * Resolves an entity in-place — determines and sets its server id.
   * Fast-path: if the entity already has a confirmed id, returns immediately.
   * For 'unknown' state: calls _resolveId; if not found and throwIfNotFound is
   * true, throws OBJECT_NOT_FOUND.
   * Always returns the same entity instance.
   */
  public async resolve<T extends AFEntity>(
    entity: T,
    throwIfNotFound?: boolean
  ): Promise<T> {
    // Fast path: already has a confirmed server id
    if (entity.id !== undefined && entity.id !== null) {
      return entity
    }

    // New entity with no identifiers — nothing to resolve
    if (entity.isNew === true && !(entity as any)._stub && !entity.kod) {
      return entity
    }

    const resolvedId = await this._resolveId(entity)

    if (resolvedId === null && throwIfNotFound) {
      throw new AFError(
        AFErrorCode.OBJECT_NOT_FOUND,
        `${(entity.constructor as typeof AFEntity).EntityName} not found.`
      )
    }

    return entity
  }

  /**
   * @deprecated Use resolveStubId() or resolve() instead.
   * Creates an entity instance in 'unknown' state with unverified identifiers.
   */
  public async createIdStub<T extends typeof AFEntity>(
    entity: T,
    id: IdStub
  ): Promise<InstanceType<T>> {
    if (typeof id.id !== 'number' && (!id.kod || !id.kod.length) && (!id.ext || !id.ext.length)) {
      throw new AFError(AFErrorCode.MISSING_ID, `Requesting id stub for ${entity.EntityName} but no id is provided.`)
    }
    const ent = new entity(this._stitkyCache) as InstanceType<T>
    // Store unverified identifiers in the _stub bag
    ;(ent as any)._stub = {
      ...(typeof id.id === 'number' ? { id: id.id } : {}),
      ...(id.kod ? { kod: id.kod } : {}),
      ...(id.ext?.length ? { ext: id.ext } : {}),
    }
    // Transition to 'unknown' state — existence not yet confirmed
    ;(ent as any)._state = 'unknown'
    return ent
  }

  async saveRaw(
    entityPath: string,
    data: any,
    options?: AFSaveOptions
  ): Promise<any> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    if (!options) options = {}

    let url = this._url + '/c/' + this.company + '/' + entityPath + '.' + ABRA_API_FORMAT

    this._logger.debug(url)
    this._logger.debug(data)

    if (options.removeStitky) {
      data['stitky@removeAll'] = 'true'
    }

    try {
      const raw = await this._fetch(url, {
        signal: options.abortController?.signal,
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          winstrom: [{
            [entityPath] : data
          }]
        })
      })

      const json = await raw.json().catch(() => null)
      this._logger.debug(json)

      if (raw.status >= 400 && raw.status < 600) {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      const jres = json?.winstrom
      if (jres && jres['success'] === 'false') {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `Save of ${entityPath} failed${details ? ` — ${details}` : ''}`
        )
      }

      return Array.isArray(jres?.results) ? jres.results : []
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async save<T extends typeof AFEntity = typeof AFEntity>(
    entity: InstanceType<T>,
    options?: AFSaveOptions
  ): Promise<InstanceType<T>> {
    // Validate uzivatelske-vazby restriction for new entities (before any network call)
    if (entity.isNew === true) {
      const uvs = (entity as any)['uzivatelske-vazby']
      if (Array.isArray(uvs) && uvs.length > 0) {
        throw new AFError(
          AFErrorCode.FORBIDDEN_OPERATION,
          `Creating ${(entity.constructor as typeof AFEntity).EntityName} with 'uzivatelske-vazby' is not supported by the API. Workaround: save the entity first without user relations, then add them in a second update (save) request.`
        )
      }
    }

    // Pre-flight: resolve unknown top-level entity
    if (entity.isNew === undefined) {
      await this._resolveId(entity)
      // After _resolveId: entity is now in 'new' or 'exists' state
    }

    // Determine create vs update intent based on current state
    const isCreate = entity.isNew === true

    try {
      const obj = await this._encodeEntity(entity, options)

      // Include server id for updates
      if (!isCreate && entity.id !== undefined && entity.id !== null) {
        obj.id = entity.id
      }

      // Flexi API: @create / @update control upsert semantics
      obj['@create'] = isCreate ? 'ok' : 'fail'
      obj['@update'] = isCreate ? 'fail' : 'ok'

      const entityPath = (entity.constructor as typeof AFEntity).EntityPath
      const results = await this.saveRaw(entityPath, obj, options)
      this._applySaveResultToEntity(entity, results)
      return entity
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  async deleteRaw(
    entityPath: string,
    id: string | number | undefined | null,
    options: AFDeleteOptions = {}
  ): Promise<any> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    if ((!id && typeof id !== 'number') || id === '') throw new AFError(
      AFErrorCode.MISSING_ID,
      `Can't delete entity without knowing it's id.`
    )

    let url: string
    let fetchOptions: any
    if (options.asUserRelation) {
      url = this._url + '/c/' + this.company + '/' + entityPath + '.' + ABRA_API_FORMAT
      fetchOptions = {
        signal: options.abortController?.signal,
        method: 'PUT',
        body: JSON.stringify({
          winstrom: [{
            [entityPath] : {
              id: id,
            },
            [entityPath + '@action']: 'delete'
          }]
        })
      }
    } else {
      url = this._url + '/c/' + this.company + '/' + entityPath + '/' + id + '.' + ABRA_API_FORMAT
      fetchOptions = {
        signal: options.abortController?.signal,
        method: 'DELETE'
      }
    }

    this._logger.debug(url)

    try {
      const raw = await this._fetch(url, fetchOptions)

      const json = await raw.json().catch(() => null)
      this._logger.debug(json)

      if (raw.status >= 400 && raw.status < 600) {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      const jres = json?.winstrom
      if (jres && jres['success'] === 'false') {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `Delete of ${entityPath} failed${details ? ` — ${details}` : ''}`
        )
      }

    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async delete<T extends typeof AFEntity = typeof AFEntity>(
    entity: InstanceType<T>,
    options: AFDeleteOptions = {}
  ): Promise<boolean> {
    // Definitely new — nothing to delete
    if (entity.isNew === true) return true

    // Unknown state: try to resolve before deleting
    if (entity.isNew === undefined) {
      const resolvedId = await this._resolveId(entity)
      if (resolvedId === null) return true  // entity doesn't exist, nothing to delete
    }

    // At this point entity should have an id (either was 'exists' or just resolved)
    if (entity.id === undefined || entity.id === null) return true

    const entityPath = (entity.constructor as typeof AFEntity).EntityPath
    const res = this.deleteRaw(entityPath, entity.id, {
      ...options,
      asUserRelation: entity instanceof AFUzivatelskaVazba
    })

    try {
      await res
      return true
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  // Invokes a named action on an existing entity record. The HTTP shape mirrors
  // the user-relation delete pattern: PUT to /entity.json with body
  // `{ winstrom: [{ <entityPath>: { id }, "<entityPath>@action": <actionName> }] }`.
  // Returns true on success; throws AFError on HTTP/Abra failure.
  async actionRaw(
    entityPath: string,
    id: string | number,
    actionName: string,
    options: AFActionOptions = {}
  ): Promise<boolean> {
    if (!this.company || !this.company.length) {
      throw new AFError(AFErrorCode.MISSING_ABRA_COMPANY, `Can't query AFApiClient without providing company path component first.`)
    }

    if (id === undefined || id === null || id === '') {
      throw new AFError(AFErrorCode.MISSING_ID, `Can't call action '${actionName}' on ${entityPath} without id.`)
    }

    if (!actionName || !actionName.length) {
      throw new AFError(AFErrorCode.UNKNOWN, `Action name must be a non-empty string.`)
    }

    const url = this._url + '/c/' + this.company + '/' + entityPath + '.' + ABRA_API_FORMAT
    this._logger.debug(url)

    try {
      const raw = await this._fetch(url, {
        signal: options.abortController?.signal,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          winstrom: [{
            [entityPath]: { id: id },
            [entityPath + '@action']: actionName
          }]
        })
      })

      const json = await raw.json().catch(() => null)
      this._logger.debug(json)

      if (raw.status >= 400 && raw.status < 600) {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `${raw.status} ${raw.statusText}${details ? ` — ${details}` : ''}`
        )
      }

      const jres = json?.winstrom
      if (jres && jres['success'] === 'false') {
        const details = this._extractAbraErrors(json)
        throw new AFError(
          AFErrorCode.ABRA_FLEXI_ERROR,
          `Action '${actionName}' on ${entityPath} failed${details ? ` — ${details}` : ''}`
        )
      }

      return true
    } catch (e) {
      if (!(e instanceof AFError)) {
        this._logger.error(e)
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).toString())
      }
      throw e
    }
  }

  public async action<T extends typeof AFEntity = typeof AFEntity>(
    entity: InstanceType<T>,
    actionName: string,
    options: AFActionOptions = {}
  ): Promise<boolean> {
    const cls = entity.constructor as typeof AFEntity

    // Can't call an action on an entity that has never been saved
    if (entity.isNew === true) {
      throw new AFError(
        AFErrorCode.RELATED_INSTANCE_NOT_SAVED,
        `Can't call action '${actionName}' on an unsaved ${cls.EntityName}. Save it first.`
      )
    }

    // Unknown state: resolve before calling action
    if (entity.isNew === undefined) {
      const resolvedId = await this._resolveId(entity)
      if (resolvedId === null) {
        throw new AFError(
          AFErrorCode.OBJECT_NOT_FOUND,
          `Can't call action '${actionName}' on ${cls.EntityName}: entity not found on server.`
        )
      }
    }

    if (entity.id === undefined || entity.id === null) {
      throw new AFError(
        AFErrorCode.MISSING_ID,
        `Can't call action '${actionName}' on ${cls.EntityName} without id.`
      )
    }

    // Validate against the per-entity Actions enum populated by the
    // generator. Use the values (raw actionIds) so the caller can pass
    // either an enum member or a literal string.
    const supported = Object.values(cls.Actions)
    if (!supported.includes(actionName)) {
      throw new AFError(
        AFErrorCode.UNKNOWN,
        `Action '${actionName}' is not supported on ${cls.EntityName}. Supported: ${supported.length ? supported.join(', ') : '(none)'}`
      )
    }

    return this.actionRaw(cls.EntityPath, entity.id, actionName, options)
  }

  // Applies the server-assigned id from a save response back to the entity.
  // Abra returns one entry per persisted record in `winstrom.results[]` —
  // including any nested entities (e.g. attachments) created alongside the
  // main one. Each entry has an optional `ref` of the form
  // `/c/<company>/<entityPath>/<id>.json`, which we use to pick the correct
  // result. (Abra does not return `kod` here, so only `id` is applied.)
  private _applySaveResultToEntity<T extends AFEntity>(entity: T, results: any): void {
    if (!Array.isArray(results) || !results.length) return

    const entityPath = (entity.constructor as typeof AFEntity).EntityPath

    // Prefer a result whose `ref` points to this entity's type.
    let r = results.find((res: any) =>
      res && typeof res.ref === 'string' && res.ref.includes(`/${entityPath}/`)
    )

    // Fallback for simple saves with a single result and no nested creates:
    // Abra often omits `ref` then. Only use this when exactly one result has
    // no `ref` and there's no ambiguity.
    if (!r) {
      const refless = results.filter((res: any) => res && typeof res.ref !== 'string')
      if (refless.length === 1 && results.length === 1) r = refless[0]
    }

    if (!r || r.id === undefined || r.id === null) return

    const newId = typeof r.id === 'number' ? r.id : Number(r.id)
    if (Number.isFinite(newId)) {
      entity._setId(newId)
    }
  }

  private _extractAbraErrors(json: any): string {
    if (!json) return ''
    const winstrom = json.winstrom
    if (!winstrom) return ''

    const messages: string[] = []

    if (typeof winstrom.message === 'string' && winstrom.message.length) {
      messages.push(winstrom.message)
    }

    const results = winstrom.results
    if (Array.isArray(results)) {
      for (const r of results) {
        if (!r || !Array.isArray(r.errors)) continue
        for (const err of r.errors) {
          if (!err) continue
          if (typeof err === 'string') {
            messages.push(err)
            continue
          }
          const parts: string[] = []
          if (err.code) parts.push(`[${err.code}]`)
          if (err.for) parts.push(`(${err.for})`)
          if (err.message) parts.push(err.message)
          if (parts.length) messages.push(parts.join(' '))
        }
      }
    }

    return messages.join('; ')
  }

  private _decodeEntityObj<T extends typeof AFEntity>(entity: T, obj: any): InstanceType<T>[] {
    if (!obj) return []

    // If there is no detail, prepare stub with code (kod)
    if (typeof obj === 'string') {
      if (obj.slice(0,5) === 'code:') {
        obj = {
          kod: obj.slice(5)
        }
      }
    }

    if (!(obj instanceof Array)) {
      obj = [obj]
    }
    const res: InstanceType<T>[] = []
    for (const o of obj) {
      const ent = new entity(this._stitkyCache) as InstanceType<T>
      const oKeys = Object.keys(o)
      for (const okey of oKeys) {
        this._decodeProperty(ent, okey, o)
      }
      // Mark as existing with confirmed server id
      if (o.id) ent._setId(Number(o.id))
      res.push(ent)
    }
    return res
  }

  private async _encodeEntity<T extends AFEntity>(entity: T, options?: AFSaveOptions): Promise<any> {
    const out: any = {}
    const keys = entity.changedKeys()
    for (const key of keys) {
      await this._encodeProperty(entity, key, out, options)
    }
    return out
  }

  private _decodeProperty<T extends AFEntity>(entity: T, key: string, obj: any) {
    const annot = entity.getPropertyTypeAnnotation(key)
    if (!annot) return
    if (annot.key === 'id') return  // id is managed by _setId; never a settable property

    const v = obj[key]
    if (!v) return

    // If it's relation, recursively call _processEntityObj
    if (annot.type === PropertyType.Relation) {
      if (!annot.afClass) return
      const cls = typeof annot.afClass === 'string' ? EntityByName(annot.afClass) : annot.afClass
      const propOut = this._decodeEntityObj(cls, v)
      if (!propOut) return
      if (annot.isArray) {
        ;(entity as any)[key] = propOut
        ;(entity as AFEntity)._orig[key] = propOut
        return
      }
      if (propOut.length) {
        ;(entity as any)[key] = propOut[0]
        ;(entity as AFEntity)._orig[key] = propOut[0]
      }
      return
    }

    // Else set it as scalar type
    if (!obj) return
    ;(entity as any)[annot.key] = parsePropertyValue(annot.type, annot, obj[annot.key])
    ;(entity as AFEntity)._orig[annot.key] = (entity as any)[annot.key]
  }

  /**
   * Returns the best available identifier string for an entity, or undefined.
   * Used for ByIdentifier and Resolve fallback strategies.
   * Priority: _stub.kod > entity.kod > _stub.ext
   */
  private _getEntityIdentifierString(entity: AFEntity): string | undefined {
    const stub = (entity as any)._stub as { id?: number; kod?: string; ext?: string[] } | undefined
    if (stub?.kod) return `code:${stub.kod}`
    if (entity.kod) return `code:${entity.kod}`
    if (stub?.ext?.length) return `ext:${stub.ext[0]}`
    return undefined
  }

  private async _encodeProperty<T extends AFEntity>(
    entity: T,
    key: string,
    obj: any,
    options?: AFSaveOptions
  ): Promise<void> {
    const annot = entity.getPropertyTypeAnnotation(key)
    if (!annot) return

    const val = (entity as any)[key]

    // Key wasn't loaded and weren't updated by user - won't be saved
    if (val === undefined) return

    if (annot.type === PropertyType.Relation) {
      // It's a collection (isArray)
      if (annot.isArray) {
        obj[`${key}@removeAll`] = true
        obj[key] = []
        if (val instanceof Array) {
          for (const a of val) {
            if (!(a instanceof AFEntity)) {
              throw new AFError(AFErrorCode.UNKNOWN, `Collection '${key}' on ${(entity.constructor as typeof AFEntity).EntityName}(id: ${entity.id}) contain's non-AFEntity member ${a}`)
            }
            obj[key].push(await this._encodeEntity(a as AFEntity, options))
          }
        }
        return
      }

      // It's a to-1 relation
      if (!entity.hasChanged(key)) return

      // Null means clear the relation
      if (val === null) {
        obj[key] = ""
        return
      }

      if (!(val instanceof AFEntity)) {
        throw new AFError(AFErrorCode.UNKNOWN, `Key '${key}' on ${(entity.constructor as typeof AFEntity).EntityName}(id: ${entity.id}) referencing not AFEntity instance`)
      }

      // --- Tri-state handling for the nested entity ---

      if (val.isNew === true) {
        // Definitely new: embed the full object inline (no id)
        obj[key] = await this._encodeEntity(val, options)
        return
      }

      if (val.isNew === false) {
        // Confirmed existing: send id only, or id + changed fields
        if (!val.hasChanged()) {
          obj[key] = val.id
        } else {
          const nested = await this._encodeEntity(val, options)
          nested.id = val.id  // always include the id for updates
          obj[key] = nested
        }
        return
      }

      // isNew === undefined → 'unknown' state: apply NestedUnknownStrategy
      const strategy = options?.nestedUnknown ?? NestedUnknownStrategy.Resolve

      if (strategy === NestedUnknownStrategy.Strict) {
        throw new AFError(
          AFErrorCode.UNRESOLVED_ENTITY,
          `Key '${key}' on ${(entity.constructor as typeof AFEntity).EntityName} references an unresolved entity. Call resolve() first or change nestedUnknown strategy.`
        )
      }

      if (strategy === NestedUnknownStrategy.ByIdentifier) {
        const ident = this._getEntityIdentifierString(val)
        if (!ident) {
          throw new AFError(
            AFErrorCode.MISSING_IDENTIFIER,
            `Key '${key}' on ${(entity.constructor as typeof AFEntity).EntityName} has an unresolved entity with no identifier (no kod, no ext). Cannot encode with ByIdentifier strategy.`
          )
        }
        obj[key] = ident
        return
      }

      // NestedUnknownStrategy.Resolve (default)
      // Capture fallback identifier BEFORE calling _resolveId (which changes state)
      const fallbackIdent = this._getEntityIdentifierString(val)
      const resolvedId = await this._resolveId(val)

      if (resolvedId !== null) {
        // Successfully resolved — encode as numeric id
        obj[key] = resolvedId
      } else if (fallbackIdent) {
        // Not found on server — use identifier string as fallback
        obj[key] = fallbackIdent
      } else {
        throw new AFError(
          AFErrorCode.MISSING_IDENTIFIER,
          `Key '${key}' on ${(entity.constructor as typeof AFEntity).EntityName} has an unresolved entity with no identifier. Cannot encode.`
        )
      }
      return
    }

    // It's scalar
    if (!obj) return
    obj[key] = serializePropertyValue(annot.type, annot, val)

    if (entity instanceof AFPriloha && key === 'content') {
      obj['content@encoding'] = 'base64'
    }
  }
}

// Wraps a logger with level-based filtering. The result conforms to AFLogger
// and can be called as `logger.debug(...)`, `logger.error(...)`, etc.
// Methods at levels above the threshold become no-ops.
function makeFilteringLogger(target: AFLogger, level: AFLogLevel): AFLogger {
  const threshold = LOG_LEVEL_RANK[level]
  const make = (lvl: Exclude<AFLogLevel, 'none'>): (...args: any[]) => void => {
    if (LOG_LEVEL_RANK[lvl] > threshold) return () => {}
    return (...args: any[]) => target[lvl](...args)
  }
  return {
    debug: make('debug'),
    info: make('info'),
    warn: make('warn'),
    error: make('error')
  }
}

function parseContentDispositionFilename(header: string | null): string | undefined {
  if (!header) return undefined
  // Try RFC 5987 form first (filename*=UTF-8''…) then plain filename="…" / filename=…
  const ext = /filename\*=(?:UTF-8'')?([^;]+)/i.exec(header)
  if (ext) {
    try { return decodeURIComponent(ext[1].trim().replace(/^"|"$/g, '')) } catch { /* fall through */ }
  }
  const plain = /filename=("([^"]+)"|([^;]+))/i.exec(header)
  if (plain) return (plain[2] ?? plain[3] ?? '').trim()
  return undefined
}
