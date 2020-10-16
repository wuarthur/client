import React from 'react'
import Text from 'App/Components/Text'
import styles from './styles'
import { Image, View } from 'react-native'

interface IStudentEnrollmentItemProps { 
  index: number,
  name: string,
  uri: string
}

const StudentEnrollmentItem: React.FC<IStudentEnrollmentItemProps> = ({index, name, uri}) => {
  return (
    <View style={styles.studentEnrollmentItem}>
      <View style={styles.enrollmentItemLeft}>
        <Text style={styles.text}>{index}</Text>
      </View>
      <View style={styles.enrollmentItemCenter}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.enrollmentItemRight}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={{
            uri: uri
          }}
        />
      </View>
    </View>
  )
}

export default StudentEnrollmentItem
