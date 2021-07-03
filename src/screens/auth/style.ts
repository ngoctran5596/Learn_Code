// import { Font } from './../../../assets/fonts/index';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Font} from '@assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    opacity: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: Font.helveticaneue_regular,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: wp(2),
    marginVertical: hp(1),
  },
  center: {
    width: wp(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
    opacity: 0.8,
  },
  input: {
    width: '100%',
    borderBottomWidth: 0.5,
    marginVertical: 10,
    borderRadius: 8,
  },
  textQS: {
    color: 'black',
    paddingVertical: hp(2),
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Font.helveticaneue_regular,
  },
  card: {
    marginHorizontal:wp(2),
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: wp(8),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginVertical:hp(1)
  },
});
