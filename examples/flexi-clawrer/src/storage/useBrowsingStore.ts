import { useLocalStorage } from './useLocalStorage'
import { DEFAULT_BROWSING_STATE } from '../types/index'

const STORAGE_KEY = 'flexi-clawrer:browsing'

const stored = useLocalStorage(STORAGE_KEY, { ...DEFAULT_BROWSING_STATE })

export function useBrowsingStore() {
  return stored.state
}
