import { Platform, StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Themes/ApplicationStyles'

export default {
  create(styles: { [key: string]: any }, includeApplicationStyles: boolean = true) {
    const output = {}

    if (includeApplicationStyles) {
      Object.assign(output, ApplicationStyles)
    }

    for (const key of Object.keys(styles)) {
      const { ios, android, ...common } = styles[key]
      const current = common
      Object.assign(current, Platform.select({ ios, android }))
    }

    return StyleSheet.create(output)
  },
}
