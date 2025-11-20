import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import { useTabsIndex } from './useTabIndex'
import { STORAGE_KEYS } from './keys'
import type { Connection } from '../types/tabs'
import { clearConnectionRT } from './runtime/useConnectionsRuntime'

export function useConnection() {
  const connections = useLocalStorage<Connection[]>(STORAGE_KEYS.connections, [])
  const activeConnectionId = useLocalStorage<string | null>(STORAGE_KEYS.activeConnectionId, null)

  const activeConnection = computed<Connection | null>(() => {
    if (!activeConnectionId.state.value) return null
    return connections.state.value.find(c => c.id === activeConnectionId.state.value) ?? null
  })  

  function setActiveConnection(id: string | null) {
    activeConnectionId.state.value = id
  }

  function addConnection(payload: Omit<Connection, 'id'>) {
    const id = crypto.randomUUID()

    const newConnection: Connection = {
      id,
      ...payload,
    }

    connections.state.value.push(newConnection)

    if (!activeConnectionId.state.value) {
      activeConnectionId.state.value = id
    }

    return newConnection
  }

  function removeConnection(id: string) {
    const conn = connections.state.value.find(c => c.id === id)
    if (!conn) return

    // 1) remove all tabs and their data for this connection
    const { destroyIndex } = useTabsIndex(id)
    destroyIndex()

    // 2) remove connection from list
    connections.state.value = connections.state.value.filter(c => c.id !== id)

    // 3) if it was active, pick another or null
    if (activeConnectionId.state.value === id) {
      activeConnectionId.state.value = connections.state.value[0]?.id ?? null
    }

    // 4) Remove runtime data - just for safety
    clearConnectionRT(id)
  }

  return {
    list: connections.state,
    activeConnectionId,
    activeConnection,
    setActiveConnection,
    addConnection,
    removeConnection,
  }

}
