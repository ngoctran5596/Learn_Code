import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const ButtonCustom = (props: any) => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: wp(12),
    width: wp(80),
    alignSelf: 'center',
    backgroundColor: '#3599D0',
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'helvetica-neue-regular',
    color: '#FFFFFF',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
});
