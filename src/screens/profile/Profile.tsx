import { BACK, CHATLOVE, Colors, SETTING } from '@assets';
import { HeaderNav } from '@components';
import React, { useEffect, useState } from 'react';
import {
  Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ProfileLogic } from './Profile.Logic';


export const ProfileScreen = (props: any) => {
  const {dataLocal, onPress, Logout, getData, onPressSetting}: any =
    ProfileLogic(props);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const user =props.route.params.user;
 
  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <HeaderNav
          setMyScreen={onPress}
          title="Profile"
          imgSetting={SETTING}
          imgMenu={BACK}
          onPressProfile={onPressSetting}
        />
        <Image style={styles.userImg} source={{uri: user?.image}} />
        <Text style={styles.userName}>{user?.name} </Text>

        <Text style={styles.aboutUser}>{user?.isTurtor ===0? 'Người học': 'Người dạy'}</Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Image
              style={{width: wp(5), height: wp(5), marginHorizontal: wp(1)}}
              source={CHATLOVE}
            />
            <Text style={styles.userBtnTxt}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userBtnSting} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{posts.length}</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    flexDirection: 'row',
    width: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  userBtnSting: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
    backgroundColor: Colors.BLUE,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
