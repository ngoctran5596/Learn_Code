import { Colors, MENU, USER, NOTIFICATION, COMMENT, SHARE, LIKED, LIKEDD } from '@assets';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export const DocumentComponent = (props: any) => {
    const navigation = useNavigation();

    const {
        image,  
        classType,
        description,
        imagePost,
       
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', ...styles.shadow }}>
                    <Image source={{ uri: image }} style={styles.avatar} />
                    <Text style={styles.text}>
                       Tai lieu <Text style={{ color: Colors.PURPLE }}>{classType}</Text>
                    </Text>
                </View>
                <View>
                    <Hyperlink onPress={ (url, text) =>navigation.navigate("webViewApp",{url:url})} linkStyle={{ color: '#2980b9', fontSize: 20 }}>
                        <Text numberOfLines={3} style={{ padding: 10 }}>{description}</Text>
                    </Hyperlink>

                </View>
                {imagePost ? (<View style={{ width: '100%', height: hp(30), marginVertical: hp(2) }}>
                    <Image source={{ uri: imagePost.replace('http://localhost:3000', 'http://172.20.10.6:3000') }} style={styles.img} />
                </View>) : null}
                
                </View>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: hp(2),
    },
    header: {
        width: wp(100),
        paddingVertical: hp(3),
        paddingHorizontal: wp(2),
        // height: hp(60),
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        elevation: 10,
        shadowColor: Colors.PURPLE,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },

    img: { width: '100%', height: '100%', resizeMode: "cover", borderRadius: 20 },
    icon: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'cover',
        marginHorizontal: wp(1),
    },
    iconCmt: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        borderRadius: 30,
        marginHorizontal: 2
    },
    avatar: {
        width: wp(10),
        height: wp(10),
        resizeMode: 'cover',
        borderRadius: wp(10),
    },

    imageAvatar: {
        width: wp(5),
        height: wp(5),
        borderRadius: wp(5),
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: wp(2),
        alignItems: 'center',
    },
    like: {
        flexDirection: 'row',
        marginVertical: hp(1),
    },
    showComent: {
        flexDirection: 'row',
        marginVertical: hp(0.5),
        padding: hp(2),
        backgroundColor: '#f0f2f5',
        borderRadius: wp(2)
    },
    comment: {
        width: '100%',
        height: hp(5),
        borderRadius: wp(2),
        borderWidth: 0.5,
    }, shadow: {
        shadowColor: Colors.PURPLE,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
