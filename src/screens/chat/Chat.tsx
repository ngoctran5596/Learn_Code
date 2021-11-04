import * as React from 'react';
import { ChatListItem, ContactListItem,ChatUser, HeaderNav } from '@components';

import { useState } from "react";
import { FlatList,Text, StyleSheet, View } from 'react-native';
// import chatRoom from '../../data/Users'
import { chatLogic } from './Chat.Logic';
import { Colors, MENU, NOTIFICATION } from '@assets';
import { heightPercentageToDP } from 'react-native-responsive-screen';
// import Colors from '~constants/Colors';




// import { getUser } from './queries';

export const ChatsScreen = (props: any) => {
  const { allUser } = chatLogic(props);
  // const [chatRooms, setChatRooms] = useState(chatRoom);

 
  return (
    <View style={styles.container}>
      <View style={{height:heightPercentageToDP(10)}}>
        <HeaderNav title="Chat" />
      </View>
      <Text style={styles.status}>Status</Text>
      <View style={{height:heightPercentageToDP(12), backgroundColor:'white'}}>
        <ChatListItem data={allUser} />
      </View>
      <Text style={styles.status}>Chat</Text>
      <ChatUser userdata= {allUser}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  status:{
    fontSize:30,
    fontWeight:"bold",
    color: Colors.PURPLE
  }

});
