import React from 'react';
import {
  createNativeStackNavigator,
  
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../Screens/Authscreens/SignInWelcomeScreen';
import SignInScreen from '../Screens/Authscreens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';

const Auth = createNativeStackNavigator();

const authNavigators = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="SignInWelcomeScreen"
      component={SignInWelcomeScreen}
      options={{
        headerShown: false,
      
      }}
    />
    <Auth.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{headerShown: false}}
    />
    <Auth.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </Auth.Navigator>
);

export default authNavigators;
