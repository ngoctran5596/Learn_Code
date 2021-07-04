import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesActions, } from '../../shared-store/redux';

export const CoursesLogic = (props: any) => {
  const dispatch = useDispatch();
  const id = props.route.params;
  const course = useSelector((state: any) =>state?.courses?.coursesDetail);
  const [screen, setScreen] = React.useState(0);

  React.useEffect(() => {
    dispatch(coursesActions.getCoursesDetail(id));
  }, []);

  const setMyScreen =()=>{
    props.navigation.goBack();
  }


  console.log('dataLocal,dataLocal', props.route.params);
  return {
     screen, setScreen,
     course,setMyScreen
  };
};
