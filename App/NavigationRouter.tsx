import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'App/Scenes/HomeScreen'

import Text from 'App/Components/Text'

import { View } from 'react-native'

interface INavigationRouterProps {}

const Stack = createStackNavigator()

const NavigationRouter: React.FC<INavigationRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Student Enrollment" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
