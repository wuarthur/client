import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import Text from 'App/Components/Text'

interface IAttendanceItemProps {
  student: any
}

const AttendanceItem: React.FC<IAttendanceItemProps> = ({ student }) => {
  return (
    <View style={styles.attendanceItem}>
      <View style={styles.studentId}>
        <Text>{student.id}</Text>
      </View>
      <View style={styles.studentItemCell}>
        <Text>{student.name}</Text>
      </View>
      <View style={styles.studentItemCell}>
        <Text>{student.faceset_token}</Text>
      </View>
      <View style={styles.studentItemCell}>
        <Text>{student.attendance ? 'Attending' : 'Absent'}</Text>
      </View>
    </View>
  )
}

export default AttendanceItem
