import React from 'react'
import Text from 'App/Components/Text'
import { View, Button } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'
import StyleSheet from 'App/Util/Stylesheet'

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'cornflowerblue',
  },
  buttonRow: {
    marginBottom: 15,
  },
})

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
      <View style={styles.buttonRow}>
        <Button title="Enroll Students" onPress={enrollStudents}></Button>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Student Attendance" onPress={onStudentAttendance}></Button>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Classes Information" onPress={classesInformation}></Button>
      </View>
    </View>
  )
}

export default HomeScreen
