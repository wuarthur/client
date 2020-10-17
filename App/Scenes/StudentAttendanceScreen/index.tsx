import React from 'react'
import Text from 'App/Components/Text'
import styles from './styles'
import { View } from 'react-native'
import AttendanceItem from './AttendanceItem'

interface IStudentAttendanceScreenProps {}

const StudentAttendanceScreen: React.FC<IStudentAttendanceScreenProps> = () => {
  const items = [
    {
      name: 'A',
      teacher: 'Mod mark',
      students: [
        {
          id: 0,
          name: '',
          faceset_token: '',
          attendance: 0,
        },
        {
          id: 1,
          name: '',
          faceset_token: '',
          attendance: 0,
        },
      ],
    },
    {
      name: 'B',
      teacher: 'Mod mark',
      students: [
        {
          id: 0,
          name: '',
          faceset_token: '',
          attendance: 0,
        },
        {
          id: 1,
          name: '',
          faceset_token: '',
          attendance: 0, //1 = attended, 0 = absent
        },
      ],
    },
  ]

  return (
    <View style={styles.container}>
      <Text>Student Attendance List</Text>
      <View style={[styles.container, styles.containerPadding]}>
        <View style={styles.attendanceItem}>
          <View style={styles.studentId}>
            <Text>Student ID</Text>
          </View>
          <View style={styles.studentItemCell}>
            <Text>Student Name</Text>
          </View>
          <View style={styles.studentItemCell}></View>
          <View style={styles.studentItemCell}>
            <Text>Attendance</Text>
          </View>
        </View>
        <AttendanceItem />
        <AttendanceItem />
      </View>
    </View>
  )
}

export default StudentAttendanceScreen
