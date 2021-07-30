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
export const MessageLogic = (props: any) => {
    console.log('PROPSSSSSS',props.route.params);
    const messageChekEmail = useSelector((state: any) => state.auth.message);
    const userStore = useSelector((state: any) => state.auth.isLoading);
    const [AllGroup, setAllGroup] = React.useState([])
    const dispatch = useDispatch();
    React.useEffect(() => {

    }, [])



    return {
        AllGroup
    };
};
