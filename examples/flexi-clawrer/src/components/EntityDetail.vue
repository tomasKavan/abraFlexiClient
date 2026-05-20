<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { AFFilter, AFQueryDetail } from 'abra-flexi'
import { Big } from 'big.js'
import { useApiClient } from '../storage/useApiClient'
import { useBrowsingStore } from '../storage/useBrowsingStore'
import {
  getEntityRegistry,
  getEntityColumns,
  resolveRelationEntity,
  type EntityDescriptor,
} from '../utils/entityMeta'

const client = useApiClient()
const browsing = useBrowsingStore()

// ─── Navigation stack ─────────────────────────────────────────────────────────
interface NavFrame {
  entityName: string   // registry key e.g. 'AFAdresar'
  recordId: number
}

const navStack = ref<NavFrame[]>([])

// Reset local nav whenever the root selection changes
watch(
  () => `${browsing.value.selectedRecordId}::${browsing.value.entityName}`,
  () => { navStack.value = [] }
)

// ─── Current view ─────────────────────────────────────────────────────────────
const currentEntityName = computed(() =>
  navStack.value.length > 0
    ? navStack.value[navStack.value.length - 1].entityName
    : browsing.value.entityName
)

const currentRecordId = computed<number | null>(() =>
  navStack.value.length > 0
    ? navStack.value[navStack.value.length - 1].recordId
    : browsing.value.selectedRecordId
)

const currentEntityDesc = computed<EntityDescriptor | null>(() => {
  if (!currentEntityName.value) return null
  return getEntityRegistry().find(e => e.name === currentEntityName.value) ?? null
})

// Panel visible while a root record is selected
const isVisible = computed(() => browsing.value.selectedRecordId !== null)

// ─── Data fetching ────────────────────────────────────────────────────────────
const loading = ref(false)
const data = ref<Record<string, any> | null>(null)
const fetchError = ref<string | null>(null)

watch(
  () => `${currentEntityName.value}::${currentRecordId.value}::${client.value ? 1 : 0}`,
  async () => {
    const entityName = currentEntityName.value
    const recordId = currentRecordId.value
    if (!entityName || recordId == null || !client.value) {
      data.value = null
      return
    }
    const desc = getEntityRegistry().find(e => e.name === entityName)
    if (!desc) return

    loading.value = true
    fetchError.value = null
    data.value = null
    try {
      const result = await client.value.queryOne(desc.cls, {
        filter: AFFilter.empty().and('id = :id', { id: recordId }),
        detail: AFQueryDetail.FULL,
      })
      data.value = result as any
    } catch (e: any) {
      fetchError.value = e?.message ?? String(e)
    } finally {
      loading.value = false
    }
  },
  { immediate: true }
)

// ─── Column metadata for relation resolution ──────────────────────────────────
const columnMap = computed(() => {
  if (!currentEntityDesc.value) return new Map()
  const cols = getEntityColumns(currentEntityDesc.value.cls)
  return new Map(cols.map(c => [c.key, c]))
})

// ─── Entries ──────────────────────────────────────────────────────────────────
interface EntryItem {
  key: string
  display: string
  navTarget: EntityDescriptor | null
  navId: number | null
}

const entries = computed<EntryItem[]>(() => {
  if (!data.value) return []
  return Object.entries(data.value)
    .filter(([k]) => !k.startsWith('_'))
    .map(([k, v]): EntryItem | null => {
      if (v === null || v === undefined) return null

      let display = ''
      let navTarget: EntityDescriptor | null = null
      let navId: number | null = null

      if (Array.isArray(v)) {
        display = `[${v.length} items]`
      } else if (v instanceof Date) {
        display = v.toLocaleString('cs')
      } else if (typeof v === 'object') {
        // Big.js numeric instance — just stringify it
        if (v instanceof Big) {
          display = String(v)
        } else {
          const o = v as any
          navId = o.id ?? null
          display = o.kod ?? o.nazev ?? (o.id != null ? String(o.id) : '[Object]')
          const col = columnMap.value.get(k)
          if (col && navId != null) {
            navTarget = resolveRelationEntity(col)
          }
        }
      } else if (typeof v === 'boolean') {
        display = v ? 'Ano' : 'Ne'
      } else {
        display = String(v)
      }

      if (!display) return null
      return { key: k, display, navTarget, navId }
    })
    .filter((e): e is EntryItem => e !== null)
})

