import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderNav, HeaderNews,CardView, PostComponent ,CoursesDetailComponent} from '@components'
import { BACK } from '@assets'
import { WebviewLogic } from './Webview.Logic'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import {Colors} from '@assets'
import { WebView } from 'react-native-webview';

export const WebviewView = (props: any) => {
    const {onPress,url}: any = WebviewLogic(props);

    return (
        <View style={styles.container}>
            <View style={{height:heightPercentageToDP(12)}}>
                <HeaderNav title='News' imgMenu={BACK} setMyScreen={onPress}/>
            </View>
            <WebView source={{ uri:url }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        width:'98%'
    },
    text: {
        fontWeight: 'bold',
        fontSize:20 ,
        padding: 10,
        backgroundColor:Colors.WHITE
      },
})
