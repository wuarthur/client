import React from 'react'
import Modal from 'react-native-modal'
import StyleSheet from 'App/Util/Stylesheet'
import { Button, Dimensions, View } from 'react-native'
import Text from 'App/Components/Text'
import { TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentMain: {
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    fontSize: 20,
  },
  contentLeft: {
    flex: 1,
    paddingRight: 16,
  },
  contentRight: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
  },
})

interface IAddStudentScreenProps {
  navigation: StackNavigationProp<ParamList, 'Enrollment'>
}

const AddStudentScreen: React.FC<IAddStudentScreenProps> = ({ navigation }) => {
  const camera = React.useRef<RNCamera>(null)
  const [studentId, setStudentId] = React.useState('')
  const [name, setName] = React.useState('')
  const [photo, setPhoto] = React.useState('')
  const onSubmit = React.useCallback(() => {}, [])
  const onChangeStudentId = React.useCallback((text: string) => {
    setStudentId(text)
  }, [])
  const onChangeName = React.useCallback((text: string) => {
    setName(text)
  }, [])
  const onSetPhoto = React.useCallback(async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.current.takePictureAsync(options)
      setPhoto(data.uri)
    }
  }, [])

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>Enroll Student</Text>
        <View style={styles.contentMain}>
          <View style={styles.contentLeft}>
            <View style={{ height: 200, justifyContent: 'center' }}>
              <Button
                onPress={() => navigation.push('CapturePhoto')}
                title="Press to enter camera"
              />
            </View>
          </View>
          <View style={styles.contentRight}>
            <TextInput
              value={studentId}
              onChangeText={onChangeStudentId}
              style={styles.input}
              placeholder="Student ID"
            />
            <TextInput
              value={name}
              onChangeText={onChangeName}
              style={styles.input}
              placeholder="Name"
            />
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={onSubmit} title=" Submit " />
        </View>
      </>
    </View>
  )
}

export default AddStudentScreen
