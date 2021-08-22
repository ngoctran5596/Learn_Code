import { Colors, MENU, FACEBOOK, NOTIFICATION, USER, STUDYROUTE } from '@assets'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const CardView = (props: any) => {
    const { title } = props;
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.header} onPress={()=>navigation.navigate('studyroute',title)}>
            <Image source={STUDYROUTE} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
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
        width: wp(90),
        height: wp(40),
        margin: wp(5),
        resizeMode: 'cover',
        borderRadius: wp(4)
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
        top: hp(10),
        left: wp(1),
        backgroundColor: Colors.BLUE,
        color: 'white',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 10,
        padding:10,
    }
})
