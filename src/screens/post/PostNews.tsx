
import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView, Button
} from 'react-native';
import { Camera } from '@components'
import { FormButton, HeaderNav } from '@components';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { BACK, CHAT, CHATLOVE, Colors, MENUUSER, SETTING } from '@assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PostLogic } from './Post.Logic';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';


export const PostNewsScreen = (props: any) => {
    const { pickerRef,selectedLanguage, setSelectedLanguage,handleChoosePhoto,dataCourses, photo, takePicture, image, cameraLoad, loadCamera, setLoadCamera, dataLocal, getTokent, conten, onPress, posts, getData, onPressSetting, setConten, distPatchPost }: any =
        PostLogic(props);
   


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {loadCamera
                ? <Camera takePicture={takePicture} />
                : (<ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}>
                    <HeaderNav
                        setMyScreen={onPress}
                        title="Post news"
                        imgMenu={BACK}
                        onPressProfile={onPressSetting}
                    />
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
                            onChangeText={(text: any) => setConten(text)}
                            value={conten}
                        />

                    </View>
                    {photo ? photo?.map((item: any) => {
                        return <View style={{ alignItems: 'center', marginVertical: 10 }}><Image source={{ uri: item?.uri }} style={{ width: 300, height: 200, borderRadius: 12 }} /></View>
                    }) : null}
                    <View style={styles.userBtnWrapper}>

                        <TouchableOpacity style={styles.userBtn} onPress={() => setLoadCamera(true)}>
                            <Image
                                style={{ width: wp(5), height: wp(5), marginHorizontal: wp(1) }}
                                source={CHATLOVE}
                            />
                            <Text style={styles.userBtnTxt}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={handleChoosePhoto}>
                            <Image
                                style={{ width: wp(5), height: wp(5), marginHorizontal: wp(1) }}
                                source={CHATLOVE}
                            />
                            <Text style={styles.userBtnTxt}>Ch???n ???nh</Text>
                        </TouchableOpacity>
                    </View>
                    <Picker
                        
                        ref={pickerRef}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                             <Picker.Item label="Ch???n l???p b???n mu???n ????ng" value="" />
                        {dataCourses.map((item: any, index: any) => {
                            console.log('item',item,'index',index);
                            return (
                                
                                <Picker.Item label={item.name} value={item._id} key={item._id} />
                            )

                        })}
                    </Picker>
                    <View style={styles.userBtnWrapper}>
                        <TouchableOpacity style={{ ...styles.userBtn }} onPress={() => distPatchPost(getTokent, conten)}>
                            <Image
                                style={{ width: wp(5), height: wp(5), marginHorizontal: wp(1) }}
                                source={CHATLOVE}
                            />
                            <Text style={styles.userBtnTxt}>????ng Post</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>)}
        </SafeAreaView>
    );
};

const UselessTextInput = (props: any) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={1000}
            placeholder='B???n ??ang ngh?? gi'
            keyboardType='default'
        />
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        flexDirection: 'row',
        width: wp(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLUE,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        fontSize: 15,
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
