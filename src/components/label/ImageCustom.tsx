import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { socketURL } from '@api'

export const ImageCustom = (props: any) => {
    return (
            <Image style={styles.imge} source={{ uri: props?.img?.replace('http://localhost:3000', socketURL) }} />
    )
}



const styles = StyleSheet.create({
    imge: {
        height: 150,
        width: 150,
        borderRadius: 75,
    }
})
