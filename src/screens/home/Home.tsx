import { Colors, LIKE, MENU, NOTIFICATION } from '@assets';
import {
    ButtonCustom,
    HeaderNav,
    HeaderNavCP,
    HeaderNews,
    PostComponent,
    TextField,
    VirtualizedView,
} from '@components';
import React from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput ,ScrollView} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { PostNews } from '@components';
import { HomeLogic } from './Home.Logic';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import { styles } from './style';


export const Home = (props: any) => {
    const {
        dataPost,
        bottomSheetRef,
        butomsheet,
        commentDispatch,
        fall,
        onclickComment,
        onPress,
        dataCourses,
        onPressProfile,
        onPressPostNews,
        user,
        commentText,
        setCommentText,
        idPost,Like,setLike,onRefresh,isFetching
    } = HomeLogic(props);

    
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
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
        <View style ={{flex:1}}>
            <View>
                <HeaderNavCP
                    imgNotification={NOTIFICATION}
                    imgMenu={MENU}
                    img={user?.image}
                    title="Home"
                    onPressProfile={onPressProfile}
                />
                <PostNews
                    onPress={onPressPostNews}
                    icon={user?.image}
                    text="Bạn đang nghĩ gì ?"
                />
            </View>

            {dataCourses ? (
               
                <VirtualizedView style={{ marginTop: hp(1) }} onRefresh={onRefresh} isFetching={isFetching}>
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
                                    onClick={() => onPress(item._id,item.name)}
                                />
                            );
                        }}
                    />
                    <Text style={styles.text}>Bài Đăng</Text>

                    <FlatList
                        keyExtractor={(item: any, index: any) => index.toString()}
                        data={dataPost}
                        renderItem={({ item }) => {
                            // let idLike = item?.like?.userId?._id;
                            // let idUser = user?.user?.id;
                            // // if(idLike === idUser){
                            // //     setLike(true);
                            // // }else{
                                
                            // // }
                            // idLike === idUser ?setLike(true):setLike(false)
                            return (
                                <PostComponent
                                    onclickComment={() => onclickComment(item?._id)}
                                    classa={item?.typeClassId?.name}
                                    description={item?.description}
                                    nameUser={item?.userId?.name}
                                    imagePost={item?.image}
                                    image={item?.userId?.image}
                                    imageLike={LIKE}
                                    like={Like}
                                    numberComment={item?.comment?.length}
                                    numberLike={item?.like?.length}
                                    content={item?.comment}
                                />
                            );
                        }}
                    />
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
