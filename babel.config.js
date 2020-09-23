function babelConfig(api) {
  if (api) {
    api.cache(false)
  }

  const presets = ['module:metro-react-native-babel-preset']
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        // alias: {
        //   '@scenes': './App/scenes',
        // },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}

module.exports = babelConfig
