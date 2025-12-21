import { AFStitek } from '../generated/entities/AFStitek.js'
import { AFSkupinaStitku } from '../generated/entities/AFSkupinaStitku.js'
import { AFQueryDetail, AFQueryOptions, NO_LIMIT, StitkyCacheStrategy } from './AFTypes.js'
import type { AFApiClient } from './AFApiClient.js'
import { Filter } from './AFFilter.js'

const DEBOUNCE_MS = 5 * 1000 // 10 sec

export class AFStitkyCache {
  private _client: AFApiClient
  private _strategy: StitkyCacheStrategy
  private _stitky: AFStitek[] = []
  private _stitekSkupiny: AFSkupinaStitku[] = []

  private _lastUpdate?: Date

  constructor(client: AFApiClient, strategy?: StitkyCacheStrategy) {
    this._client = client
    this._strategy = strategy || StitkyCacheStrategy.Lazy

    if (this._strategy === StitkyCacheStrategy.Eager) {
      this.fetchTick() // Fire stiky fetch, but do not await
    }
  }

  get strategy(): StitkyCacheStrategy { return this._strategy }

  public async fetchTick(): Promise<void> {
    if (this._strategy === StitkyCacheStrategy.None) return

    const now = new Date()
    if (this._lastUpdate && now.getTime() - this._lastUpdate.getTime() < DEBOUNCE_MS) return

    const skupOpts: AFQueryOptions = {
      limit: NO_LIMIT,
      detail: AFQueryDetail.FULL,
      noUpdateStitkyCache: true, // IMPORTANT! Otherwise possible recurrence cycle
    }
    if (this._lastUpdate) {
      skupOpts.filter = Filter(`lastUpdate > ':date'`, { date: this._lastUpdate })
    }
    const skUpdate = await this._client.query(AFSkupinaStitku, skupOpts)

    for (const sk of skUpdate) {
      let found = this._stitekSkupiny.find(ss => ss.id === sk.id)
      if (!found) {
        this._stitekSkupiny.push(sk)
        continue
      }
      Object.assign(found, sk)
    }

    const stitOpts: AFQueryOptions = {
      limit: NO_LIMIT,
      detail: ['id', 'kod', 'lastUpdate', 'nazev', 'nazevA', 'nazevB', 'nazevC', 'nazevD', 'poznam', 'popis', 'platiOd', 'platiDo', 'skupVybKlic'],
      noUpdateStitkyCache: true, // IMPORTANT! Otherwise possible recurence cycle
    }
    if (this._lastUpdate) {
      skupOpts.filter = Filter(`lastUpdate > ':date'`, { date: this._lastUpdate })
    }
    const stUpdate = await this._client.query(AFStitek, stitOpts)

    for (const st of stUpdate) {
      st.skupVybKlic = this._stitekSkupiny.find(ss => ss.kod === st.skupVybKlic?.kod)
      const found = this._stitky.find(s => s.id === st.id)
      if (!found) {
        this._stitky.push(st)
        continue
      }
      Object.assign(found, st)
    }
  }

  public stitkyWithString(
    keys?: string | string[] | null, 
    groupFilter?: string | AFSkupinaStitku
  ): AFStitek[] | undefined {
    if (!keys) return undefined
    
    const list: AFStitek[] = []
    if (typeof keys === 'string') {
      keys = keys.split(', ')
    }
    if (typeof groupFilter === 'string') {
      groupFilter = this._stitekSkupiny.find(ss => ss.kod === groupFilter)
    }
    for (const key of keys) {
      const stitek = this._stitky.find(s => s.kod === key)
      if (stitek) {
        if (groupFilter && stitek.skupVybKlic?.kod !== groupFilter.kod) {
          continue
        }
        list.push(stitek)
      }
    }
    return list
  }
}