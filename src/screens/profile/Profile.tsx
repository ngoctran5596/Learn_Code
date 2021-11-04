import { BACK, CAMERA, CHATLOVE, Colors, SETTING } from '@assets';
import { HeaderNav, ModalCustom, ModalProfile } from '@components';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ImageCustom } from '@components';
import { ProfileLogic } from './Profile.Logic';


export const ProfileScreen = (props: any) => {
  const { dataLocal,onChange, distPatchPost, isLoadModal, photo, setIsLoadModal, onPress, Logout, getData, onBack, handleChoosePhoto, onPressSetting, user }: any =
    ProfileLogic(props);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);


  const handleDelete = () => { };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <HeaderNav
          setMyScreen={onPress}
          title="Profile"
          imgSetting={SETTING}
          imgMenu={BACK}
          onPressProfile={onPressSetting}
        />
        <View>
          <ImageCustom img={user?.image} />
          {/* <Image style={styles.userImg} source={{ uri: user?.image }} /> */}
          <TouchableOpacity onPress={handleChoosePhoto} style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <Image style={styles.camerastyle} source={CAMERA} />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>{user?.name} </Text>

        <Text style={styles.aboutUser}>{user?.isTutor ? 'Người dạy' : 'Người học'}</Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
            <Image
              style={{ width: wp(5), height: wp(5), marginHorizontal: wp(1) }}
              source={CHATLOVE}
            />
            <Text style={styles.userBtnTxt}>Toi yeu tat ca cac ban</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userBtnSting} onPress={() => { }}>
            <Text style={styles.userBtnTxt}>...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{posts.length}</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>1</Text>
            <Text style={styles.userInfoSubTitle}>Lớp đã tham gia</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>0</Text>
            <Text style={styles.userInfoSubTitle}>Lớp đã dạy</Text>
          </View>
        </View>

      </ScrollView>
      <ModalProfile modalVisible={isLoadModal} setShowModal={onChange}>
        {
          photo?.map((item: any) => {
            return <View style={{ alignItems: 'center', marginVertical: 10 }}><Image source={{ uri: item?.uri }} style={{ width: 300, height: 200, borderRadius: 12 }} /></View>
          })
        }
        <Text>Bạn muốn chọn ảnh này làm đại diện chứ ?</Text>
        <TouchableOpacity onPress={distPatchPost} style={styles.skip}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>
      </ModalProfile>

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
  camerastyle: {
    height: 40,
    width: 40,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  skip: {
    borderRadius: 20,
    marginBottom: 5,
    padding: 15,
    elevation: 2,
    backgroundColor: Colors.PURPLE,
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
    width: wp(50),
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
