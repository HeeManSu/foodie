import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Auth from './AuthNavigators';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default RootNavigator;
