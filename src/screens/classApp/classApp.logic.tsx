import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native';
import {data} from '../../data/Data'

export const classLogic = (props: any) => {

    
   


  const onPress =(id:any)=>{
      props.navigation.navigate('studyrouteDetail',{id})
  }

    return {
      
    };
}


const styles = StyleSheet.create({})
