const toBasic = (user: string, passwd: string) => {
  const raw = `${user}:${passwd}`
  // Node
  if (typeof Buffer !== 'undefined') return Buffer.from(raw).toString('base64')
  // Browser
  return btoa(raw)
}

export const withBasicAuth = (
  init: RequestInit | undefined,
  user: string,
  passwd: string
): RequestInit | undefined => {
  if (!user || !passwd) return init

  // Normalize existing headers into Headers so we can safely merge
  const headers = new Headers(init?.headers)
  headers.set('Authorization', `Basic ${toBasic(user, passwd)}`)

  return {
    ...init,
    headers
  }
}