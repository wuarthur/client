import React from 'react'
import Text from 'App/Components/Text'
import { Button, View } from 'react-native'
import styles from './styles'
import StudentEnrollmentItem from './StudentEnrollmentItem'
import Modal from 'react-native-modal'
import AddStudentModal from './AddStudentModal'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'

interface IStudentEnrollmentScreenProps {
  navigation: StackNavigationProp<ParamList, 'Enrollment'>
}

const StudentEnrollmentScreen: React.FC<IStudentEnrollmentScreenProps> = ({ navigation }) => {
  const onAddStudents = React.useCallback(() => {
    navigation.push('AddStudent')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Student Enrollment</Text>
        <Button title="Add Students" onPress={onAddStudents} />
      </View>
      <View style={[styles.container, styles.wrapperPadding]}>
        <View style={styles.studentEnrollmentItem}>
          <View style={styles.enrollmentItemLeft}>
            <Text>ID</Text>
          </View>
          <View style={styles.enrollmentItemCenter}>
            <Text>Name</Text>
          </View>
          <View style={styles.enrollmentItemRight}></View>
        </View>
        <StudentEnrollmentItem />
        <StudentEnrollmentItem />
      </View>
    </View>
  )
}

export default StudentEnrollmentScreen
