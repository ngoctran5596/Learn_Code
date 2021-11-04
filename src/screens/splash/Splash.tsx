import { BACKGROUND } from '@assets'
import React from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export const SplashApp = (props: any) => {
    const isLoading  = useSelector((state:any)=> state?.auth?.isLoading)
    React.useEffect(() => {
        setTimeout(() => {
            if(isLoading){
               return props.navigation.replace ('MyHome')
            }else{
                return props.navigation.replace ('Login')
            }
            
        }, 5000)
      
    }, [])
    return (
        <ImageBackground source={BACKGROUND} resizeMode="cover" style={{ flex: 1 }}>

        </ImageBackground>
    )
}



const styles = StyleSheet.create({})
