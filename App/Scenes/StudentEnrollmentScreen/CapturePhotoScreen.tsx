import React from 'react'
import Text from 'App/Components/Text'
import { RNCamera, FaceDetector } from 'react-native-camera'
import StyleSheet from 'App/Util/Stylesheet'
import { View, TouchableOpacity } from 'react-native'
import RNFS from 'react-native-fs'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamList } from 'App/NavigationRouter'

interface ICapturePhotoScreenProps {
  navigation: StackNavigationProp<ParamList, 'CapturePhoto'>
  route: any
}

const styles = StyleSheet.create({})

const TakeAttendanceScreen: React.FC<ICapturePhotoScreenProps> = ({ navigation, route }) => {
  const camera = React.useRef<RNCamera>(null)
  const takePicture = React.useCallback(async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.current.takePictureAsync(options)
      const rawURI = data.uri.substring(7)
      const base64 = await RNFS.readFile(rawURI, 'base64')
      navigation.goBack()
      route.params.onPhotoSelected && route.params.onPhotoSelected(base64)
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
