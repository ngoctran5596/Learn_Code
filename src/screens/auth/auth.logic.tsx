import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { $axios } from '@api';
import { styles } from './style';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ButtonLoginLogup, ModalCustom } from '@components';
import { Colors, USER } from '@assets';
import { socket } from '@screens';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, coursesActions, postActions } from '../../shared-store/redux';
import { useNavigation } from '@react-navigation/native';

export const authlogic = (props: any) => {
  const messageChekEmail = useSelector((state: any) => state.auth.message);
  const userStore = useSelector((state: any) => state.auth.isLoading);
  const userApp = useSelector((state: any) => state.auth.user.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [isloading, setIsloading] = useState('login');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorName, setErrorName] = useState('');
  const [isTutor, setIsTutor] = useState('0');
  const [screen, setScreen] = useState(0);
  const [alerModal, setAlerModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [butomsheet, setButomsheet] = useState([0, 0, 0]);
  const dispatch = useDispatch();

  let bottomSheetRef = React.createRef<BottomSheet>();
  let fall = new Animated.Value(0);

  const [color, setColor] = useState({
    login: 'white',
    register: Colors.PURPLE,
  });
  const [TextTutor, setTextTutor] = useState('Bạn Là ai...?');
  const sheetRef = useRef(null);

  const setStringValue = (value: any) => {
    setButomsheet([450, 300, 0]);
    return bottomSheetRef?.current?.snapTo(0);
  };
  const ScreenMain = (value: any) => {
    setScreen(0);
    setScreen(1);
  };
  const submitLogin = () => {
    const user = {
      email,
      password,
    };
    const promise = new Promise(function (resolve, reject) {
      dispatch(userActions.login(user));
      resolve(
        true
      )
    });
    promise.then(function (data) {
      console.log('ĐAAAAAATA', data);
      dispatch(coursesActions.getCourseByUserId(userApp.id))
      dispatch(coursesActions.getAllCourses(''));
      dispatch(postActions.getAllPost(''));
    })

  };

  const selectIsToutor = (value: any) => {
    if (value === 'Người học') {
      setButomsheet([0, 0, 0]);
      setTextTutor('Người học');
      return setIsTutor('0');
    } else if (value === 'Người dạy') {
      setScreen(1);
      setIsTutor('1');
    } else {
      setButomsheet([0, 0, 0]);
      setScreen(0);
      setTextTutor('Người dạy');
      return setIsTutor('1');
    }
  };



  const submitRegister = () => {

    if (isTutor === '0') {

    } else {
      if (point < 9) {
        setTitle('Bạn chưa hoàn thành bài test');
        return setAlerModal(true);
      }

    }
    console.log('isTutor', isTutor);
    const user = {
      name,
      email,
      password,
      isTutor: isTutor === '0' ? false : true,
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
        setColor({ login: 'white', register: Colors.PURPLE });
        setTitle(`Bạn hãy xác nhận email ${res?.payload?.email} là của bạn,để hoàn tất đăng ký! \n Nếu không nhận được email có nghĩa bạn đã là thành viên! \n Hãy đăng nhập nhé!`);
        setAlerModal(true);

      });
    }
  };

  const selectScreen = (screen: any) => {
    if (screen === 'login') {
      setIsloading(screen);
      return setColor({ login: 'white', register: Colors.PURPLE });
    }
    if (screen === 'register') {
      setIsloading(screen);
      return setColor({ login: Colors.PURPLE, register: 'white' });
    }
  };

  useEffect(() => {
    checkLogin();
  }, [userStore]);

  const check = () => {
    if (messageChekEmail?.msg) {
      return (
        <ModalCustom title="Hoàn tất đăng ký">
          <Text>Bạn hãy truy cập email của mình và xác nhận đăng ký!
            Cảm ơn!
          </Text>
        </ModalCustom>
      )
    }
    return false;
  };
  const checkLogin = () => {
    if (userStore) {
      dispatch(coursesActions.getCourseByUserId(userApp.id))
      dispatch(coursesActions.getAllCourses(''));
      dispatch(postActions.getAllPost(''));
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
    alerModal, setAlerModal,
    ScreenMain, title
  };
};
