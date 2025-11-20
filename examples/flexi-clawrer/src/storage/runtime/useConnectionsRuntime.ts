import { ref, type Ref } from "vue"

interface ConnectionRT {
  password: string | null,
  checked: boolean
}

const runtimeMap = new Map<string, Ref<ConnectionRT>>()

function createConnectionRT() {
  return ref<ConnectionRT>({
    password: null,
    checked: false
  })
}

export function useConnectionRT(id: string) {
  let state = runtimeMap.get(id)
  if (!state) runtimeMap.set(id, state = createConnectionRT())

  return state
}

export function clearConnectionRT(id: string) {
  runtimeMap.delete(id)
}
