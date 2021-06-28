import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useDispatch } from 'react-redux';


export const ProfileLogic = (props: any) => {
    const dispatch = useDispatch();
    const [dataLocal, setDataLocal] = React.useState('')
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
    const onPress = () => {
        props.navigation.goBack()
    };
    
    const onPressSetting = () => {
        props.navigation.navigate('Setting');
    };
    console.log('dataLocal,dataLocal', dataLocal);
    return {
        dataLocal, onPress, Logout,getData,onPressSetting
    }
}



