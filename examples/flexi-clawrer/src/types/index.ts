export interface ConnectionConfig {
  server: string    // e.g. 'https://flexi.example.com'
  company: string   // e.g. 'moje-firma'
  username: string
}

export interface BrowsingState {
  entityName: string | null       // e.g. 'AFAdresar'
  selectedColumns: string[]       // list of propAnnotation keys to show
  filterState: Record<string, string>  // { fieldKey: filterText }
  currentPage: number
  pageSize: number
  selectedRecordId: number | null
}

export const DEFAULT_BROWSING_STATE: BrowsingState = {
  entityName: null,
  selectedColumns: [],
  filterState: {},
  currentPage: 0,
  pageSize: 25,
  selectedRecordId: null,
}
