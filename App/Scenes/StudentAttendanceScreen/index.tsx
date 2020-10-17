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
          name: 'Mod MMG',
          faceset_token: 'kjhebkhdsafbe1k2hb98',
          attendance: 0,
        },
        {
          id: 1,
          name: 'jas0n',
          faceset_token: 'kafjndksjfnnldfs_d',
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
          name: 'tuppyole',
          faceset_token: 'asdmfnb_fljsandfljn',
          attendance: 0,
        },
        {
          id: 1,
          name: 'paullam328',
          faceset_token: '1jsi1dna_2k3udsafj',
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
              <View style={{ marginVertical: 20 }}>
                <Text>Class: {item.name}</Text>
                <Text>Taught by {item.teacher}</Text>
              </View>
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
