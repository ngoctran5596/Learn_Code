import { Colors, LIKE, LIKEDDDD, MENU, NOTIFICATION } from '@assets';
import {
  ButtonCustom,
  CardView,
  HeaderNav,
  HeaderNavCopy,
  HeaderNews,
  PostComponent,
  TextField,
  VirtualizedView,
} from '@components';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { PostNews } from '@components';
import { HomeLogic } from './Home.Logic';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import { styles } from './style';
import { socketURL } from '@api';

export const Home = (props: any) => {
  const {
    dataPost,
    bottomSheetRef,
    butomsheet,
    commentDispatch,
    fall, onClickLike,
    onclickComment,
    onPress,
    dataCourses,
    onPressProfile,
    onPressPostNews,
    user,
    commentText,
    setCommentText,
    onEdit,
    deletePost,
    idPost,
    Like,
    setLike,
    onRefresh,
    isFetching,
    userbyid,
  } = HomeLogic(props);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 220,
      }}>
      <Text style={{ ...styles.text, fontSize: 15, color: 'black' }}>
        Kéo xuống để đóng...
      </Text>
      <TextInput
        style={{ borderWidth: 0.5 }}
        onChangeText={text => setCommentText(text)}
      />
      <ButtonCustom text="Comment" onPress={() => commentDispatch(idPost)} />
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{ height: hp(10) }}>
          <HeaderNavCopy
            imgNotification={NOTIFICATION}
            imgMenu={MENU}
            img={
              userbyid
                ? userbyid?.image?.replace('http://localhost:3000', socketURL)
                : user?.image?.replace('http://localhost:3000', socketURL)
            }
            title="Home"
            onPressProfile={onPressProfile}
          />
        </View>

        {user?.isTutor ? (
          <PostNews
            onPress={onPressPostNews}
            icon={userbyid?.image}
            text="Bạn đang nghĩ gì ?"
          />
        ) : null}
      </View>

      {dataCourses.length > 0 ? (
        <VirtualizedView
          style={{ marginTop: hp(1) }}
          onRefresh={onRefresh}
          isFetching={isFetching}>
          <Text style={styles.text}>Khóa học</Text>
          <FlatList
            keyExtractor={(item: any, index: any) => index.toString()}
            data={dataCourses}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <HeaderNews
                  title={item.name}
                  image={item.image}
                  onClick={() => onPress(item?._id, item?.name)}
                />
              );
            }}
          />
          <Text style={styles.text}>Bài Đăng</Text>
          {
            dataPost ? (<FlatList
              keyExtractor={(item: any, index: any) => index.toString()}
              data={dataPost}
              renderItem={({ item }) => {
                return item?.typeClassId?.studentId?.filter(
                  (it: any) => it === user.id,
                )?.length > 0 ? (
                  <PostComponent
                    onEdit={() => onEdit(item)}
                    userId={user?.id}
                    onDelete={() => deletePost(item?._id)}
                    onclickComment={() => onclickComment(item?._id)}
                    classType={item?.typeClassId?.name}
                    description={item?.description}
                    nameUser={item?.userId?.name}
                    postByUser={item?.userId?._id}
                    imagePost={item?.image}
                    image={item?.userId?.image}
                    imageLike={item?.like?.includes(user.id) ? LIKE : LIKEDDDD}
                    like={Like}
                    item={item}
                    onClickLike={() => onClickLike(item?._id)}
                    numberComment={item?.comment?.length}
                    numberLike={item?.like?.length}
                    content={item?.comment}
                  />
                ) : null;

              }}
            />) :
              (
                <View
                  style={{
                    marginLeft: '10%',
                    width: '80%',
                    height: 60,
                    backgroundColor: '#ffffff',
                    borderRadius: 10
                  }}>
                  <View >
                    <Text style={{ padding: 10, color: Colors.PURPLE, fontWeight: 'bold' }}>
                      Hãy tham gia vào 1 lớp học để hoạt động của chúng tôi
                    </Text>
                  </View>
                </View>
              )
          }

        </VirtualizedView>
      ) : (
        <View
          style={{
            width: widthPercentageToDP(100),
            height: hp(50),
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={butomsheet}
        callbackNode={fall}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={0}
      />
    </View>
  );
};
