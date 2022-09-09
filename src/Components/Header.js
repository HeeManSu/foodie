import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors, parameters } from '../Global/Styles'
import { Icon } from 'react-native-elements'

const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
        <View style = {{marginLeft: 20}}>
           <Icon
           type= 'material-community'
           name={type}
           color= {colors.headerText}
           size={28}
           onPress={() => {
            navigation.goBack()
           }}
           />
        </View>
        <View>
            <Text style = {styles.headerText}>
                {title}
            </Text>
           </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.button,
        height: parameters.headerHeight
    },

    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
    }
})