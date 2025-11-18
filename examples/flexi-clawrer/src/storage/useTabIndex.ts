import { computed, type Ref, type ComputedRef } from 'vue'
import { useLocalStorage, type LocalStorageEntry } from './useLocalStorage'
import { connectionTabsIndexKey, connectionTabDataKey } from './keys'
import type { TabsIndex, TabMeta, TabDataByType } from '../types/tabs'

type AnyTabData = TabDataByType[keyof TabDataByType]

interface TabsStore {
  readonly tabs: Ref<TabsIndex>
  readonly count: ComputedRef<number>
  readonly isDestroyed: ComputedRef<boolean>

  addTab(meta: TabMeta, initialData: AnyTabData): Ref<AnyTabData>
  updateTab(id: string, patch: Partial<Pick<TabMeta, 'label' | 'icon'>>): void
  removeTab(id: string): void
  getTabData(tabId: string): Ref<AnyTabData>
  destroyIndex(): void
}

const connStore = new Map<string, ReturnType<typeof createTabsStore>>()

export function useTabsIndex(connectionId: string) {
  if (connStore.has(connectionId)) return connStore.get(connectionId)!

  const store = createTabsStore(connectionId)
  connStore.set(connectionId, store)
  return store
}

function createTabsStore(connectionId: string): TabsStore {
  const indexKey = connectionTabsIndexKey(connectionId)
  const indexStorage = useLocalStorage<TabsIndex>(indexKey, [])
  const tabs = indexStorage.state
  
  const count = computed(() => tabs.value.length)

  const tabDataCache = new Map<String, LocalStorageEntry<AnyTabData>>()

  function _ensureAlive() {
    if (indexStorage.isDestroyed.value) {
      throw new Error(`Tabs index for connection "${connectionId}" has been destroyed`)
    }
  }

  function addTab(meta: TabMeta, data: AnyTabData): Ref<AnyTabData> {
    _ensureAlive()

    if (tabs.value.some(t => t.id === meta.id)) {
      throw new Error(`Tab with id "${meta.id}" already exists in connection "${connectionId}"`)
    }

    tabs.value.push(meta)

    const key = connectionTabDataKey(connectionId, meta.id)
    const dataRef = useLocalStorage<AnyTabData>(key, data)

    tabDataCache.set(meta.id, dataRef)
    return dataRef.state
  }

  function updateTab(id: string, data: Partial<Pick<TabMeta, 'label' | 'icon'>>) {
    _ensureAlive()

    const tab = tabs.value.find(t => t.id === id)
    if (!tab) {
      throw new Error(`Cannot update tab "${id}" – not found in connection "${connectionId}"`)
    }
    if (data.label !== undefined) tab.label = data.label
    if (data.icon !== undefined) tab.icon = data.icon
  }

  function removeTab(id: string) {
    _ensureAlive()

    const tab = tabs.value.find(t => t.id === id)
    if (!tab) {
      throw new Error(`Cannot remove tab "${id}" – not found in connection "${connectionId}"`)
    }

    tabs.value = tabs.value.filter(t => t.id !== id)

    const dataEntry = tabDataCache.get(id)
    if (dataEntry) {
      dataEntry.destroy()
      tabDataCache.delete(id)
    } else if (typeof window !== 'undefined') {
      // We might not loaded data page from cache yet, so this is fallback
      const tabKey = connectionTabDataKey(connectionId, id)
      window.localStorage.removeItem(tabKey)
    }
  }

  function destroyIndex() {
    _ensureAlive()

    const ids = tabs.value.map(t => t.id)

    for (const id of ids) {
      removeTab(id)
    }

    indexStorage.destroy()
    tabDataCache.clear()
  }

  function getTabData(tabId: string): Ref<AnyTabData> {
    _ensureAlive()

    const meta = tabs.value.find(t => t.id === tabId)
    if (!meta) {
      throw new Error(
        `Cannot get data for tab "${tabId}" – not found in connection "${connectionId}"`
      )
    }

    const cached = tabDataCache.get(tabId)
    if (cached) return cached.state

    if (typeof window === 'undefined') {
      throw new Error(
        `Cannot get data for tab "${tabId}" – localStorage not available (SSR?)`
      )
    }

    const dataKey = connectionTabDataKey(connectionId, tabId)
    const raw = window.localStorage.getItem(dataKey)

    if (raw == null) {
      throw new Error(
        `Data for tab "${tabId}" in connection "${connectionId}" not found in localStorage`
      )
    }

    let parsed: AnyTabData
    try {
      parsed = JSON.parse(raw)
    } catch (e) {
      throw new Error(
        `Failed to parse data for tab "${tabId}" in connection "${connectionId}": ${String(
          e
        )}`
      )
    }

    const entry = useLocalStorage<AnyTabData>(dataKey, parsed)
    tabDataCache.set(tabId, entry)

    return entry.state
  }

  return {
    tabs,
    count,
    isDestroyed: indexStorage.isDestroyed,
    addTab,
    updateTab,
    getTabData,
    removeTab,
    destroyIndex
  }
}