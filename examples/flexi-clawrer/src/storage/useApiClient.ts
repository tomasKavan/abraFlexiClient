import { ref } from 'vue'
import type { AFApiClient } from 'abra-flexi'

// Module-level singleton — shared across all components without provide/inject.
const client = ref<AFApiClient | null>(null)

export function useApiClient() {
  return client
}
