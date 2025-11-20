<script setup lang="ts">
import { computed, ref } from 'vue'
import { useConnection } from './storage/useConnections'
import { type TabMeta, TabType } from './types/tabs'
import { useTabsIndex } from './storage/useTabIndex'

const CONNECTION_TAB_ID = '_connections'
const ADD_TAB_ID = '_addtab'

const conn = useConnection()

const tabsStore = computed(() => {
  return conn.activeConnection.value ? useTabsIndex(conn.activeConnection.value.id) : null
})

const connectionTabs = computed(() => tabsStore.value?.tabs.value ?? [])

const tabs = computed<TabMeta[]>(() => {
  return [
    {
      id: CONNECTION_TAB_ID,
      label: 'ABRA',
      type: TabType._Special,
      icon: 'list'
    }, 
    ...connectionTabs.value,
    {
      id: ADD_TAB_ID,
      label: '',
      type: TabType._Special,
      icon: 'plus'
    }
  ]
})

const activeTabIndex = ref<number>(0)
const activeTab = computed(() => {
  return tabs.value[activeTabIndex.value]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Tabs :value="activeTabIndex" scrollable>
      <TabList>
        <Tab v-for="tab in tabs" :key="tab.label" :value="tabs.indexOf(tab)">
          <i v-if="tab.icon" class="pi mr-2 relative top-[0.5px]" :class="[tab.icon ? `pi-${tab.icon}` : '']"></i>
          <span v-if="tab.label">{{ tab.label }}</span>
        </Tab>
      </TabList>
    </Tabs>
    <div class="grow flex flex-row">
      <div v-if="activeTab?.type === TabType._Special" class="grow flex flex-row">
        <Connection v-if="activeTab?.id === CONNECTION_TAB_ID"></Connection>
        <AddTab v-if="activeTab?.id === ADD_TAB_ID"></AddTab>
      </div>
      <AgendaDetail v-if="activeTab?.type === TabType.Agenda" :tabMeta="activeTab"></AgendaDetail>
    </div>
  </div>
</template>

<style scoped>

</style>
