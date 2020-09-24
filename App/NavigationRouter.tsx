import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from 'App/Scenes/Login'

import Text from 'App/Components/Text'

interface INavigationRouterProps {}

const Stack = createStackNavigator()

const Test = () => <Text>hehe</Text>

const NavigationRouter: React.FC<INavigationRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
