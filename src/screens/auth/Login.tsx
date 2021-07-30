import { BACKGROUND, USER } from '@assets';
import { ButtonCustom, ButtonLoginLogup } from '@components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { $axios } from '@api';
import { styles } from './style';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { authlogic } from './auth.logic';
import { check } from 'react-native-permissions';

export const Login = (props: any) => {
  const {
    email,
    onPress,
    name,
    screen,
    setScreen,
    password,
    selectScreen,
    setStringValue,
    submitLogin,
    color,
    setName,
    setEmail,
    setPassword,
    submitRegister,
    selectIsToutor,
    isTutor,
    isloading,
    setIsTutor,
    butomsheet,
    bottomSheetRef,
    fall,
    TextTutor,
    errorEmail,
    errorName,
    errorPass,
  } = props;

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text style={{ ...styles.text, fontSize: 15, color: 'black' }}>
        Kéo xuống để đóng...
      </Text>
      <ButtonLoginLogup
        text="Người học"
        icon={USER}
        onPress={() => selectIsToutor('Người học')}
      />
      <ButtonLoginLogup
        text="Người dạy"
        icon={USER}
        onPress={() => selectIsToutor('Người dạy')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUND} style={styles.image}>
        <Text style={styles.text}>Welcome</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={{
              ...styles.center,
              backgroundColor: color.login,
              borderTopStartRadius: 20,
            }}
            onPress={() => selectScreen('login')}>
            <Text style={{ ...styles.text, fontSize: 20, color: 'black' }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.center,
              backgroundColor: color.register,
              borderTopEndRadius: 20,
            }}
            onPress={() => {
              check;
              selectScreen('register');
            }}>
            <Text style={{ ...styles.text, fontSize: 20, color: 'black' }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            padding: 10,
            opacity: 0.8,
            borderWidth: 0.1,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          {!(isloading === 'register') ? null : (
            <View>
              <TextInput
                autoCompleteType="name"
                placeholder="Name"
                value={name}
                style={styles.input}
                onChangeText={(text: any) => setName(text)}
              />
              <Text style={{color:'red'}}>
                {errorName ? errorName : null}
              </Text>
            </View>
          )}
          <View>
            <TextInput
              autoCompleteType="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text: any) => setEmail(text)}
            />

            <Text style={{color:'red'}}>{errorEmail ? errorEmail : null}</Text>
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text: any) => setPassword(text)}
            />

            <Text style={{color:'red'}}>{errorPass ? errorPass : null}</Text>
          </View>

          {!(isloading === 'register') ? null : (
            <ButtonLoginLogup
              text={TextTutor}
              icon={USER}
              onPress={setStringValue}
            />
          )}

          <ButtonCustom
            text={isloading === 'login' ? 'Login' : 'Register'}
            onPress={isloading === 'login' ? submitLogin : submitRegister}
          />
        </View>
      </ImageBackground>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={butomsheet}
        callbackNode={fall}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={0}
      />
    </View>
  );
};
