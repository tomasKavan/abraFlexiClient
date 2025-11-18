<script setup lang="ts">
import { computed, ref } from 'vue';



const tabs = ref<TabItem[]>([{
  label: 'ABRA',
  type: TabType.ABRA
},{
  label: 'Faktury Vydané',
  value: 'aaa',
  type: TabType.ABRA
}, {
  label: 'Ceník',
  value: 'bbb',
  type: TabType.ABRA
}, {
  label: 'Typy dokladů',
  value: 'ccc',
  type: TabType.ABRA
}, {
  icon: 'plus',
  value: 'add',
  type: TabType.AddTab
}])

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
          <i v-if="tab.icon" class="pi" :class="[tab.icon ? `pi-${tab.icon}` : '']"></i>
          <span v-if="tab.label">{{ tab.label }}</span>
        </Tab>
      </TabList>
    </Tabs>
    <div class="flex-1">
      <AbraDetail v-if="activeTab?.type === TabType.ABRA"></AbraDetail>
      <AgendaDetail v-if="activeTab?.type === TabType.Agenda" :tabKey="activeTab.value"></AgendaDetail>
      <AddTab v-if="activeTab?.type === TabType.AddTab"></AddTab>
    </div>

  </div>
</template>

<style scoped>

</style>
