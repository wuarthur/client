import React from 'react'
import Text from 'App/Components/Text'
import styles from './styles'
import { Image, View } from 'react-native'

interface IStudentEnrollmentItemProps {}

const StudentEnrollmentItem: React.FC<IStudentEnrollmentItemProps> = () => {
  return (
    <View style={styles.studentEnrollmentItem}>
      <View style={styles.enrollmentItemLeft}>
        <Text>12345</Text>
      </View>
      <View style={styles.enrollmentItemCenter}>
        <Text>Mark Fatfuck</Text>
      </View>
      <View style={styles.enrollmentItemRight}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={{
            uri:
              'https://static.wikia.nocookie.net/rsplayers/images/0/00/Mark_Ogilvie.png/revision/latest?cb=20121017173842',
          }}
        />
      </View>
    </View>
  )
}

export default StudentEnrollmentItem
