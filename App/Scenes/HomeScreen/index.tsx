import React from 'react'
import Text from 'App/Components/Text'
import { View, Button } from 'react-native'
import * as styles from './styles'

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <View style={[styles.container, styles.background]}>
      <Button title="Enroll Students"></Button>
      <Button title="Take Attendance"></Button>
      <Button title="Classes Information"></Button>
    </View>
  )
}

export default HomeScreen
