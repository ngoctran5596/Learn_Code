import { Colors, MENU, FACEBOOK, NOTIFICATION, USER } from '@assets'
import React from 'react'
import { ScrollView, Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const CardView = (props: any) => {
    const { title, img, imgMenu, imgNotification, onPressProfile, setMyScreen, imgSetting, onGoBack } = props;
    return (
        <TouchableOpacity style={styles.header}>
            <Text></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    image: {
        width: wp(6),
        height: wp(6),
        margin: 10,
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
    }
})
