import * as React from 'react';
import { ChatListItem, ContactListItem, HeaderNav } from '@components';

import { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import chatRoom from '../../data/Users'
import { MessageLogic } from './Message.Logic';
import { MENU, NOTIFICATION } from '@assets';
import { heightPercentageToDP } from 'react-native-responsive-screen';



// import { getUser } from './queries';

export const MessageScreen = (props: any) => {
  const { AllGroup } = MessageLogic(props);
  // const [chatRooms, setChatRooms] = useState(chatRoom);

  console.log('chatRoomschatRooms', AllGroup);
  return (
    <View>
      <View style={{height:heightPercentageToDP(10)}}>
        <HeaderNav title="Message" />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
