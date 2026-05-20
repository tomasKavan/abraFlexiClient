<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { AFFilter, AFQueryDetail } from 'abra-flexi'
import { useApiClient } from '../storage/useApiClient'
import { useBrowsingStore } from '../storage/useBrowsingStore'
import {
  getEntityRegistry,
  getSimpleColumns,
  formatCellValue,
  type ColumnMeta,
} from '../utils/entityMeta'
import EntityDetail from './EntityDetail.vue'

const client = useApiClient()
const browsing = useBrowsingStore()

// ─── Entity descriptor ──────────────────────────────────────────────────
const entityDesc = computed(() => {
  if (!browsing.value.entityName) return null
  return getEntityRegistry().find(e => e.name === browsing.value.entityName) ?? null
})

// ─── All available columns for current entity ───────────────────────────
const allColumns = computed<ColumnMeta[]>(() =>
  entityDesc.value ? getSimpleColumns(entityDesc.value.cls) : []
)

// ─── Selected column keys (bound to MultiSelect) ─────────────────────────
const selectedColumnKeys = computed({
  get: () => browsing.value.selectedColumns,
  set: (v) => { browsing.value.selectedColumns = v },
})

const visibleColumns = computed(() =>
  allColumns.value.filter(c => selectedColumnKeys.value.includes(c.key))
)

// ─── Filter state ────────────────────────────────────────────────────────
const pendingFilter = ref<Record<string, string>>({})

watch(
  () => browsing.value.filterState,
  (v) => { pendingFilter.value = { ...v } },
  { immediate: true }
)

// ─── Data ────────────────────────────────────────────────────────────────
const rows = ref<any[]>([])
const totalCount = ref<number | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const hasMore = computed(() => {
  if (totalCount.value === null) return rows.value.length >= browsing.value.pageSize
  return (browsing.value.currentPage + 1) * browsing.value.pageSize < totalCount.value
})

function buildFilter(): AFFilter | undefined {
  const entries = Object.entries(browsing.value.filterState).filter(([, v]) => v.trim())
  if (!entries.length) return undefined
  let f = AFFilter.empty()
  for (const [key, val] of entries) {
    f = f.and(`${key} like :v`, { v: `${val.trim()}%` })
  }
  return f
}

async function fetchPage() {
  if (!client.value || !entityDesc.value) return
  loading.value = true
  error.value = null
  try {
    const { currentPage, pageSize } = browsing.value

    const data = await client.value.query(entityDesc.value.cls, {
      detail: selectedColumnKeys.value.length
        ? (selectedColumnKeys.value as any)
        : AFQueryDetail.SUMMARY,
      filter: buildFilter(),
      limit: pageSize,
      start: currentPage * pageSize,
      addRowCount: true,
    })

    rows.value = data
    totalCount.value = (data as any).totalCount ?? null
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    rows.value = []
    totalCount.value = null
  } finally {
    loading.value = false
  }
}

// Single combined watch — all triggers for a re-fetch.
// Every source returns a primitive so Vue never walks into complex objects.
watch(
  [
    () => browsing.value.entityName,
    () => browsing.value.currentPage,
    () => JSON.stringify(browsing.value.filterState),
    () => browsing.value.selectedColumns.join(','),
    () => client.value,   // reference identity only — not deep
  ],
  () => {
    if (browsing.value.entityName && client.value) fetchPage()
    else rows.value = []
  },
  { immediate: true }
)

// ─── Filter apply / clear ────────────────────────────────────────────────
function applyFilter() {
  browsing.value.filterState = { ...pendingFilter.value }
  browsing.value.currentPage = 0
  browsing.value.selectedRecordId = null
}

function clearFilter() {
  pendingFilter.value = {}
  browsing.value.filterState = {}
  browsing.value.currentPage = 0
  browsing.value.selectedRecordId = null
}

// ─── Pagination ───────────────────────────────────────────────────────────
function prevPage() {
  if (browsing.value.currentPage > 0) {
    browsing.value.currentPage--
    browsing.value.selectedRecordId = null
  }
}

function nextPage() {
  if (hasMore.value) {
    browsing.value.currentPage++
    browsing.value.selectedRecordId = null
  }
}

// Column picker options
const columnOptions = computed(() =>
  allColumns.value.map(c => ({ label: c.key, value: c.key }))
)
</script>

