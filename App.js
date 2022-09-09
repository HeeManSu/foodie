import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {colors} from './src/Global/Styles'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => (
  <View style={styles.container}>
    <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusBar} />
    <RootNavigator />

  </View>
)

export default App


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
})
