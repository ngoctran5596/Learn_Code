import { LIKE, MENU, NOTIFICATION } from '@assets';
import {
    HeaderNav,
    HeaderNews, PostComponent, VirtualizedView
} from '@components';
import React from 'react';
import {
    ActivityIndicator, FlatList, Text,
    View
} from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP
} from 'react-native-responsive-screen';
import { PostNews } from '@components';
import { HomeLogic } from './Home.Logic';
import { styles } from './style';

export const Home = (props: any) => {
    const { data, onPress, dataLocal, dataTest, onPressProfile, onPressPostNews }: any = HomeLogic(props);
    return (
        <View>
            <View>
                <HeaderNav imgNotification={NOTIFICATION} imgMenu={MENU} img={dataLocal?.image} title="Home" onPressProfile={onPressProfile} />
                <PostNews onPress={onPressPostNews} icon={dataLocal?.image} text='Bạn đang nghĩ gì ?' />
            </View>

            {dataTest ? (
                <VirtualizedView style={{ marginTop: hp(1) }} >
                    <Text style={styles.text}>Khóa học</Text>
                    <FlatList
                        keyExtractor={(item: any, index: any) => index.toString()}
                        data={data}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <HeaderNews
                                    title={item.name}
                                    image={item.image}
                                    onClick={onPress}
                                />
                            );
                        }}
                    />
                    <Text style={styles.text}>Bài Đăng</Text>

                    <FlatList
                        keyExtractor={(item: any, index: any) => index.toString()}
                        data={dataTest}
                        renderItem={({ item }) => {
                            return (
                                <PostComponent
                                    classa={item.typeClassId?.name}
                                    description={item.description}
                                    title={item.title}
                                    image={item.image}
                                    imageLike={LIKE} numberComment={item.comment.length}
                                    content={item.comment}
                                />
                            );
                        }}
                    />
                </VirtualizedView>
            ) : (
                <View style={{ width: widthPercentageToDP(100), height: hp(50), justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size='large'
                        color="red"
                    />
                </View>

            )}
        </View>
    );
};
