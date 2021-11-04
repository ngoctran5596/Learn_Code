import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesActions } from '../../shared-store/redux';

export const WebviewLogic = (props: any) => {
  const dispatch = useDispatch();
  const url =props.route.params.url;

  const onPress = () => {
    props.navigation.navigate('Home');
};

  return {
    onPress,
    url
  };
};
