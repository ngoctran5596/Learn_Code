import React from 'react'
import { CHAT, Colors, HOME, NOTES } from '@assets'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconImage } from '../icon'



export const BottomNavigationOptionHome = (text: any, icon: any) => {
  return {
    tabBarIcon: ({ focused }: any) => (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? Colors.PURPLE : Colors.OVERLAY,
          }}
        />
        <Text
          style={{ color: focused ? Colors.PURPLE : Colors.OVERLAY, fontSize: 12 }}>{text}</Text>
      </View>
    ),
  }
}
export const BottomNavigationHome = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity  style={{ top: -35, justifyContent: 'center', alignItems: 'center', ...styles.shadow }} onPress={onPress}>
      <View style={{ width: 60, height: 60, borderRadius: 35, backgroundColor: Colors.PURPLE }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.PURPLE,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})
