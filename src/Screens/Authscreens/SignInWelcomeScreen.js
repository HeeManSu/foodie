import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors, parameters} from '../../Global/Styles';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';

const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text style={{fontSize: 26, color: colors.button, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.button, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri:
                  'https://reffen.dk/wp-content/uploads/2019/04/Everest2-1.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri:
                  'https://cdn0.hitched.co.uk/articles/images/1/2/8/7/img_67821/wedding-food-hog-roast.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri:
                  'https://magazine.keycaribe.com/wp-content/uploads/2019/05/caribbean-food-food-island-food-298142.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{
                uri:
                  'https://indiachronicles.com/wp-content/uploads/2020/05/naga-food-delhi.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 30}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress = {() => {
              navigation.navigate('SignInScreen')
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
  },

    createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.button,
  },

  createButtonTitle: {

    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  }
});