// ─── Navigation actions ───────────────────────────────────────────────────────
function navigateTo(entityName: string, recordId: number) {
  navStack.value = [...navStack.value, { entityName, recordId }]
}

function goBack() {
  navStack.value = navStack.value.slice(0, -1)
}

function truncateTo(index: number) {
  navStack.value = navStack.value.slice(0, index + 1)
}

function resetToRoot() {
  navStack.value = []
}

function close() {
  navStack.value = []
  browsing.value.selectedRecordId = null
}

// ─── Breadcrumb helper ────────────────────────────────────────────────────────
function entityLabel(name: string): string {
  return getEntityRegistry().find(e => e.name === name)?.entityName ?? name
}
</script>

<template>
  <div
    v-if="isVisible"
    class="w-80 shrink-0 border-l border-surface-200 flex flex-col bg-surface-0 overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center justify-between px-3 py-2 border-b border-surface-100 shrink-0 gap-1">
      <div class="flex items-center gap-1 min-w-0 flex-1">
        <Button
          v-if="navStack.length > 0"
          icon="pi pi-arrow-left"
          text
          size="small"
          @click="goBack"
          v-tooltip="'Back'"
          class="shrink-0"
        />
        <div class="min-w-0">
          <div class="font-semibold text-sm truncate leading-tight">
            {{ currentEntityDesc?.entityName ?? currentEntityName }}
          </div>
          <div class="text-xs text-surface-400">#{{ currentRecordId }}</div>
        </div>
      </div>
      <Button icon="pi pi-times" text size="small" @click="close" class="shrink-0" />
    </div>

    <!-- Breadcrumb (shown when navigated away from root) -->
    <div
      v-if="navStack.length > 0"
      class="px-3 py-1 border-b border-surface-100 bg-surface-50 flex items-center gap-1 flex-wrap text-xs"
    >
      <!-- Root entry -->
      <span
        class="text-primary-600 cursor-pointer hover:underline shrink-0"
        @click="resetToRoot"
      >
        {{ entityLabel(browsing.entityName ?? '') }} #{{ browsing.selectedRecordId }}
      </span>

      <!-- Intermediate frames -->
      <template v-for="(frame, i) in navStack.slice(0, -1)" :key="i">
        <span class="text-surface-400">›</span>
        <span
          class="text-primary-600 cursor-pointer hover:underline shrink-0"
          @click="truncateTo(i + 1)"
        >
          {{ entityLabel(frame.entityName) }} #{{ frame.recordId }}
        </span>
      </template>

      <span class="text-surface-400">›</span>
    </div>

    <!-- Loading spinner -->
    <div v-if="loading" class="flex-1 flex items-center justify-center">
      <ProgressSpinner style="width:32px;height:32px" />
    </div>

    <!-- Error -->
    <Message v-else-if="fetchError" severity="error" class="m-2 text-xs">{{ fetchError }}</Message>

    <!-- Detail table -->
    <div v-else class="flex-1 overflow-y-auto">
      <table class="w-full text-xs">
        <tbody>
          <tr
            v-for="entry in entries"
            :key="entry.key"
            class="border-b border-surface-50 hover:bg-surface-50"
          >
            <td class="px-3 py-1 font-medium text-surface-600 w-32 align-top break-all">
              {{ entry.key }}
            </td>
            <td class="px-3 py-1 break-all">
              <!-- Navigable relation — show as link -->
              <span
                v-if="entry.navTarget && entry.navId != null"
                class="text-primary-600 cursor-pointer hover:underline"
                :title="`Open ${entry.navTarget.entityName} #${entry.navId}`"
                @click="navigateTo(entry.navTarget.name, entry.navId)"
              >{{ entry.display }}</span>
              <!-- Plain value -->
              <span v-else class="text-surface-900">{{ entry.display }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
