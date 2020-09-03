import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from 'Scenes/Login'

interface INavigationRouterProps {}

const Stack = createStackNavigator()

const NavigationRouter: React.FC<INavigationRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
