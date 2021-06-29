import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/auth/action';
import { coursesActions } from '../../redux/courses/actionCourses';
import { postActions } from '../../redux/post/actionPost';


export const HomeLogic = (props: any) => {
    const dispatch = useDispatch();
    const [dataLocal, setDataLocal] = React.useState()
    const Logout = async () => {
        try {
            await AsyncStorage.removeItem('USER')
            await AsyncStorage.removeItem('ACCESS-Token')
        } catch (e) {
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

    const distpatchCourses = () => dispatch(coursesActions.getAllCourses(''));


    const onPress = () => {
        props.navigation.navigate('CourseDetail')
    };
    const onPressProfile = () => {
        props.navigation.navigate('Profile')
    };
    const onPressPostNews = () => {
        props.navigation.navigate('PostNews')
    };

    const data = useSelector(
        (state: any) => state.coursesReducer.allCourse.payload,
    );
    const dataTest = useSelector(
        (state: any) => state.postsReducer.post.payload
    );


    const fetchBooks = () => dispatch(postActions.getAllPost(''));

    useEffect(() => {
        fetchBooks();
        distpatchCourses();
    }, []);

    console.log('dataLocal,dataLocal', dataTest,data);
    return {
        dataLocal, distpatchCourses, data, onPress, onPressProfile, Logout, onPressPostNews,dataTest
    }
}



