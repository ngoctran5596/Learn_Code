import { Colors, MENU, USER, NOTIFICATION, COMMENT, SHARE, LIKED } from '@assets'
import React from 'react'
import { ScrollView, Image, StyleSheet, Text, View, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const PostComponent = (props: any) => {
    const { title, image, imageLike, classa, description, numberlike, numberComment, content } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: image }} style={styles.avatar} />
                    <Text style={styles.text}>{title} {'>'} {classa} </Text>

                </View>
                <View>
                    {/* <Text>{description.length > 50 ? description.slice(0,20 ) + '...' : description}</Text> */}
                    <Text numberOfLines={1}>{description}</Text>
                </View>

                <View style={{ width: '100%', height: '50%', marginVertical: hp(2) }}>
                    <Image source={{ uri: image }} style={styles.img} />
                </View>
                <View style={{
                    borderBottomWidth: 1, flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={styles.like}>
                        <Image source={LIKED} style={styles.icon} />
                        <Text>{numberlike ? numberlike : 0}</Text>
                    </View>

                    <View style={styles.like}>
                        <Text style={{ marginHorizontal: wp(1) }}>{numberComment ? numberComment : 0} comment</Text>
                        <Text>{numberlike ? numberlike : 0} share</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={styles.like}>
                        <Image source={imageLike} style={styles.icon} />
                        <Text>like</Text>
                    </View>

                    <View style={styles.like}>
                        <Image source={COMMENT} style={styles.icon} />
                        <Text>{numberComment ? numberComment : ''}comment</Text>
                    </View>
                    <View style={styles.like}>
                        <Image source={SHARE} style={styles.icon} />
                        <Text>share</Text>
                    </View>
                </View>
                <View style={{
                    height:hp(10),
                    flexDirection: 'column',
                }}>
                    {content?.map((item: any) => {
                        return <View style={styles.like}>
                            <Image source={imageLike} style={styles.icon} />
                            <Text>{item.content}</Text>
                        </View>
                    })}
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: hp(2),
    },
    header: {
        width: wp(100),
        paddingVertical: hp(3),
        paddingHorizontal: wp(2),
        height: hp(60),
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },

    img: { width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20 },
    icon: { width: wp(5), height: wp(5), resizeMode: 'cover', marginHorizontal: wp(1) },
    avatar: { width: wp(10), height: wp(10), resizeMode: 'cover', borderRadius: wp(10) },

    imageAvatar: {
        width: wp(5),
        height: wp(5),
        borderRadius: wp(5),
        margin: 10,

    }
    , text: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: wp(2),
        alignItems: 'center',
    }, like: {
        flexDirection: 'row', marginVertical: hp(1),
    }
})
