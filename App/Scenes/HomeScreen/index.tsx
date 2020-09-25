import React from 'react'
import Text from 'App/Components/Text'
import { View, Button } from 'react-native'
import * as styles from './styles'
import { NavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'

interface IHomeScreenProps {
  navigation: StackNavigationProp<ParamList, 'Home'>
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const enrollStudents = React.useCallback(() => {
    navigation.push('Enrollment')
  }, [])
  const onStudentAttendance = React.useCallback(() => {
    navigation.push('TakeAttendance')
  }, [])
  const classesInformation = React.useCallback(() => {
    navigation.push('Attendance')
  }, [])

  return (
    <View style={[styles.container, styles.background]}>
      <Button title="Enroll Students" onPress={enrollStudents}></Button>
      <Button title="Student Attendance" onPress={onStudentAttendance}></Button>
      <Button title="Classes Information" onPress={classesInformation}></Button>
    </View>
  )
}

export default HomeScreen
