import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '@screens';
import { Alert } from 'react-native';


export const chatLogic = (props: any) => {
    const messageChekEmail = useSelector((state: any) => state.auth.message);
    const userStore = useSelector((state: any) => state.auth.user.user);
    const [allUser, setAllUser] = React.useState([])
    const dispatch = useDispatch();
    console.log('allUserallUserallUserallUser', allUser);

    const connectSocket = async () => {
        socket.emit('getUsers');
        socket.on('getAllUser', (user) => {
            const allUser = user.filter(({ email }: any) => email !== userStore.email).map(({ email, name, _id, image }: any) => ({
                _id,
                email,
                name,
                image,
                time: '1:00',
                msg: 'last msg',
            }));
            setAllUser(allUser);
        });
    }

 

    React.useEffect(() => {
        connectSocket();
        // handleDispatchMsg();
    }, [])

    return {
        allUser
    };
};
