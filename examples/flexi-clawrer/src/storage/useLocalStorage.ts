import { computed, ref, watch, type ComputedRef, type Ref } from 'vue'

export interface LocalStorageEntry<T> {
  state: Ref<T>
  isDestroyed: ComputedRef<boolean>
  destroy: () => void
}

export function useLocalStorage<T>(key: string, defaultValue: T): LocalStorageEntry<T> {
  const state = ref<T>(defaultValue) as Ref<T>
  const destroyed = ref<boolean>(false)
  const isDestroyed = computed(() => destroyed.value )

  if (typeof window !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw != null) {
        state.value = JSON.parse(raw)
      }
    } catch (e) {
      console.warn(`Failed to parse localStorage key "${key}"`, e)
    }

    watch(state, newVal => {
      if (destroyed.value) {
        throw new Error(`Attempt to modify destroyed localStorage key "${key}"`)
      }
      try {
        window.localStorage.setItem(key, JSON.stringify(newVal))
      } catch (e) {
        console.warn(`Failed to write localStorage key "${key}"`, e)
      }
    }, { deep: true })
  }

  function destroy() {
    if (destroyed.value) return
    destroyed.value = true

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key)
      } catch (e) {
        console.warn(`Failed to remove localStorage key "${key}"`, e)
      }
    }
  }

  return {
    state,
    isDestroyed,
    destroy
  }
}