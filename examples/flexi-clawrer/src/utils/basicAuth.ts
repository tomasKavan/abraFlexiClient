const toBasic = (user: string, passwd: string): string => {
  const raw = `${user}:${passwd}`
  if (typeof Buffer !== 'undefined') return Buffer.from(raw).toString('base64')
  return btoa(raw)
}

export const withBasicAuth = (
  init: RequestInit | undefined,
  user: string,
  passwd: string
): RequestInit => {
  if (!user || !passwd) return init ?? {}
  const headers = new Headers(init?.headers)
  headers.set('Authorization', `Basic ${toBasic(user, passwd)}`)
  return { ...init, headers }
}
