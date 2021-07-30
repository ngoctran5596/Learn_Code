import {BACKGROUND, USER} from '@assets';
import {ButtonCustom, ButtonLoginLogup} from '@components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {$axios} from '@api';
import {styles} from './style';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Login} from '@screens';
import {authlogic} from './auth.logic';
import {Questions} from './Questions';

export const LoginView = (props: any) => {
  const {
    email,
    screen,
    setScreen,
    password,
    selectScreen,
    setStringValue,
    submitLogin,
    color,
    setEmail,
    setPassword,setName,
    submitRegister,
    selectIsToutor,
    isTutor,name,
    isloading,
    setIsTutor,check,
    butomsheet,
    bottomSheetRef,
    fall,
    point,setPoint,TextTutor,setTextTutor,errorEmail,errorName,errorPass
  } = authlogic(props);

  const renderFrame = () => {
    switch (screen) {
      case 0:
        return (
          <Login
            email={email}
            screen={screen}
            setScreen={setScreen}
            password={password}
            selectScreen={selectScreen}
            setStringValue={setStringValue}
            submitLogin={submitLogin}
            color={color}
            setEmail={setEmail}
            setPassword={setPassword}
            submitRegister={submitRegister}
            selectIsToutor={selectIsToutor}
            isTutor={isTutor}
            isloading={isloading}
            setIsTutor={setIsTutor}
            butomsheet={butomsheet}
            bottomSheetRef={bottomSheetRef}
            fall={fall}
            onPress={() => setScreen(1)}
            TextTutor={TextTutor}
            setTextTutor={setTextTutor}
            setName={setName}
            check={check}
            name={name}
            errorEmail={errorEmail}
            errorName={errorName}
            errorPass={errorPass}
          />
        );
      case 1:
        return <Questions point={point} setPoint={setPoint} selectIsToutor={selectIsToutor} TextTutor={TextTutor} setTextTutor={setTextTutor} />;
      default:
        return;
    }
  };
  return <View style={styles.container}>{renderFrame()}</View>;
};
