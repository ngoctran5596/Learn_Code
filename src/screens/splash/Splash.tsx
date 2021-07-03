import { BACKGROUND } from '@assets'
import React from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export const Splash = (props: any) => {
    React.useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 5000)
      
    }, [])
    return (
        <ImageBackground source={BACKGROUND} style={{ flex: 1 }}>

        </ImageBackground>
    )
}



const styles = StyleSheet.create({})
