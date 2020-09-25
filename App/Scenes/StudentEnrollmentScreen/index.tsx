import React from 'react'
import Text from 'App/Components/Text'
import { Button, View } from 'react-native'
import styles from './styles'
import StudentEnrollmentItem from './StudentEnrollmentItem'

interface IStudentEnrollmentScreenProps {}

const StudentEnrollmentScreen: React.FC<IStudentEnrollmentScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Student Enrollment</Text>
        <Button title="Add Students" />
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
