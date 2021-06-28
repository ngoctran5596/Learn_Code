import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import config from '../../api/config'
import { Alert } from 'react-native'
import { styles } from './style'

export const Register = (props: any) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [isTurtor, setIsturtor] = useState(true)
    const [data, setData] = useState([])

    const submit = async () => {
        const user = {
            email, name, password, image, isTurtor
        }
        try {
            const response = await config.post('user/register', user);
            console.log("response", response);
            if (response.data.error) {
                return Alert.alert('Lỗi', 'Lỗi đăng ký')
            }
            Alert.alert('Chúc mừng', 'Đăng ký thành công')
            props.navigation.navigate('Login');
        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>REGISTER</Text>
            </View>

            <TextInput placeholder='Name' onChangeText={(text) => setName(text)} />
            <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Password' onChangeText={(text) => setPassword(text)} />
            <TextInput placeholder='Image' onChangeText={(text) => setImage(text)} />
            <TextInput placeholder='IsToutor' onChangeText={(text) => setIsturtor(false)} />
            <Button title="register" onPress={() => submit()} />
        </ScrollView>
    )
}
