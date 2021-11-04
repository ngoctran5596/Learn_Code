import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput,
} from 'react-native';


import { ButtonLoginLogup, HeaderNav, ImageCustom, ModalCustom } from '@components';

import { BACK, CHAT, CHATLOVE, Colors, DELETE, LENGUAGE, LOGOUT, MENUUSER, NOTIFICATIONSETTING, RENAME, REPOST, RESETPASS, SETTING, USER } from '@assets';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ProfileLogic } from '../profile/Profile.Logic';

export const Setting = (props: any) => {
    const { dataLocal, onPress, Logout, getData, onBack, user }: any = ProfileLogic(props);
    const [showChangePass, setShowChangePass] = useState(false);

    const handleDelete = () => { };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <ScrollView
                style={styles.container}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                showsVerticalScrollIndicator={false}>
                <HeaderNav setMyScreen={onBack} title='Setting' imgMenu={BACK} />
                <View>
                <ImageCustom img={user?.image} />
                    <Text style={styles.userName}>{user?.name}  </Text>

                </View>
                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                    <Text style={styles.text}>Thông báo</Text>
                    <ButtonLoginLogup text='Thông Báo' icon={NOTIFICATIONSETTING} />
                    <Text style={styles.text}>Profile</Text>
                    <ButtonLoginLogup text='Đổi Tên' icon={RENAME} />
                    <ButtonLoginLogup text='Danh Sách đã chặn' icon={USER} />
                    <Text style={styles.text}>Ngôn ngữ</Text>
                    <ButtonLoginLogup text='Ngôn ngữ' icon={LENGUAGE} />
                    <Text style={styles.text}>Tài khoản và hỗ trợ</Text>
                    <ButtonLoginLogup onPress={() => setShowChangePass(true)} text='Đổi mật khẩu' icon={RESETPASS} />
                    {/* <ButtonLoginLogup text='Xóa tài khoản của bạn' icon={DELETE} /> */}
                    <ButtonLoginLogup text='Báo cáo sự cố' icon={REPOST} />
                    <ButtonLoginLogup text='Đăng xuất' icon={LOGOUT} onPress={Logout} />
                </View>
            </ScrollView>
            {/* modalVisible,setShowModal */}
            {showChangePass ? 
            (<ModalCustom modalVisible={showChangePass} setShowModal={setShowChangePass}>
                <View>
                    <TextInput style={styles.textinput} placeholder="Mật khẩu cũ" />
                    <TextInput style={styles.textinput} placeholder="Mật khẩu mới" />
                </View>
            </ModalCustom>) : null}

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
        textAlign: 'center'
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
    text: {
        fontFamily: 'helvetica-neue-regular',
        marginLeft: wp(2),
        marginTop: wp(2),
        fontWeight:'bold'
    },
    userBtnTxt: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: Colors.WHITE },
    userBtnSting: {
        width: wp(10), height: wp(10), borderRadius: wp(10), backgroundColor: Colors.BLUE
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
    textinput: {
        width: wp(70),
        borderBottomColor: Colors.PURPLE,
        borderBottomWidth: 0.5,
        padding: 10,
        marginBottom:10
    },
});