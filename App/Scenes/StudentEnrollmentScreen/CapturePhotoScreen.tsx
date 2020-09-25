import React from 'react'
import Text from 'App/Components/Text'
import { RNCamera, FaceDetector } from 'react-native-camera'
import StyleSheet from 'App/Util/Stylesheet'
import { View, TouchableOpacity } from 'react-native'

interface ICapturePhotoScreenProps {}

const styles = StyleSheet.create({})

const TakeAttendanceScreen: React.FC<ICapturePhotoScreenProps> = () => {
  const camera = React.useRef<RNCamera>(null)
  const takePicture = React.useCallback(async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.current.takePictureAsync(options)
    }
  }, [])

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.container}
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
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={{ paddingVertical: 10 }}>
          <Text style={{ fontSize: 30 }}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TakeAttendanceScreen
