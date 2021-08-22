import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '@screens'
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'react-native';
export const MessageLogic = (props: any) => {
    const routerParams = props.route.params;
    const userStore = useSelector((state: any) => state.auth.user.user);
    const dispatch = useDispatch();
    const [AllGroup, setAllGroup] = React.useState([]);
    const [activeRoomFound, setActiveRoomFound] = React.useState(false);
    const [activeUser, setActiveUser] = React.useState(null);
    const [message, setMessage] = React.useState<any>([]);
    const [activeRoomMgs, setActiveRoomMgs] = React.useState<any>([]);
    const [txtMsg, setTxtMsg] = React.useState('');
    const [roomID, setRoomID] = React.useState<any>();
    const [myMsgs, setMyMsgs] = React.useState([]);
    const [loadMsg, setLoadMsg] = React.useState<any>([]);
    const scrollView = React.useRef();
    const activityUserEmail = userStore?.email;
    const date = new Date();
    const { email: reciever } = routerParams;

    const onchange = (text: any) => {
        setTxtMsg(text);
    }

    const uniqueUserChat = async ({ _id, email, name }: any) => {
        console.log("datadatadatadata", { _id, email, name })
        const senderEmail = userStore?.email;
        socket.emit('getUsers');
        socket.emit('startUniqueChat', { recieverEmail: email, senderEmail, recieverID: _id }, (err: any) => { });
        socket.on('openChat', ({ recieverEmail, senderEmail, roomID }) => {
            const mobileRoom = {
                recieverEmail,
                senderEmail,
                roomID
            }
            socket.emit('joinTwoUsers', { roomID }, ({ roomID }: any) => {
                setRoomID(roomID);
                socket.emit('sentMsgs', { roomID }, (data: any) => {
                    console.log("sentMsgssentMsgssentMsgs", data);
                    const myMsg = data.map((data: any) => {
                        return {
                            ...data,
                            sender: activityUserEmail == data.senderEmail
                        }
                    })
                     
                    setMessage([...message,...myMsg]);
                })
            });
        });
    }

    const onPress = () => {
        const senderEmail = userStore?.email;
        const date = new Date();
        if (!txtMsg) return;

        const composeMsg = {
            _id: uuidv4(),
            roomID: roomID,
            txtMsg,
            recieverEmail: reciever,
            senderEmail,
            time: `${date.getHours()}:${date.getMinutes()}`,
            sender: true
        }

        setMessage([...message, composeMsg]);
        setActiveRoomMgs([...activeRoomMgs, composeMsg]);
        setTxtMsg('');

        socket.emit('sendTouser', {
            roomID,
            senderEmail,
            recieverEmail: reciever,
            composeMsg
        });
    }

    const handleDispatchMsg = () => {
        socket.on('dispatchMsg', (data: any) => {
            getdispatchMsg({ ...data });
        });
    }


    const LoadRoomMsgs = () => {
        new Promise((res)=>{
            res();
        }).then(()=>{
            const activeRoomMsgs = message;
        })
    }
    
    const getdispatchMsg = ({ _id, roomID, senderEmail, recieverEmail, composeMsg: composeMsgs }: any) => {
        const activeUser = userStore?.email;
        const msg = {
            _id,
            ...composeMsgs,
            sender: senderEmail == activeUser,
            senderEmail,
            recieverEmail,
            roomID,
        }
        const checkIfMsgIDExits = message.filter(({ _id: msgID }: any) => msgID == _id);
        if (checkIfMsgIDExits.length > 0) {
            return setMessage([...message]);
        } else {
            setActiveRoomMgs([...message, msg]);
            return setMessage([...message, msg]);
        }
    }
    // console.log("messagemessagemessagemessage",message);

    React.useEffect(() => {
        const { _id, email, name } = routerParams;
        new Promise((res) => {
            uniqueUserChat({ _id, email, name });
            setTimeout(res, 2000);
        }).then(() => {
            LoadRoomMsgs();
        });
    }, [])

    React.useEffect(() => {
        handleDispatchMsg();
    }, [message])


    return {
        AllGroup,
        routerParams, onPress,
        onchange, txtMsg,
        activeRoomMgs,
        scrollView,
        setTxtMsg,loadMsg,message
    };
};
