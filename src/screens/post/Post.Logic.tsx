import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
// import { $axios } from '@api';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { Alert, Platform } from 'react-native';
import { coursesActions, postActions } from '../../shared-store/redux';
// import {userSelectorApp } from '@screens';

const createFormData = (photo: any, body: any = {}) => {
    const data = new FormData();
    data.append('imagePost', {
        name: photo[0].fileName,
        type: photo[0].type,
        uri: Platform.OS === 'ios' ? photo[0].uri.replace('file://', '') : photo[0].uri,
    });
    Object.keys(body).forEach((key: any) => {
        data.append(key, body[key]);
    });

    return data;
};


export const PostLogic = (props: any) => {

    const dispatch = useDispatch();
    const dataCourses = useSelector((state: any) => state?.courses?.coursesById);
    const userSelectorApp = useSelector((state: any) => state?.auth?.user?.user);
    const [posts, setPosts] = React.useState('');
    const [loadCamera, setLoadCamera] = React.useState(false);
    const [conten, setConten] = React.useState('');
    const [dataLocal, setDataLocal] = React.useState('');
    const [image, setImage] = React.useState();
    const [photo, setPhoto] = React.useState(null);
    const getTokent = useSelector((state: any) => state?.auth.user.user.id);
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const pickerRef = React.useRef();

    const takePicture = async function (camera: any) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data);
        setImage(data);
        setLoadCamera(false);
    };


    React.useEffect(() => {
        dispatch(coursesActions.getCourseByUserId(userSelectorApp.id))
    }, [])



    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response: any) => {
            console.log("response", response);
            if (response) {
                setPhoto(response.assets);
            }
        });
    };

    const distPatchPost = async (id: any, descrip: any) => {

        if(!id || !descrip || !selectedLanguage){
            return Alert.alert('Đừng để trống bạn ơi');
        }

        if (photo) {
            const data = createFormData(photo, { userId: id, description: descrip });
            fetch(`http://192.168.43.215:3000/postImage`, {
                method: 'POST',
                body: createFormData(photo, { userId: id, description: descrip ,typeClassId:selectedLanguage}),
            })
                .then((response) => response.json())
                .then((response) => {
                    dispatch(postActions.getAllPost(''));
                    props.navigation.navigate('MyHome');
                    console.log('response', response);
                })
                .catch((error) => {
                    console.log('error', error);
                });
        } else {

            const formData = new FormData();
            formData.append('userId', id);
            formData.append('description', descrip);
            formData.append('typeClassId', selectedLanguage);

            const response = await axios({
                method: 'post',
                url: 'http://192.168.43.215:3000/postImage',
                data: formData
            });

            if (response) {
                dispatch(postActions.getAllPost(''));
                props.navigation.navigate('MyHome');
            } else {
                Alert.alert('Lỗi bài đăng');
                props.navigation.navigate('MyHome');
            }

          
        }

    };


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
    const onPress = () => {
        props.navigation.goBack()
    };

    const onPressSetting = () => {
        props.navigation.navigate('Setting');
    };
    const cameraLoad = () => {
        setLoadCamera(false);
    };

    return {
        // uploadProfileImage,dataCourses
        dataCourses,
        setLoadCamera, cameraLoad, handleChoosePhoto, photo,
        takePicture, image,pickerRef,selectedLanguage, setSelectedLanguage,
        dataLocal, onPress, getTokent, getData, onPressSetting, posts, distPatchPost, setConten, conten, loadCamera
    }
}



