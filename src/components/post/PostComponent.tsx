import { Colors, MENU, USER, NOTIFICATION, COMMENT, SHARE, LIKED, LIKEDD } from '@assets';
import React from 'react';
import { TouchableOpacity } from 'react-native';
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

export const PostComponent = (props: any) => {
    const [isLoadComment, setIsLoadComment] = React.useState(false);
    const {
        nameUser,
        image,
        imageLike,
        classa,
        onclickComment,
        description,
        numberComment,
        content,
        imagePost,
        onClickLike,
        numberLike, like
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' ,...styles.shadow}}>
                    <Image source={{ uri: image }} style={styles.avatar} />
                    <Text style={styles.text}>
                        {nameUser} {'>'} {classa}{' '}
                    </Text>
                </View>
                <View>
                    <Text numberOfLines={1}>{description}</Text>
                </View>
                {imagePost ? (<View style={{ width: '100%', height: hp(30), marginVertical: hp(2) }}>
                    <Image source={{ uri: imagePost }} style={styles.img} />
                </View>) : null}
                <View
                    style={{
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: hp(5),
                    }}>
                    <View style={styles.like}>
                        <Image source={LIKED} style={styles.icon} />
                        <Text>{numberLike ? numberLike : 0}</Text>
                    </View>

                    <View style={styles.like}>
                        <Text style={{ marginHorizontal: wp(1) }}>
                            {numberComment ? numberComment : 0} comment
                        </Text>
                        <Text>share</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: hp(6),
                    }}>
                    <TouchableOpacity style={styles.like} onPress={onClickLike}>
                        <Image source={like ? LIKEDD :imageLike} style={styles.icon} />
                        <Text>like</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsLoadComment(prev => !prev)}
                        style={styles.like}>
                        <Image source={COMMENT} style={styles.icon} />
                        <Text>{numberComment ? numberComment : ''}comment</Text>
                    </TouchableOpacity>
                    <View style={styles.like}>
                        <Image source={SHARE} style={styles.icon} />
                        <Text>share</Text>
                    </View>
                </View>
                {isLoadComment ? (
                    <View
                        style={{
                            flexDirection: 'column',
                        }}>
                        {content?.map((item: any, index: any) => {
                            return (
                                <View style={styles.like} key={index}>
                                    <Image
                                        source={{ uri: item?.userId?.image }}
                                        style={styles.icon}
                                    />
                                    <Text>{item?.content}</Text>
                                </View>
                            );
                        })}
                    </View>
                ) : null}
                <View style={styles.comment}>
                    <TouchableOpacity
                        style={styles.comment}
                        onPress={() => onclickComment()}>
                        <Text style={{ textAlignVertical: 'center', marginLeft: 10 }}>
                            Comment
                        </Text>
                    </TouchableOpacity>
                </View>

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

    img: { width: '100%', height: '100%', resizeMode:"cover", borderRadius: 20 },
    icon: {
        width: wp(5),
        height: wp(5),
        resizeMode: 'cover',
        marginHorizontal: wp(1),
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
