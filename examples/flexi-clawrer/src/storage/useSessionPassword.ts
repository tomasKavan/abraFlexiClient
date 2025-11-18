import { ref } from 'vue'

const passwordRef = ref('')

export function useSessionPassword() {
  return passwordRef
}