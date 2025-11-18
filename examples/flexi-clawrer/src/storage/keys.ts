const PREFIX = 'aftsclispa'

export const STORAGE_KEYS = {
  connections: `${PREFIX}:connections`,
  activeConnectionId: `${PREFIX}:activeConnectionId`,
}

export const connectionTabsIndexKey = (connectionId: string) =>
  `${PREFIX}:conn:${connectionId}:tabs:index`

export const connectionTabDataKey = (connectionId: string, tabId: string) =>
  `${PREFIX}:conn:${connectionId}:tab:${tabId}`