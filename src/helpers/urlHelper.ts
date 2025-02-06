export function addParamToUrl<T>(
  url: string, 
  key: string, 
  value: T | null | undefined
): string {
  const isFirst = !url.includes('?')
  if (!value) {
    return url
  }

  let out = ''
  if (typeof value === 'string' && value.length) {
    out = (isFirst ? '?' : '&') + key + '=' + value
  }

  if (typeof value === 'number') {
    out = (isFirst ? '?' : '&') + key + '=' + value.toString()
  }

  if (typeof value === 'boolean') {
    out = (isFirst ? '?' : '&') + key + '=' + (value ? 'true' : 'false')
  }

  return url + out
}