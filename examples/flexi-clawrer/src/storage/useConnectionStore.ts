import { ref } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import type { ConnectionConfig } from '../types/index'

const STORAGE_KEY = 'flexi-clawrer:connection'

// Persisted config (no password)
const stored = useLocalStorage<ConnectionConfig>(STORAGE_KEY, {
  server: '',
  company: '',
  username: '',
})

// In-memory only — never stored
const password = ref<string>('')

export function useConnectionStore() {
  return {
    config: stored.state,
    password,
  }
}
