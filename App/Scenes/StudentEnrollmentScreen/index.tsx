import React from 'react'
import Text from 'App/Components/Text'
import { Button, View } from 'react-native'
import styles from './styles'
import StudentEnrollmentItem from './StudentEnrollmentItem'
import Modal from 'react-native-modal'
import AddStudentModal from './AddStudentModal'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'
import * as DataAction from 'App/api/DataAction'
import { ClassName } from '../../api/data'
import * as FaceIdentification from '../../api/FaceIdentification'

interface IStudentEnrollmentScreenProps {
  navigation: StackNavigationProp<ParamList, 'Enrollment'>
}

const StudentEnrollmentScreen: React.FC<IStudentEnrollmentScreenProps> = ({ navigation }) => {
  const onAddStudents = React.useCallback(() => {
    navigation.push('AddStudent')
    // How to call API functions:
    // DataAction.getStudents()
    // DataAction.addStudent("Mark Obesity", [ClassName.CHINESE, ClassName.ENGLISH], "base 64 face token")
    // FaceIdentification.getMostIdeniticalStudent("base 64 face token");
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Student Enrollment</Text>
        <Button style={styles.text} title="Add Students" onPress={onAddStudents} />
      </View>
      <View style={[styles.container, styles.wrapperPadding]}>
        <View style={styles.studentEnrollmentItem}>
          <View style={styles.enrollmentItemLeft}>
            <Text style={styles.text}>ID</Text>
          </View>
          <View style={styles.enrollmentItemCenter}>
            <Text style={styles.text}>Name</Text>
          </View>
          <View style={styles.text}></View>
        </View>
        <StudentEnrollmentItem
          name={'Mark Fatfuck'}
          index={123234}
          uri={
            'https://static.wikia.nocookie.net/rsplayers/images/0/00/Mark_Ogilvie.png/revision/latest?cb=20121017173842'
          }
        />
        <StudentEnrollmentItem
          name={'Mark Donalds'}
          index={435454}
          uri={'https://i.redd.it/sco9pobbg9k11.jpg'}
        />
        <StudentEnrollmentItem
          name={'Spin Merchant'}
          index={123}
          uri={'https://pbs.twimg.com/media/Bnokn56IIAAWaBN?format=png&name=360x360'}
        />
      </View>
    </View>
  )
}

export default StudentEnrollmentScreen
