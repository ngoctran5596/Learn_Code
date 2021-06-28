import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/auth/action';
import { coursesActions } from '../../redux/courses/actionCourses';


export const HomeLogic = (props: any) => {
    const dispatch = useDispatch();
    const [dataLocal, setDataLocal] = React.useState()
  const  Logout = async () => {
        try {
          await AsyncStorage.removeItem('USER')
          await AsyncStorage.removeItem('ACCESS-Token')
        } catch(e) {
          // remove error
        }
      
        props.navigation.navigate('Login')
      }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('USER')
            if (value !== null) {
                setDataLocal(JSON.parse(value));
            } else {
                return;
            }
        } catch (e) {
            return;
        }
    }

    const distpatchCourses = () => {
        const action = coursesActions.getAllCourses('');
        dispatch(action);
    };

    const onPress = () => {
        props.navigation.navigate('CourseDetail')
    };
    const onPressProfile = () => {
        props.navigation.navigate('Profile')
    };
    const onPressPostNews= () => {
        props.navigation.navigate('PostNews')
    };
    const dispatchHome = () => {
        useEffect(() => {
            getData();
            distpatchCourses();
        }, []);
    }


    const data = useSelector(
        (state: any) => state.CoursesReducer.allCourse.payload,
    );

    console.log('dataLocal,dataLocal', dataLocal);
    return {
        dataLocal, distpatchCourses, data, onPress, onPressProfile,dispatchHome,Logout,onPressPostNews
    }
}



