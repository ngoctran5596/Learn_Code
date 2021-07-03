import {Colors} from '@assets';
import React from 'react';

import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const ButtonLoginLogup = (props: any) => {
  const {onPress, text, icon} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          paddingVertical: wp(2),
          flexDirection: 'row',
          marginHorizontal: wp(2),
        }}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: 'white',
    marginVertical:hp(2)
  },
  icon: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(8),
    marginRight: wp(4),
  },
  text: {
    fontFamily: 'helvetica-neue-regular',
    color: 'black',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});
