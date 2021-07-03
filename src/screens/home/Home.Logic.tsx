import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {coursesActions } from '../../shared-store/redux';

export const HomeLogic = (props: any) => {
  const dispatch = useDispatch();
  const [dataLocal, setDataLocal] = React.useState();

  const data = useSelector((state)=>{console.log('state',state);
return;})

  // const Logout = async () => {
  //   try {
  //     await AsyncStorage.removeItem('USER');
  //     await AsyncStorage.removeItem('ACCESS-Token');
  //   } catch (e) {
  //     // remove error
  //   }
    const coure =  AsyncStorage.getItem('courses');
  //   props.navigation.navigate('Login');
  // };
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('USER');
  //     if (value !== null) {
  //       setDataLocal(JSON.parse(value));
  //     } else {
  //       return;
  //     }
  //   } catch (e) {
  //     return;
  //   }
  // };
 
  // useEffect( () => {
  //   try {
  //      dispatch(coursesActions.getAllCourses(''));
  //   } catch (e) {
  //     return;
  //   }
  // }, [])

  const onPress = () => {
    props.navigation.navigate('CourseDetail');
  };
  const onPressProfile = () => {
    props.navigation.navigate('Profile');
  };
  const onPressPostNews = () => {
    props.navigation.navigate('PostNews');
  };

  console.log('dataLocal,dataLocal',coure );
  return {
    dataLocal,
    
    onPress,
    onPressProfile,
    // Logout,
    onPressPostNews,
  };
};
