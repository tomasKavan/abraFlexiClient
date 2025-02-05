export const addBasicAtuh = (user: string, passwd: string) => {
  if (!user || !passwd) {
    return undefined
  }
  return {
    headers: {
      Authorization: `Basic ${Buffer.from(user + ':' + passwd).toString('base64')}` 
    }
  }
}