import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesActions, postActions } from '../../shared-store/redux';

export const HomeLogic = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user.user);
  const dataCourses = useSelector((state: any) => state?.courses.allCourse);
  const dataPost = useSelector((state: any) => state?.post.post);
  const [screen, setScreen] = React.useState(0);

  const onPress = (id:any) => {
    props.navigation.navigate('CourseDetail',{id});
  };
  const onPressProfile = () => {
    props.navigation.navigate('Profile',{user:user});
  };
  const onPressPostNews = () => {
    props.navigation.navigate('PostNews');
  };

  React.useEffect(() => {
    dispatch(coursesActions.getAllCourses(''));
    dispatch(postActions.getAllPost(''));
  }, []);

  const dispatchCourseDetail = (valueID: any) => {
    dispatch(coursesActions.getCoursesDetail(valueID))
  };

  const setMyScreen = (screen: any) => {
    setScreen(screen)
  };

  console.log('dataLocal,dataLocal', user, dataCourses);
  return {
     screen, setScreen,
    user,
    onPress,
    onPressProfile,
    onPressPostNews,
    dataCourses, dataPost,
    dispatchCourseDetail,
    setMyScreen
  };
};
