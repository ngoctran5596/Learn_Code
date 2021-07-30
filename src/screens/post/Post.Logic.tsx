import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {$axios} from '@api';
import { useDispatch, useSelector } from 'react-redux';


export const PostLogic = (props: any) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = React.useState('');
    const [loadCamera, setLoadCamera] = React.useState(false);
    const [conten, setConten] = React.useState('');
    const [dataLocal, setDataLocal] = React.useState('')
    const [image, setImage] = React.useState()
    const getTokent = useSelector((state: any) => state?.auth.user.accessToken);

    const takePicture = async function (camera: any) {

        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        setImage(data.uri);
        //  eslint-disable-next-line
        console.log(data.uri);
        setLoadCamera(false);
    };

    const uploadProfileImage = async () => {
        const formData = new FormData();
        formData.append('imagePost', {
            name: new Date() + '_profile',
            uri: image,
            type: 'image/jpg',
        });

        try {
            const res = await $axios.config.post('/postImage', formData, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data.success) {
               
                console.log('Ok roi ok');
            }
        } catch (error) {
            console.log(error.message);
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
    const distPatchPost = async (userId: any, conten: any, image: any) => {
        const formData = new FormData();
        formData.append('imagePost', {
            name: new Date() + '_profile',
            uri: image,
            type: 'image/jpg',
        });
        formData.append('description', conten);
        formData.append('userId', userId);
        console.log(formData);
        const result = await axios.post('http://localhost:3000/postImage', formData,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });

        if (result) {
            console.log(result);
            props.navigation.goBack();
        } else {
            return
        }
    }
    console.log('dataLocal,dataLocal', dataLocal);
    return {uploadProfileImage,
        setLoadCamera, cameraLoad,
        takePicture, image,
        dataLocal, onPress, getTokent, getData, onPressSetting, posts, distPatchPost, setConten, conten, loadCamera
    }
}



