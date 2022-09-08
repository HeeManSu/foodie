import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import SignInScreen from './src/Screens/Authscreens/SignInScreen'
import {colors} from './src/Global/Styles'
import SignInWelcomeScreen from './src/Screens/Authscreens/SignInWelcomeScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusBar}
      />
      <SignInWelcomeScreen />
      
    </View>
  )
}

export default App


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
})
