import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { userSelectorApp } from '@screens';
import { coursesActions } from '../../shared-store/redux';

export const CoursesLogic = (props: any) => {
  const dispatch = useDispatch();
  const userSelectorApp = useSelector((state: any) => state?.auth?.user?.user);

  const id = props.route.params.id;
  const name = props.route.params.name;
  const course = useSelector((state: any) => state?.courses?.coursesDetail);
  const [screen, setScreen] = React.useState(0);
  // const joined = course?.indexOf(item.any=>item.studentId?.indexOf(userSelectorApp?.id))
  // console.log(joined);
  React.useEffect(() => {
    dispatch(coursesActions.getCoursesDetail(id));
  }, []);
  const detailFC = (value:any,title:any) => { 
    props.navigation.navigate('documentApp',{id:value,title})
  }
  const onAddStudent = async (idCourse: any) => {
    const promise = new Promise(function (resolve, reject) {
      dispatch(coursesActions.addStudent({ id: idCourse, userId: userSelectorApp?.id }));
      setTimeout(() => {
        resolve(true);
      }, 2000)

    })
    promise.then(data => dispatch(coursesActions.getCoursesDetail(id)));



  }
  const setMyScreen = () => {
    props.navigation.goBack();
  }

  return {
    screen, setScreen, name,
    course, setMyScreen, onAddStudent, userSelectorApp, detailFC
  };
};
