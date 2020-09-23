import React from 'react'
import Text from 'App/Components/Text'
import { View } from 'react-native'
import * as styles from './styles'

interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Login</Text>
    </View>
  )
}

export default LoginScreen
