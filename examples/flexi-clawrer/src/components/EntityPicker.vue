<script setup lang="ts">
import { ref, computed } from 'vue'
import { getEntityRegistry } from '../utils/entityMeta'
import { useBrowsingStore } from '../storage/useBrowsingStore'
import { getDefaultColumns } from '../utils/entityMeta'

const browsing = useBrowsingStore()
const search = ref('')

const allEntities = getEntityRegistry()

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return allEntities
  return allEntities.filter(e =>
    e.entityName.toLowerCase().includes(q) ||
    e.entityPath.toLowerCase().includes(q) ||
    e.name.toLowerCase().includes(q)
  )
})

function selectEntity(name: string) {
  if (browsing.value.entityName === name) return
  const desc = allEntities.find(e => e.name === name)
  browsing.value = {
    entityName: name,
    selectedColumns: desc ? getDefaultColumns(desc.cls) : [],
    filterState: {},
    currentPage: 0,
    pageSize: browsing.value.pageSize,
    selectedRecordId: null,
  }
}
</script>

<template>
  <aside class="w-64 shrink-0 flex flex-col border-r border-surface-200 bg-surface-0 overflow-hidden">
    <div class="p-3 border-b border-surface-100">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="search"
          placeholder="Search entities…"
          class="w-full text-sm"
          size="small"
        />
      </IconField>
    </div>

    <div class="overflow-y-auto flex-1">
      <div
        v-for="entity in filtered"
        :key="entity.name"
        class="px-3 py-2 cursor-pointer flex flex-col hover:bg-primary-50 transition-colors"
        :class="{
          'bg-primary-100 border-l-2 border-primary-500': browsing.entityName === entity.name,
        }"
        @click="selectEntity(entity.name)"
      >
        <span class="text-sm font-medium leading-tight">{{ entity.entityName }}</span>
        <span class="text-xs text-surface-400">{{ entity.entityPath }}</span>
      </div>

      <div v-if="filtered.length === 0" class="p-4 text-sm text-surface-400 text-center">
        No entities match "{{ search }}"
      </div>
    </div>

    <div class="px-3 py-2 border-t border-surface-100 text-xs text-surface-400">
      {{ filtered.length }} of {{ allEntities.length }} entities
    </div>
  </aside>
</template>
