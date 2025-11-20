export interface Connection {
  id: string
  label: string
  server: string
  username: string
  company: string
}

export enum TabType {
  Agenda = 'agenda',
  _Special = '_special',
}

export interface TabMeta {
  id: string
  label: string
  icon: string | null
  type: TabType
}

export type TabsIndex = TabMeta[]

export interface TabDataBase {}

export interface AgendaTabData extends TabDataBase {
  
}

export type TabDataByType = {
  [TabType.Agenda]: AgendaTabData
}
