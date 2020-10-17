import RNFS from 'react-native-fs'

export default async function toBase64(uri: string) {
  const rawURI = uri.substring(7)
  const base64 = await RNFS.readFile(rawURI, 'base64')
  return `data:image/jpeg;base64,${base64}`
}
