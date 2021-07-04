import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const PostLogic = (props: any) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = React.useState('');
    const [conten, setConten] = React.useState('');
    const [dataLocal, setDataLocal] = React.useState('')
    const getTokent = useSelector((state:any)=>state?.auth.user.accessToken);
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

    const distPatchPost = async (value: any, conten: any) => {

        const post = {
            title: conten,
        };

        const headers = {
            'Authorization': 'Bearer ' + value,
            'My-Custom-Header': 'foobar'
        };
        const result = await axios.post('https://duan-3.glitch.me/api/post', post, { headers })

        if (result) {
            console.log(result);
            props.navigation.goBack();
        } else {
            return
        }
    }
    console.log('dataLocal,dataLocal', dataLocal);
    return {
        dataLocal, onPress, getTokent, getData, onPressSetting, posts, distPatchPost, setConten, conten
    }
}



