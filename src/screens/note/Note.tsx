import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderNav } from '@components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { noteActions } from '../../shared-store/redux'
import { ADD, ADDPLUS, BACK } from '@assets'
import moment from 'moment'



export const Note = (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state?.auth?.user.user);
    const data = useSelector((state: any) => state?.note?.allNote);
    const setMyScreen = () => {
        props.navigation.goBack();
    }
    const [isFetching, setIsFetching] = React.useState(false);
    const onRefresh = () => {
        setIsFetching(true);
        dispatch(noteActions.getAllNote({ userId: user.id }));
        setIsFetching(false);
    }
    // const [data, setData] = React.useState([])
    React.useEffect(() => {
        dispatch(noteActions.getAllNote({ userId: user.id }))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 100 }}>

                <HeaderNav title='Note' imgMenu={BACK} setMyScreen={setMyScreen} />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    onRefresh={() => onRefresh}
                    refreshing={isFetching}
                    keyExtractor={(item: any, index: any) => index.toString()}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{margin:10,backgroundColor:'#ffffff'}} >
                                <Text style={{ fontSize: 12 }}>{moment(item.createdAt).format("DD/MM/YYYY")}</Text>
                                <Text style={{ fontSize: 16 }}>{item.description}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />

            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('NoteHand')}
                style={{
                    margin: 5,
                    width: 35,
                    height: 35,
                    borderRadius: 15,
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 10,
                    right: 0,
                }}>
                <Image source={ADDPLUS} style={{ width: 35, height: 35 }} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({})
