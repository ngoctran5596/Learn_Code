import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import { FormButton, HeaderNav } from '@components';
// import Camera from './Camera.logic';
import { BACK, CHAT, CHATLOVE, Colors, MENUUSER, SETTING } from '@assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PostLogic } from './Post.Logic';
import { TextInput } from 'react-native-gesture-handler';

export const PostNewsScreen = (props: any) => {
    const { dataLocal,getTokent, conten, onPress, posts, getData, onPressSetting, setConten, distPatchPost }:any =
        PostLogic(props);


    useEffect(() => {
        getData();
    }, []);

    const handleDelete = () => { };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}>
                <HeaderNav
                    setMyScreen={onPress}
                    title="Post news"
                    imgMenu={BACK}
                    onPressProfile={onPressSetting}
                />
                <Image style={styles.userImg} source={{ uri: dataLocal?.image }} />
                <Text style={styles.userName}>{dataLocal?.name} </Text>
                <View
                    style={{
                        backgroundColor: Colors.WHITE,
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                    }}>
                    <UselessTextInput
                        multiline
                        plachodel='Ban dang nghi gi'
                        numberOfLines={6}
                        onChangeText={(text:any) => setConten(text)}
                        value={conten}
                    />
                </View>
                <View>
                    {/* <Camera/> */}
                </View>
                <View style={styles.userBtnWrapper}>
                    <TouchableOpacity style={styles.userBtn} onPress={() => distPatchPost(getTokent,conten) }>
                        <Image
                            style={{ width: wp(5), height: wp(5), marginHorizontal: wp(1) }}
                            source={CHATLOVE}
                        />
                        <Text style={styles.userBtnTxt}>Đăng Post</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

const UselessTextInput = (props: any) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={1000}
            placeholder='Bạn đang nghĩ gi'
            keyboardType='default'
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F4F7',
    },
    textInput: {
        width: wp(96),
        backgroundColor: Colors.WHITE,
        marginHorizontal: wp(2),
        borderWidth: 0.5,
        borderColor: Colors.BLUE,
        borderRadius: wp(5),
        marginVertical: hp(1)
    },
    userImg: {
        height: hp(20),
        width: hp(20),
        borderRadius: hp(20),
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
