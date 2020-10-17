import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import NavigationRouter from './NavigationRouter'

import {initalizeDatabase} from './api/DataAction'

const App: React.FC = () => {
  useEffect(() => {
    initalizeDatabase()
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationRouter />
      </SafeAreaView>
    </>
  )
}

export default App
