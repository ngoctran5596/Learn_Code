import React from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { ChatInput, HeaderMessage } from '@components';
import {socket} from '@screens'
import { Colors } from '@assets';
import { useSelector } from 'react-redux';

export const studyrouteDetail = (props: any) => {
    const user = useSelector((state: any) => state?.auth?.user.user);
    const [playing, setPlaying] = React.useState(false);
    const [message, setMessage] = React.useState([]);
    const [txtMsg, setTxtMsg] = React.useState('');
    const { id } = props.route.params;
   
    const onChange = (text: any) => {
        setTxtMsg(text);
    }
    const submit =()=>{
        socket.emit('on-chat',{txtMsg,name:user?.name});
        socket.on('user-learn',(data)=>{
            setMessage([...message,data])
        })
        setTxtMsg('')
    }
    const setMyScreen = () => {
        props.navigation.goBack();
    }
    const playerRef = React.useRef<YoutubeIframeRef>(null)
    const scrollRef = React.createRef<ScrollView>();
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
                        scrollRef.current?.scrollToEnd({ animated: true })
                    }}
                    showsVerticalScrollIndicator={false}
                    onLayout={() => {
                        scrollRef.current?.scrollToEnd({ animated: true })
                    }}
                >
                    {message.map(({ txtMsg, sender,name }: any, index: any) => (
                        <React.Fragment key={index}>
                            <RenderItem {...{ txtMsg, sender,name }} />
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
            </View>
        </View >
    )
}
const styles = StyleSheet.create({})
const RenderItem = ({ txtMsg, sender,name }: any) => {
    return (
        <TouchableOpacity>
            <View style={{
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: sender ? 'flex-end' : 'flex-start',
                paddingHorizontal: 10,
            }}>
                <View style={{
                    marginBottom: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundColor: sender ? 'blue' : 'white',
                    borderRadius: 10,
                    maxWidth: 237,
                    alignItems: 'center'
                }}>
                    <Text numberOfLines={3}
                        style={{
                            fontSize: 12,
                            lineHeight: 25,
                            color: sender ? 'white' : 'black',
                        }}>
                       {name}:  {txtMsg}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}