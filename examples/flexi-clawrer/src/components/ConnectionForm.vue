<script setup lang="ts">
import { ref, computed } from 'vue'
import { AFApiClient } from 'abra-flexi'
import { useConnectionStore } from '../storage/useConnectionStore'
import { useApiClient } from '../storage/useApiClient'
import { withBasicAuth } from '../utils/basicAuth'

const { config, password } = useConnectionStore()
const client = useApiClient()

const connecting = ref(false)
const error = ref<string | null>(null)

const isConnected = computed(() => client.value !== null)

async function connect() {
  error.value = null
  connecting.value = true
  try {
    const { server, company, username } = config.value
    if (!server || !company || !username || !password.value) {
      throw new Error('Fill in all fields (server, company, username, password)')
    }
    const newClient = new AFApiClient({
      url: server,
      company,
      fetch: (input, init) => {
        // Route through the Vite dev-proxy to avoid CORS restrictions.
        // The proxy middleware in vite.config.ts reads the ?target= param
        // and pipes the request to the real Flexi server.
        const url = typeof input === 'string' ? input : input.toString()
        console.log('[flexi] →', init?.method ?? 'GET', url)
        return fetch(
          `/flexi-proxy?target=${encodeURIComponent(url)}`,
          withBasicAuth(init, username, password.value),
        )
      },
    })
    // Smoke-test: try querying something trivial
    client.value = newClient
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    client.value = null
  } finally {
    connecting.value = false
  }
}

function disconnect() {
  client.value = null
  error.value = null
}
</script>

<template>
  <header class="flex items-center gap-3 px-4 py-2 bg-surface-0 border-b border-surface-200 shadow-sm flex-wrap">
    <span class="text-primary font-bold text-lg mr-2 shrink-0">
      <i class="pi pi-database mr-1" />ABRA Flexi
    </span>

    <InputText
      v-model="config.server"
      placeholder="Server (https://flexi.example.com)"
      class="w-64 text-sm"
      :disabled="isConnected"
      size="small"
    />
    <InputText
      v-model="config.company"
      placeholder="Company path"
      class="w-36 text-sm"
      :disabled="isConnected"
      size="small"
    />
    <InputText
      v-model="config.username"
      placeholder="Username"
      class="w-32 text-sm"
      :disabled="isConnected"
      size="small"
    />
    <Password
      v-model="password"
      placeholder="Password"
      :feedback="false"
      toggle-mask
      class="w-36 text-sm"
      :disabled="isConnected"
      input-class="text-sm w-full"
      size="small"
    />

    <Button
      v-if="!isConnected"
      label="Connect"
      icon="pi pi-plug"
      size="small"
      :loading="connecting"
      @click="connect"
    />
    <Button
      v-else
      label="Disconnect"
      icon="pi pi-times"
      size="small"
      severity="secondary"
      @click="disconnect"
    />

    <Tag
      v-if="isConnected"
      value="Connected"
      severity="success"
      icon="pi pi-check"
    />

    <small v-if="error" class="text-red-500">{{ error }}</small>
  </header>
</template>
