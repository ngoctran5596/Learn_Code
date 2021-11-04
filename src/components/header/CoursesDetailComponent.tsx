import { Colors, TICK } from '@assets';
import React, { FC } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  children?: any;
  styleContainer?: StyleProp<ViewStyle>;
  image?: any;
  onClick?: any;
  description?: any;
  onAddStudent?: any;
  title?: string;
  name?: string;
  data?: any;
  userId?: any;
  detailFC?: any;
};
export const CoursesDetailComponent: FC<Props> = (props) => {
  const { data, userId, detailFC } = props;
  const isJoined = data?.filter((item: any) => item._id === userId).length > 0;
  return (
    <View style={[styles.container, props.styleContainer]} >
      <View style={styles.card}>
        <Image source={{ uri: props.image }} style={styles.img} />
        <View style={{ flexDirection: 'column', width: '60%', marginLeft: 10 }}>
          <Text style={styles.title}>Tên lớp:  <Text style={styles.text}>{props.title}</Text></Text>
          <Text style={styles.title}>Người dạy:  <Text style={styles.text}>{props.name}</Text></Text>
          <Text numberOfLines={3} style={styles.title}>Giới thiệu:  <Text style={styles.text}>{props.description}</Text> </Text>

          {
            isJoined ? (
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={detailFC} style={{ backgroundColor: Colors.PURPLE, borderRadius: 10, padding: 10 }}>
                  <Text>Chi tiết lớp</Text>
                </TouchableOpacity>
                <Image source={TICK} style={styles.join} />
              </View>
            )
              : (<TouchableOpacity onPress={props.onAddStudent} style={{ backgroundColor: Colors.PURPLE, borderRadius: 10, padding: 10 }}>
                <Text style={{color:'white',fontWeight:'bold'}}>Tham gia</Text>
              </TouchableOpacity>)
          }




        </View>

      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: wp(80),
    margin: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
  img: { width: 100, height: '100%', resizeMode: 'cover', borderRadius: 20 },
  title: {
    color: Colors.PURPLE,
    paddingHorizontal: 5,
    fontWeight:'bold',
    fontSize:14,
    
  },
  decription: {
    position: 'absolute',
    opacity: 0.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    color: 'black',
    width: '100%',
    padding: 10,
    backgroundColor: Colors.PURPLE,
    top: 0,
    left: 0,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    shadowColor: Colors.OVERLAY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  join: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  text:{
    fontSize:14,
    fontWeight:"100",
    color: 'black',
  }

});
