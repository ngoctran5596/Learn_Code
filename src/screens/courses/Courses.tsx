import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderNav, PostComponent } from '@components'
import { BACK } from '@assets'
import { CoursesLogic } from './Courses.Logic'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export const CoursesDetail = (props: any) => {
    const { course, setMyScreen }: any = CoursesLogic(props);
    console.log('COURRESSSSSS',course);
    return (
        <View style={styles.container}>
            <View style={{height:heightPercentageToDP(12)}}>
                <HeaderNav title='Chi tiết khóa học' imgMenu={BACK} setMyScreen={setMyScreen} />
            </View>

            <FlatList
                data={course}
                renderItem={(item) => {
                    return (<View>
                        <Text>{item?.item?.name}</Text>
                    </View>)
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
