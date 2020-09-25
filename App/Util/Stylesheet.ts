import { Platform, StyleSheet } from 'react-native'
import ApplicationStyles, { TApplicationStyles } from 'App/Themes/ApplicationStyles'

export default {
  create<T>(styles: T, includeApplicationStyles: boolean = true): T & TApplicationStyles {
    const output = {}

    if (includeApplicationStyles) {
      Object.assign(output, ApplicationStyles)
    }

    for (const key of Object.keys(styles)) {
      // @ts-ignore
      const { ios, android, ...common } = styles[key]
      const current = common
      Object.assign(current, Platform.select({ ios, android }))
      output[key] = current
    }

    return StyleSheet.create(output) as T & TApplicationStyles
  },
}
