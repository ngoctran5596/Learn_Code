import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(6),
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize:40 ,
    padding: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  input: {
    width: wp(90),
    borderWidth: 0.5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
});
