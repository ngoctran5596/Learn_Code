import {
  Colors,
  MENU,
  USER,
  NOTIFICATION,
  COMMENT,
  SHARE,
  LIKED,
  LIKEDD,
} from '@assets';
import React from 'react';
import {Alert, Button, TouchableOpacity} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import {socketURL} from '@api';

export const PostComponent = (props: any) => {
  const navigation = useNavigation();
  const [isLoadComment, setIsLoadComment] = React.useState(false);
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const {
    nameUser,
    userId,
    image,
    imageLike,
    classType,
    onclickComment,
    description,
    numberComment,
    content,
    imagePost,
    onDelete,
    onClickLike,
    numberLike,
    like,
    onEdit,
    item,
    postByUser,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', ...styles.shadow}}>
          <Image
            source={{uri: image.replace('http://localhost:3000', socketURL)}}
            style={styles.avatar}
          />
          <Text numberOfLines={2} style={styles.text}>
            {nameUser} {'>'}{' '}
            <Text style={{color: Colors.PURPLE}}>{classType}</Text>
          </Text>
          {userId === postByUser ? (
            <TouchableOpacity
              style={styles.userBtnSting}
              onPress={() => setIsShowMenu((prev: any) => !prev)}>
              <Text style={styles.userBtnTxt}>...</Text>
            </TouchableOpacity>
          ) : null}

          {isShowMenu ? (
            <View
              style={{
                width: wp(20),
                height: hp(11),
                position: 'relative',
                top: 10,
                right: -30,
                flexDirection: 'column',
                opacity: 0.9,
                backgroundColor: Colors.PURPLE,
                padding: 5,
                borderRadius: 5,
              }}>
              <View>
                <TouchableOpacity
                  style={{height: hp(5), backgroundColor: '#bfb7f7'}}
                  onPress={onDelete}
                  key={1}>
                  <Text
                    style={{
                      ...styles.text,
                      color: 'white',
                      position: 'relative',
                    }}>
                    Xóa bài
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{height: hp(5), backgroundColor: '#adf4db'}}
                  onPress={() => navigation.navigate('editPost',item)}
                  key={1}>
                  <Text
                    style={{
                      ...styles.text,
                      color: 'black',
                      position: 'relative',
                    }}>
                    Sua bài
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>

        <View>
          <Hyperlink
            onPress={(url, text) =>
              navigation.navigate('webViewApp', {url: url})
            }
            linkStyle={{color: '#2980b9', fontSize: 20}}>
            <Text numberOfLines={3} style={{padding: 10}}>
              {description}
            </Text>
          </Hyperlink>
        </View>
        {imagePost ? (
          <View style={{width: '100%', height: hp(30), marginVertical: hp(2)}}>
            <Image
              source={{
                uri: imagePost.replace('http://localhost:3000', socketURL),
              }}
              style={styles.img}
            />
          </View>
        ) : null}
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
            <Text style={{marginHorizontal: wp(1)}}>
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
            <Image source={like ? LIKEDD : imageLike} style={styles.icon} />
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
              console.log('item comment', item);
              return (
                <View style={styles.showComent} key={index}>
                  <Image
                    source={{
                      uri: item?.userId?.image?.replace(
                        'http://localhost:3000',
                        socketURL,
                      ),
                    }}
                    style={styles.iconCmt}
                  />
                  <View>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                      {item?.userId?.name}
                    </Text>
                    <Text style={{fontSize: 12}}>{item?.content}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
        <View style={styles.comment}>
          <TouchableOpacity
            style={styles.comment}
            onPress={onclickComment}>
            <Text style={{textAlignVertical: 'center', marginLeft: 10}}>
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
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  img: {width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20},
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
    marginHorizontal: 2,
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
    fontSize: 14,
    fontWeight: 'bold',
    margin: wp(2),
    alignItems: 'center',
  },
  like: {
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  userBtnSting: {
    width: wp(10),
    height: wp(5),
    borderRadius: wp(2),
    backgroundColor: Colors.BLUE,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  userBtnTxt: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  showComent: {
    flexDirection: 'row',
    marginVertical: hp(0.5),
    padding: hp(2),
    backgroundColor: '#f0f2f5',
    borderRadius: wp(2),
  },
  comment: {
    width: '100%',
    height: hp(5),
    borderRadius: wp(2),
    borderWidth: 0.5,
  },
  shadow: {
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
