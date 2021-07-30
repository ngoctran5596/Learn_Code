import * as React from 'react';
import { ChatListItem, ContactListItem, HeaderNav } from '@components';

import { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import chatRoom from '../../data/Users'
import { chatLogic } from './Chat.Logic';
import { MENU, NOTIFICATION } from '@assets';
import { heightPercentageToDP } from 'react-native-responsive-screen';



// import { getUser } from './queries';

export const ChatsScreen = (props: any) => {
  const { AllGroup } = chatLogic(props);
  // const [chatRooms, setChatRooms] = useState(chatRoom);

  console.log('chatRoomschatRooms', AllGroup);
  return (
    <View style={styles.container}>
      <View style={{height:heightPercentageToDP(10)}}>
        <HeaderNav title="Chat" />
      </View>
      <FlatList
        style={{ width: '100%' ,height:'50%'}}
        keyExtractor={(item: any) => item._id}
        data={AllGroup}
        renderItem={({ item }: any) => <ContactListItem user={item} />}
      />
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
