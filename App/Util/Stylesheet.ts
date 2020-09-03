import { Platform, StyleSheet } from 'react-native'

export default function create(styles: { [key: string]: any }) {
  const output = {}
  for (const key of Object.keys(styles)) {
    const { ios, android, ...common } = styles[key]
    const current = common
    Object.assign(current, Platform.select({ ios, android }))
  }

  return StyleSheet.create(output)
}
