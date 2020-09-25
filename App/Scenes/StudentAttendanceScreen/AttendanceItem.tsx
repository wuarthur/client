import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import Text from 'App/Components/Text'

interface IAttendanceItemProps {}

const AttendanceItem: React.FC<IAttendanceItemProps> = () => {
  return (
    <View style={styles.attendanceItem}>
      <View style={styles.studentId}>
        <Text>Student ID</Text>
      </View>
      <View style={styles.studentItemCell}>Student Name</View>
      <View style={styles.studentItemCell}></View>
      <View style={styles.studentItemCell}>Attendance</View>
    </View>
  )
}

export default AttendanceItem
