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
          name: 'dickhead',
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
        {items.map((item, index) => (
          <View key={index}>
            <View>
              <Text>Class: {item.name}</Text>
              <Text>Taught by {item.teacher}</Text>
              <View style={styles.attendanceItem}>
                <View style={styles.studentId}>
                  <Text>Student ID</Text>
                </View>
                <View style={styles.studentItemCell}>
                  <Text>Student Name</Text>
                </View>
                <View style={styles.studentItemCell}>
                  <Text>Faceset Token</Text>
                </View>
                <View style={styles.studentItemCell}>
                  <Text>Attendance</Text>
                </View>
              </View>
              {item.students.map((student, index) => (
                <AttendanceItem student={student} key={index} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default StudentAttendanceScreen
