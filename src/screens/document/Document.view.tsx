import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderNav, HeaderNews, CardView, PostComponent, CoursesDetailComponent, DocumentComponent } from '@components'
import { BACK } from '@assets'
import { DocumentLogic } from './Document.Logic'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Colors } from '@assets'

export const DocumentView = (props: any) => {
    const { setMyScreen, data, title }: any = DocumentLogic(props);

    return (
        <View style={styles.container}>
            <View style={{ height: heightPercentageToDP(12) }}>
                <HeaderNav title={title} imgMenu={BACK} setMyScreen={setMyScreen} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                       <DocumentComponent image={item.userId.image} description={item.description}/>
                    )

                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        width: '98%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        backgroundColor: Colors.WHITE
    },
})
