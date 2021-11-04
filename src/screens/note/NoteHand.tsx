import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const NoteHand = () => {
    return (
        <View>
            <TextInput placeholder="hay ghi gi do nao" numberOfLines={20} style={styles.input}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        borderWidth:0.5,
         marginTop:2,
         
    }
})
