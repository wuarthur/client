import React from 'react'
import Modal from 'react-native-modal'
import StyleSheet from 'App/Util/Stylesheet'
import { Button, Dimensions, View, Image } from 'react-native'
import Text from 'App/Components/Text'
import { TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'
import * as api from 'App/api/DataAction'
import { ClassId, ClassName } from 'App/api/data'

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
  const [selectedClasses, setSelectedClasses] = React.useState<Record<string, ClassName>>({})
  const [name, setName] = React.useState('')
  const [photo, setPhoto] = React.useState('')
  const onSubmit = React.useCallback(async () => {
    try {
      const response = await api.addStudent(
        name,
        // @ts-ignore
        Object.keys(selectedClasses).filter((selectedClass) => selectedClass) as ClassId[],
        photo,
      )
      console.log('Add student response:', response)
    } catch (err) {
      console.log('Add student error:', err, err.response)
    }
  }, [name, photo, selectedClasses])
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
  const onPhotoSelected = React.useCallback((base64: string) => {
    setPhoto(base64)
  }, [])

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>Enroll Student</Text>
        <View style={styles.contentMain}>
          <View style={styles.contentLeft}>
            <View style={{ height: 200, justifyContent: 'center' }}>
              {!!photo && (
                <Image
                  style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                  source={{ uri: photo }}
                />
              )}
              <Button
                onPress={() =>
                  navigation.push('CapturePhoto', {
                    onPhotoSelected,
                  })
                }
                title="Press to enter camera"
              />
            </View>
          </View>
          <View style={styles.contentRight}>
            <TextInput
              value={name}
              onChangeText={onChangeName}
              style={styles.input}
              placeholder="Name"
            />
            {Object.keys(ClassName).map((classId) => {
              const selected = !!selectedClasses[ClassName[classId]]
              return (
                <View style={{ opacity: selected ? 1 : 0.5, marginBottom: 10 }} key={classId}>
                  <Button
                    title={ClassName[classId]}
                    onPress={() =>
                      setSelectedClasses((prev) => ({
                        ...prev,
                        [ClassName[classId]]: !selected,
                      }))
                    }
                  />
                </View>
              )
            })}
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
