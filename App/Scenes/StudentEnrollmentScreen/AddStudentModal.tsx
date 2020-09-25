import React from 'react'
import Modal from 'react-native-modal'
import StyleSheet from 'App/Util/Stylesheet'
import { Button, View } from 'react-native'
import Text from 'App/Components/Text'
import { TextInput } from 'react-native'

const styles = StyleSheet.create({
  container: {
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

interface IAddStudentModalProps {
  visible: boolean
  onClose: () => void
}

const AddStudentModal: React.FC<IAddStudentModalProps> = ({ visible, onClose }) => {
  const [studentId, setStudentId] = React.useState('')
  const [name, setName] = React.useState('')
  React.useEffect(() => {
    if (visible) {
      setStudentId('')
      setName('')
    }
  }, [visible])
  const onSubmit = React.useCallback(() => {}, [])
  const onChangeStudentId = React.useCallback((text: string) => {
    setStudentId(text)
  }, [])
  const onChangeName = React.useCallback((text: string) => {
    setName(text)
  }, [])
  const onEnterCamera = React.useCallback(() => {}, [])

  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>Enroll Student</Text>
        <View style={styles.contentMain}>
          <View style={styles.contentLeft}>
            <Button onPress={onEnterCamera} title="Press to enter camera" />
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
        <Button onPress={onSubmit} title="Submit" />
        <Button onPress={onClose} title="Close" />
      </View>
    </Modal>
  )
}

export default AddStudentModal
