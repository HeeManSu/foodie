import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../Global/Styles';

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15}}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardBackground}
          size={32}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardBackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Foodie
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={25}
          color={colors.cardBackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.button,
    height: parameters.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
