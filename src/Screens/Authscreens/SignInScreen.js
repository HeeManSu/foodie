import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../../Components/Header';
import {colors, parameters, title} from '../../Global/Styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import ClientTabs from '../../navigation/ClientTabs';

const SignInScreen = ({navigation}) => {
  const [TextInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View
            animation={TextInput2Focused ? '' : 'fadeInLeft'}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="Material"
            />
          </Animatable.View>

          <TextInput
            placeholder="Password"
            style={{width: '80%'}}
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />

          <Animatable.View
            animation={TextInput2Focused ? '' : 'fadeInLeft'}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3}}
              type="MaterialCommunityIcons"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress ={() => {
            navigation.navigate('ClientTabs')
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          onPress={() => {}}
        />
      </View>
       <View style={{ marginTop: 25, marginLeft: 25}}>
        <Text style={{...styles.text1}}>
          New on Foodie ?
        </Text>
        </View>
        <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
          <Button
          title='Create an account'
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          
          />
        </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: colors.grey3,
    fontSize: 16,
  },

  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {

    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  }
});
