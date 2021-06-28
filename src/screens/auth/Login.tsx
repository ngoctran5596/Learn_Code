import { BACKGROUND } from '@assets'
import { ButtonCustom } from '@components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {config} from '@api'
import { styles } from './style'

export const Login = (props: any) => {
    const [email, setEmail] = useState('baochau@gmail.com')
    const [password, setPassword] = useState('123456789')
    const setStringValue = async (value: any) => {
        try {
            await AsyncStorage.setItem('ACCESS-Token', value)
        } catch (e) {
            console.log('SAVE ERROR');
        }

        console.log('Done.')
    }

    const submit = async () => {
        const user = {
            email, password
        }
        try {
            const response = await config.post('user/login', user);
            console.log('response', response);

            if (response.data.success) {
                const jsonValue = JSON.stringify(response.data.user)

                await AsyncStorage.setItem('ACCESS-Token', response.data.accessToken);
                await AsyncStorage.setItem('USER', jsonValue);
                return props.navigation.navigate('MyHome');
            }
            Alert.alert('Lỗi', 'Sai email hoặc mật khẩu')
        } catch (error) {

        }
    }

    return (
        <ImageBackground source={BACKGROUND} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.center}><Text style={{ ...styles.text, fontSize: 20, color: 'black' }}>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.center }}><Text style={{ ...styles.text, fontSize: 20, color: 'black' }}>Register</Text></TouchableOpacity>
                </View>
                <View style={{}}>
                    <TextInput autoCompleteType='email' placeholder='Email' style={styles.input} onChangeText={(text: any) => setEmail(text)} />
                    <TextInput secureTextEntry={true} placeholder='Password' style={styles.input} onChangeText={(text: any) => setPassword(text)} />
                </View>

                <ButtonCustom text='Login' onPress={submit} />
            </View>
        </ImageBackground>
    )
}




