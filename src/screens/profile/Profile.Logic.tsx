import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../shared-store/redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { Alert, Platform } from 'react-native';
import axios from 'axios';
import { socketURL } from '@api';


export const ProfileLogic = (props: any) => {
    const dispatch = useDispatch();
    const [dataLocal, setDataLocal] = React.useState('');
    const user = useSelector((state: any) => state?.auth?.userById);
    const tokent = useSelector((state: any) => state?.auth?.user?.accessToken);
    const [posts, setPosts] = React.useState('');
    const [loadCamera, setLoadCamera] = React.useState(false);
    const [isLoadModal, setIsLoadModal] = React.useState(false);
    const [conten, setConten] = React.useState('');
    const [image, setImage] = React.useState();
    const [photo, setPhoto] = React.useState(null);
    const getTokent = useSelector((state: any) => state?.auth.user.user.id);
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const pickerRef = React.useRef();

    React.useEffect(() => {
        dispatch(userActions.getUser(tokent))
    }, [])
    const createFormData = (photo: any, body: any = {}) => {
        const data = new FormData();
        data.append('avatar', {
            name: photo[0].fileName,
            type: photo[0].type,
            uri: Platform.OS === 'ios' ? photo[0].uri.replace('file://', '') : photo[0].uri,
        });
        Object.keys(body).forEach((key: any) => {
            data.append(key, body[key]);
        });

        return data;
    };
    
    const onChange =()=>{
        setIsLoadModal(false);
    }

    const takePicture = async function (camera: any) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data);
        setImage(data);
        setLoadCamera(false);
    };









    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response: any) => {
            console.log("responseresponseresponse", response);
            if (response) {
                setPhoto(response.assets);
                setIsLoadModal(true);
            }
        });
    };

    const distPatchPost = async () => {
        if (photo) {
            fetch(`${socketURL}/upload_avatar`, {
                method: 'POST',
                body: createFormData(photo, {}),
                headers: {
                    "Authorization": tokent
                }
            })
                .then((response) => response.json())
                .then((response) => {
                    setIsLoadModal(false);
                    console.log('responseresponseresponseresponse update ảnh', response);
                    dispatch(userActions.getUser(tokent));
                })
                .catch((error) => {
                    console.log('error', error);
                });
        }
        else {
            return
        }

    };

    const Logout = async () => {
        dispatch(userActions.LOGOUT(''))
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
    const onPress = () => {
        props.navigation.goBack()
    };
    const onBack = () => {
        props.navigation.navigate('Profile')
    };

    const onPressSetting = () => {
        props.navigation.navigate('Setting');
    };
    return {
        distPatchPost,onChange,
        dataLocal, onPress, Logout, getData, photo, onPressSetting, user, onBack, handleChoosePhoto, isLoadModal, setIsLoadModal
    }
}



