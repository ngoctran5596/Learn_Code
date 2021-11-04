import { Colors, MENU, FACEBOOK, NOTIFICATION, USER } from '@assets'
import React from 'react'
import { ScrollView, Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const HeaderNavCopy = (props: any) => {
    const { title, img, imgMenu, imgNotification, onPressProfile, setMyScreen, imgSetting, onGoBack } = props;
    return (
        <View style={styles.container}>
            <View style={{ paddingBottom: 20 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onPressProfile()}>
                        {img ? <Image style={styles.imageAvatar} source={{ uri: img }} /> : (<Image style={styles.image} source={imgSetting} />)}
                    </TouchableOpacity>
                    <Text style={styles.text}>{title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            {imgNotification ? <Image style={styles.image} source={imgNotification} /> : <Text></Text>}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: wp(100),
        padding: 10,
        height: hp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderBottomEndRadius: wp(8),
        borderBottomStartRadius: wp(8),
        elevation: 10,
        shadowColor: Colors.PURPLE,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    image: {
        width: wp(6),
        height: wp(6),
        margin: 10,
        // color: '#f7a535'
    },
    imageAvatar: {
        width: wp(7),
        height: wp(7),
        borderRadius: wp(5),
        margin: 10,

    }
    , text: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        alignItems: 'center',
        color: Colors.PURPLE
    }
})
