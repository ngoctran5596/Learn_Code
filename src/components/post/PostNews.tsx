import {Colors} from '@assets';
import React from 'react';

import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const PostNews = (props: any) => {
  const {onPress, text, icon} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.rowCol}>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: 'white',
    marginTop:hp(11)
  },
  icon: {
    width: wp(8),
    height: wp(9),
    borderRadius: wp(8),
    marginRight: wp(4),
  },
  text: {borderWidth:0.3,borderRadius:10,padding:10,borderColor:Colors.BLUE,width:'85%',color:Colors.BLUE,},
  rowCol: {
    paddingVertical: wp(2),
    flexDirection: 'row',
    marginHorizontal: wp(2),
  },
});
