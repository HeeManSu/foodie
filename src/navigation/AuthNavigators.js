import React from 'react';
import {
  createNativeStackNavigator,

} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../Screens/Authscreens/SignInWelcomeScreen';
import SignInScreen from '../Screens/Authscreens/SignInScreen';
import ClientTabs from './ClientTabs';
import RestaurantMapScreen from '../Screens/RestaurantMapScreen';

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
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="ClientTabs"
      component={ClientTabs}
      options={{ headerShown: false }}
    />
    <Auth.Screen
      name="RestaurantMapScreen"
      component={RestaurantMapScreen}
      options={{ headerShown: false }}
    />
  </Auth.Navigator>
);

export default authNavigators;
