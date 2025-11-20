<script setup lang="ts">
import { computed } from 'vue';
import { useConnection } from '../storage/useConnections';
import type { MenuItem } from 'primevue/menuitem';

const CONNECTION_ICON = 'pi pi-bookmark'

const connStore = useConnection()

const selectConnection = (id: string) => {
  console.log(`Selected connection ${id}`)
}

const addConnection = () => {
  console.log(`Add connection`)
}

const list = computed<MenuItem[]>(() => {
  const serverList: MenuItem[] = []
  connStore.list.value.forEach(c => {
    let server = serverList.find(s => s.host === c.server)
    if (!server) serverList.push(server = {label: c.server, items: []})
    
    server.items?.push({
      label: c.label ?? (c.company + ':' + c.username),
      icon: CONNECTION_ICON,
      command: () => selectConnection(c.id)
    })
    
  })
  serverList.push({ separator: true })
  serverList.push({
    host: 'https://flexi.mlwn.se:443',
    label: 'flexi.mlwn.se',
    items: [{
      icon: CONNECTION_ICON,
      label: 'Testovací firma - Tom',
      command: () => selectConnection('1')
    }],
  })
  serverList.push({ separator: true })
  serverList.push({
    label: 'Add',
    icon: 'pi pi-plus',
    command: () => addConnection()
  })
  return serverList
})

</script>

<template>
  <div class="w-90 p-5">
    <Menu :model="list">
      <template #start>
        <div class="gap px-4 py-2">
          <span class="text-xl text-primary">ABRA Flexi</span> <span class="text-xl font-semibold">Connections</span>
        </div>
      </template>
    </Menu>
  </div>
</template>