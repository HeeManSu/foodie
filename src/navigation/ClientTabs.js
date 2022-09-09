import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import HomeSreen from '../Screens/HomeScreen'
import { colors } from '../Global/Styles'
import SearchScreen from '../Screens/SearchScreen'
import MyOrderScreen from '../Screens/MyOrderScreen'
import MyAccountScreen from '../Screens/MyAccountScreen'

const BottomTabs = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        activeTintcolor: colors.button
      }}
    >

      <BottomTabs.Screen
        name='HomeScreen'
        component={HomeSreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='home'
              type='material'
              color={color}
              size={size}
            />
          )
        }}
      />

      <BottomTabs.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='Search'
              type='material'
              color={color}
              size={size}
            />
          )
        }}
      />

      <BottomTabs.Screen
        name='MyOrderScreen'
        component={MyOrderScreen}
        options={{
          tabBarLabel: 'My Orders',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='view-list'
              type='material'
              color={color}
              size={size}
            />
          )
        }}
      />

      <BottomTabs.Screen
        name='MyAccountScreen'
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='person'
              type='material'
              color={color}
              size={size}
            />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default ClientTabs