import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,TouchableOpacity
} from 'react-native';
import { ChatRoom } from '../../../types';
import { SETTING, CHATLOVE, IMAGECALCULATEBMI, Colors } from '@assets';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';


export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

export const ChatListItem = (props: any) => {

  const chatUser = (item:any)=>{
    useNavigation()
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {props.data
        ? props.data?.map((item:any, index:any) => (
          <TouchableOpacity key={index} style={styles.container} onPress={()=>{}}>
            <Image
              source={{uri:item.image}}
              style={styles.imageAvartar}
            />
          </TouchableOpacity>
        ))
        : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    // borderRadius: 60,
    marginVertical: 10,

    marginRight: 10,
    justifyContent: 'center', alignItems: 'center', 
    elevation: 10,
    shadowColor: Colors.PURPLE,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  imageAvartar: { width:60, height: 60, resizeMode: 'center',borderRadius:60 }
});
