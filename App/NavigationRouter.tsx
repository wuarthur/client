import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'App/Scenes/HomeScreen'
import StudentAttendanceScreen from 'App/Scenes/StudentAttendanceScreen'
import StudentEnrollmentScreen from 'App/Scenes/StudentEnrollmentScreen'
import TakeAttendanceScreen from 'App/Scenes/TakeAttendanceScreen'

import Text from 'App/Components/Text'

import { View } from 'react-native'

interface INavigationRouterProps {}

export type ParamList = {
  Home: undefined
  Attendance: undefined
  Enrollment: undefined
  TakeAttendance: undefined
}

const Stack = createStackNavigator<ParamList>()

const NavigationRouter: React.FC<INavigationRouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Attendance" component={StudentAttendanceScreen} />
        <Stack.Screen name="Enrollment" component={StudentEnrollmentScreen} />
        <Stack.Screen name="TakeAttendance" component={TakeAttendanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
