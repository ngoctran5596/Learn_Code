import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { $axios } from '@api';
import { styles } from './style';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ButtonLoginLogup } from '@components';
import { USER } from '@assets';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../shared-store/redux/auth';
import { NavigationContainer } from '@react-navigation/native';
export const authlogic = (props: any) => {
  const messageChekEmail = useSelector((state: any) => state.auth.message);
  const userStore = useSelector((state: any) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isloading, setIsloading] = useState('login');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorName, setErrorName] = useState('');
  const [isTutor, setIsTutor] = useState('0');
  const [screen, setScreen] = useState(0);
  const [point, setPoint] = useState(0);
  const [butomsheet, setButomsheet] = useState([0, 0, 0]);
  const dispatch = useDispatch();

  let bottomSheetRef = React.createRef<BottomSheet>();
  let fall = new Animated.Value(0);

  const [color, setColor] = useState({
    login: '#66CCCC',
    register: 'white',
  });
  const [TextTutor, setTextTutor] = useState('Bạn Là ai...?');
  const sheetRef = React.useRef(null);

  const setStringValue = (value: any) => {
    setButomsheet([450, 300, 0]);
    return bottomSheetRef?.current?.snapTo(0);
  };
  const submitLogin = async () => {
    const user = {
      email,
      password,
    };
    await dispatch(userActions.login(user));
  };

  const selectIsToutor = (value: any) => {
    if (value === 'Người học') {
      setButomsheet([0, 0, 0]);
      setTextTutor('Người học');
      return setIsTutor('0');
    } else if (value === 'Người dạy') {
      setScreen(1);
    } else {
      setButomsheet([0, 0, 0]);
      setScreen(0);
      setTextTutor('Người dạy');
      return setIsTutor('1');
    }
  };

  const submitRegister = () => {
    const user = {
      name,
      email,
      password,
      isTutor,
    };
    if (name == null || name == '' || name.length <= 4) {
      return setErrorName('Name không để trống,phải 5 ký tự!');
    } else if (email == null || email == '') {
      setErrorName('');
      return setErrorEmail('Email phải đúng định dạng!');
    } else if (password == null || password == '' || password.length <= 7) {
      setErrorEmail('');
      return setErrorPass('Pass không để trống và từ 8 ký tự trở lên!');
    } else {
      setErrorPass('');
      new Promise(resolve => {
        resolve(dispatch(userActions.register(user)));
      }).then((res: any) => {
        setIsloading('login');
        setColor({ login: '#66CCCC', register: 'white' });
        Alert.alert(
          'Xác nhận mail!',
          `Bạn hãy xác nhận email ${res?.payload?.email} là của bạn,để hoàn tất đăng ký!`,
        );
      });
    }
  };

  const selectScreen = (screen: any) => {
    if (screen === 'login') {
      setIsloading(screen);
      return setColor({ login: '#66CCCC', register: 'white' });
    }
    if (screen === 'register') {
      setIsloading(screen);
      return setColor({ login: 'white', register: '#FF99FF' });
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, [userStore]);

  const check = () => {
    if (messageChekEmail?.msg) {
      return Alert.alert(
        'Xác nhận mail!',
        'Bạn hãy xác nhận mail để hoàn tất đăng ký!',
      );
    }
    return false;
  };
  const checkLogin = () => {
    if (userStore) {
      return props.navigation.replace('MyHome');
    } else {
      return;
    }
  };

  return {
    email,
    password,
    setStringValue,
    submitLogin,
    selectScreen,
    isloading,
    color,
    isTutor,
    butomsheet,
    fall,
    screen,
    setScreen,
    bottomSheetRef,
    setEmail,
    setPassword,
    setIsTutor,
    submitRegister,
    selectIsToutor,
    name,
    point,
    setPoint,
    TextTutor,
    setTextTutor,
    setName,
    check,
    errorEmail,
    errorName,
    errorPass,
  };
};
