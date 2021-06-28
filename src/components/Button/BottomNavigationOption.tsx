import React from 'react'
import { CHAT, HOME, NOTES } from '@assets'
import { Image, StyleSheet, Text, View } from 'react-native'
import {IconImage} from '../icon'

export const BottomNavigationOptionHome = (props:any) => {
    return {
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <IconImage source={HOME} color={'#3599D0'}/>
        ),
      }
}
export const BottomNavigationOptionChat = (props:any) => {
    return {
        tabBarLabel: 'Chat',
        tabBarIcon: () => (
          <IconImage source={CHAT} color={'#3599D0'}/>
        ),
      }
}
export const BottomNavigationOptionNote = (props:any) => {
    return {
        tabBarLabel: 'Note',
        tabBarIcon: () => (
          <IconImage source={NOTES} color={'#3599D0'}/>
        ),
      }
}


const styles = StyleSheet.create({})
