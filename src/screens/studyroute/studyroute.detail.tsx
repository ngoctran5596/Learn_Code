import React from 'react';
import {
    Alert,
    FlatList,
    Image,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { ChatInput, HeaderMessage } from '@components';
import { socket } from '@screens';
import { ADD, ADDPLUS, Colors } from '@assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { noteActions } from '../../shared-store/redux';

export const studyrouteDetail = (props: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state?.auth?.user.user);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [playing, setPlaying] = React.useState(false);
    const [roomID, setRoomID] = React.useState();
    const [message, setMessage] = React.useState([]);
    const [txtMsg, setTxtMsg] = React.useState('');
    const [noteMsg, setNoteMsg] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [arrNote, setArrNote] = React.useState([]);
    const playerRef = React.useRef<YoutubeIframeRef>(null);
    const scrollRef = React.useRef<ScrollView>();
    const { id, name } = props.route.params;


    React.useEffect(() => {
        socket.emit('joined', { userName: user.name });
        socket.on('joined', title => setTitle(title));
        socket.emit("joinRoom", ({ chatroomId: id }));
        socket.on('newMessage', msg => {
            setMessage((messages: any) => [...messages, msg]);
        });
    }, []);





    const onChange = (text: any) => {
        setTxtMsg(text);
    };           
    const submit = () => {
        const userName = user.name;
        const chatroomId = id;
        const data ={userName,message: txtMsg };
        setMessage((messages: any) => [...messages, data]);
        socket.emit('chat message', { chatroomId, userName, message: txtMsg });
        setTxtMsg('');
    };

    const onSaveNote = async (value: any) => {
        const data = {
            userId: user.id,
            description: noteMsg,
            idYoutube: id,
            nameClass: name
        }
        await dispatch(noteActions.createNote(data))
        setModalVisible(!modalVisible);
    };
    const setMyScreen = () => {
        props.navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <YoutubePlayer
                ref={playerRef}
                height={210}
                width={wp(100)}
                videoId={id}
            />

            <View style={{ flex: 1, paddingTop: 5, backgroundColor: Colors.PURPLE }}>
                <ScrollView
                    ref={scrollRef}
                    onContentSizeChange={() => {
                        scrollRef.current?.scrollToEnd({ animated: true });
                    }}
                    showsVerticalScrollIndicator={false}
                    onLayout={() => {
                        scrollRef.current?.scrollToEnd({ animated: true });
                    }}>
                    <Text style={{backgroundColor:'white'}}>{title}</Text>
                    {message.map(({ message, userName }: any, index: any) => (
                        <React.Fragment key={index}>

                            <RenderItem {...{ message, userName }} />
                        </React.Fragment>
                    ))}
                </ScrollView>
                <View>
                    <ChatInput
                        txtMsg={txtMsg}
                        onChangeText={(text: any) => onChange(text)}
                        onPress={submit}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => setModalVisible((prev: any) => !prev)}
                    style={{
                        margin: 5,
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 50,
                        right: 0,
                    }}>
                    <Image source={ADDPLUS} style={{ width: 60, height: 60 }} />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>NOTE</Text>
                        <TextInput
                            numberOfLines={3}
                            style={{
                                width: 200,
                                borderWidth: 0.5,
                                borderRadius: 10,
                                marginVertical: 10,
                                borderColor: Colors.PURPLE,
                            }}
                            placeholder="Viết note"
                            onChangeText={(text) => setNoteMsg(text)}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onSaveNote(noteMsg)}>
                                <Text style={styles.textStyle}>Lưu note</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>

                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const RenderItem = ({ message, userName }: any) => {
    return (
        <TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    justifyContent: 'flex-start',
                    paddingHorizontal: 10,
                }}>
                <View
                    style={{
                        marginBottom: 10,
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        justifyContent: 'center',
                        position: 'relative',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        maxWidth: 237,
                        alignItems: 'center',
                    }}>

                    <Text
                        numberOfLines={3}
                        style={{
                            fontSize: 12,
                            lineHeight: 25,
                            color: 'black',
                        }}>
                        {userName}: {message}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        marginRight: 10,
        backgroundColor: Colors.PURPLE,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
