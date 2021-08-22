import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
// import { $axios } from '@api';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { Alert, Platform } from 'react-native';
import { postActions } from '../../shared-store/redux';

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
    const [posts, setPosts] = React.useState('');
    const [loadCamera, setLoadCamera] = React.useState(false);
    const [conten, setConten] = React.useState('');
    const [dataLocal, setDataLocal] = React.useState('');
    const [image, setImage] = React.useState();
    const [photo, setPhoto] = React.useState(null);
    const getTokent = useSelector((state: any) => state?.auth.user.user.id);

    const takePicture = async function (camera: any) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data);
        setImage(data);
        setLoadCamera(false);
    };


    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response: any) => {
            console.log("response", response);
            if (response) {
                setPhoto(response.assets);
            }
        });
    };

    const distPatchPost = async (id: any, descrip: any) => {

        if (photo) {
            const data = createFormData(photo, { userId: id, description: descrip });
            fetch(`http://192.168.1.13:3000/postImage`, {
                method: 'POST',
                body: createFormData(photo, { userId: id, description: descrip }),
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

            const response = await axios({
                method: 'post',
                url: 'http://192.168.1.13:3000/postImage',
                data: formData
            });

            if (response) {
                dispatch(postActions.getAllPost(''));
                props.navigation.navigate('MyHome');
            } else {
                Alert.alert('Lỗi bài đăng');
                props.navigation.navigate('MyHome');
            }

            // fetch(`http://192.168.1.13:3000/postImage`, {
            //     method: 'POST',
            //     body: JSON.stringify(data),
            // })
            //     .then((response) => response.json())
            //     .then((response) => {
            //         dispatch(postActions.getAllPost(''));
            //         props.navigation.navigate('MyHome');
            //         console.log('response', response);
            //     })
            //     .catch((error) => {
            //         console.log('error', error);
            //     });
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
        // uploadProfileImage,
        setLoadCamera, cameraLoad, handleChoosePhoto, photo,
        takePicture, image,
        dataLocal, onPress, getTokent, getData, onPressSetting, posts, distPatchPost, setConten, conten, loadCamera
    }
}



