import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderNav, HeaderNews,CardView, PostComponent } from '@components'
import { BACK } from '@assets'
import { CoursesLogic } from './Courses.Logic'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import {Colors} from '@assets'

export const CoursesDetail = (props: any) => {
    const { course, setMyScreen,name }: any = CoursesLogic(props);

    return (
        <View style={styles.container}>
            <View style={{height:heightPercentageToDP(12)}}>
                <HeaderNav title='Tài liệu khóa học' imgMenu={BACK} setMyScreen={setMyScreen} />
            </View>
            <View>
                <Text style ={styles.text}>Có sẵn</Text>
              
                  <CardView title={name}/>
                
            </View>
            <Text style ={styles.text}>Tổng hợp người dạy</Text>
            <FlatList
                data={course}
                renderItem={({item}) => {
                    return (<HeaderNews styleContainer={styles.card}title={item.name} image={item.image}>
                        <Text>{item.description}</Text>
                    </HeaderNews>)
                }}
            />
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