<template>
  <div class="flex-1 flex flex-col overflow-hidden">

    <!-- No entity selected -->
    <div
      v-if="!browsing.entityName"
      class="flex-1 flex items-center justify-center text-surface-400"
    >
      <div class="text-center">
        <i class="pi pi-list text-4xl mb-3 block" />
        <p class="text-lg">Select an entity from the sidebar</p>
        <p class="text-sm mt-1" v-if="!client">Connect to a server first</p>
      </div>
    </div>

    <!-- Entity browser -->
    <div v-else class="flex-1 flex flex-col overflow-hidden">

      <!-- Toolbar -->
      <div class="flex items-center gap-2 px-4 py-2 bg-surface-0 border-b border-surface-200 flex-wrap">
        <span class="font-semibold text-sm">
          {{ entityDesc?.entityName }}
          <span class="text-surface-400 font-normal ml-1">/ {{ entityDesc?.entityPath }}</span>
        </span>

        <div class="flex-1" />

        <!-- Column picker -->
        <MultiSelect
          v-model="selectedColumnKeys"
          :options="columnOptions"
          option-label="label"
          option-value="value"
          placeholder="Columns"
          size="small"
          class="text-sm w-48"
          :max-selected-labels="2"
          selected-items-label="{0} columns"
        />

        <Button
          icon="pi pi-refresh"
          size="small"
          severity="secondary"
          text
          :loading="loading"
          @click="fetchPage"
          v-tooltip="'Refresh'"
        />
      </div>

      <!-- Filter bar -->
      <div
        v-if="visibleColumns.length"
        class="flex items-center gap-2 px-4 py-2 bg-surface-50 border-b border-surface-100 flex-wrap"
      >
        <span class="text-xs text-surface-400 shrink-0">Filter:</span>
        <template v-for="col in visibleColumns" :key="col.key">
          <InputText
            v-if="!col.isRelation"
            v-model="pendingFilter[col.key]"
            :placeholder="col.key"
            size="small"
            class="text-xs w-28"
            @keydown.enter="applyFilter"
          />
        </template>
        <Button label="Apply" size="small" @click="applyFilter" />
        <Button label="Clear" size="small" severity="secondary" text @click="clearFilter" />
      </div>

      <!-- Error -->
      <Message v-if="error" severity="error" class="mx-4 mt-2">{{ error }}</Message>

      <!-- Main content: table + drawer -->
      <div class="flex-1 flex overflow-hidden">

        <!-- Data table -->
        <div class="flex-1 overflow-auto">
          <DataTable
            :value="rows"
            :loading="loading"
            size="small"
            striped-rows
            scrollable
            scroll-height="flex"
            :row-class="(row) => row?.id === browsing.selectedRecordId ? 'bg-primary-50' : ''"
            @row-click="(e) => { if (e.data?.id != null) browsing.selectedRecordId = e.data.id }"
            class="text-sm cursor-pointer"
          >
            <template #empty>
              <div class="text-center py-8 text-surface-400">
                <span v-if="!client">Not connected — press Connect first</span>
                <span v-else>No records found</span>
              </div>
            </template>

            <Column
              v-for="col in visibleColumns"
              :key="col.key"
              :field="col.key"
              :header="col.key"
              :sortable="false"
            >
              <template #body="{ data }">
                <span class="text-xs">{{ formatCellValue(data[col.key], col) }}</span>
              </template>
            </Column>
          </DataTable>
        </div>

        <!-- Detail panel -->
        <EntityDetail />
      </div>

      <!-- Pagination footer -->
      <div class="flex items-center justify-between px-4 py-2 bg-surface-0 border-t border-surface-200 text-sm">
        <span class="text-surface-500 text-xs">
          Page {{ browsing.currentPage + 1 }}
          · {{ browsing.currentPage * browsing.pageSize + 1 }}–{{ browsing.currentPage * browsing.pageSize + rows.length }}
          <template v-if="totalCount !== null">of {{ totalCount }}</template>
          · {{ browsing.pageSize }} per page
        </span>
        <div class="flex gap-2">
          <Button
            icon="pi pi-chevron-left"
            size="small"
            severity="secondary"
            text
            :disabled="browsing.currentPage === 0"
            @click="prevPage"
          />
          <Button
            icon="pi pi-chevron-right"
            size="small"
            severity="secondary"
            text
            :disabled="!hasMore"
            @click="nextPage"
          />
        </div>
      </div>

    </div>
  </div>
</template>
