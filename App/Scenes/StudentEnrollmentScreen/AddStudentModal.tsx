import React from 'react'
import Modal from 'react-native-modal'
import StyleSheet from 'App/Util/Stylesheet'
import { Button, Dimensions, View } from 'react-native'
import Text from 'App/Components/Text'
import { TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'

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
  const camera = React.useRef<RNCamera>(null)
  const [studentId, setStudentId] = React.useState('')
  const [name, setName] = React.useState('')
  const [showCamera, setShowCamera] = React.useState(false)
  const [photo, setPhoto] = React.useState('')
  React.useEffect(() => {
    if (visible) {
      setStudentId('')
      setName('')
      setShowCamera(false)
    }
  }, [visible])
  const onSubmit = React.useCallback(() => {}, [])
  const onChangeStudentId = React.useCallback((text: string) => {
    setStudentId(text)
  }, [])
  const onChangeName = React.useCallback((text: string) => {
    setName(text)
  }, [])
  const onEnterCamera = React.useCallback(() => {
    setShowCamera(true)
  }, [])
  const onExitCamera = React.useCallback(() => {
    setShowCamera(false)
  }, [])
  const onSetPhoto = React.useCallback(async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.current.takePictureAsync(options)
      console.log(data.uri)
    }
  }, [])

  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        {showCamera ? (
          <>
            {/* <View style={styles.container}> */}
            <RNCamera
              ref={camera}
              style={{ maxHeight: Dimensions.get('screen').height / 2 }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              // onGoogleVisionBarcodesDetected={({ barcodes }) => {
              //   console.log(barcodes)
              // }}
            />
            <Button onPress={onSetPhoto} title="Submit" />
            {/* </View> */}
          </>
        ) : (
          <>
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
          </>
        )}
        <Button onPress={onClose} title="Close" />
      </View>
    </Modal>
  )
}

export default AddStudentModal
