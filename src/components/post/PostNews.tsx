import {Colors} from '@assets';
import React from 'react';

import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { socketURL } from '@api';
export const PostNews = (props: any) => {
  const {onPress, text, icon} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.rowCol}>
        <Image source={{uri: icon?.replace('http://localhost:3000', socketURL)}} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: '#f7a535',
    marginTop:hp(2)
  },
  icon: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
    marginRight: wp(4),
  },
  text: {borderRadius:10,backgroundColor:'white',padding:10,borderColor:Colors.BLUE,width:'85%',color:Colors.BLUE,},
  rowCol: {
    paddingVertical: wp(2),
    flexDirection: 'row',
    marginHorizontal: wp(2),
   
  },
});
