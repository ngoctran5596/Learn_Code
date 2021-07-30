import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { $axios } from '@api';
import Animated from 'react-native-reanimated';
import socketIOClient from 'socket.io-client'
import BottomSheet from 'reanimated-bottom-sheet';
import { ButtonLoginLogup } from '@components';
import { USER } from '@assets';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../shared-store/redux/auth';
import { NavigationContainer } from '@react-navigation/native';
export const chatLogic = (props: any) => {
    const messageChekEmail = useSelector((state: any) => state.auth.message);
    const userStore = useSelector((state: any) => state.auth.isLoading);
    const [AllGroup,setAllGroup] = React.useState([])
    const dispatch = useDispatch();
    const ENDPOINT = 'http://192.168.1.9:3000'
    const socket = socketIOClient(ENDPOINT);
    const connectSocket =  ()=>{
        socket.on('connection', () => console.log('CONNECTTED'));
        socket.emit('getUsers');
        socket.on('getAllUser', (user) =>setAllGroup(user));
    }

    React.useEffect(() => {
        connectSocket()
    }, [])



    return {
        AllGroup
    };
};
