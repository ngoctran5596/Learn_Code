import { Colors } from '@assets';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const HeaderNews = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onClick()}>
      <View style={styles.card}>
        <View>{props.children}</View>
        <Image source={{ uri: props.image }} style={styles.img} />
        <Text style={styles.title}>{props.title}</Text>
      </View>

    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    width: wp(80),
    height: hp(25),
    margin: 5,
    borderRadius: 20,
    marginBottom: hp(2),
  },
  img: { width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20 },
  title: {
    position: 'absolute',
    opacity: 0.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    color: '#ffffffff',
    width: '100%',
    padding: 10,
    backgroundColor: '#444444',
    bottom: 0,
    left: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: Colors.OVERLAY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
});
