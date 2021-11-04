import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native';
import {data} from '../../data/Data'

export const studyrouteLogic = (props: any) => {

    const value = props.route.params;
    const dataAll = data.filter((item:any)=>item.value === value);
    const list = dataAll[0]?.youtube;

  const onPress =(id:any)=>{
      props.navigation.navigate('studyrouteDetail',{id,name:value})
  }
  const onScreen =(id:any)=>{
    props.navigation.goBack();
}

    return {
       list,onPress,
       onScreen
    };
}


const styles = StyleSheet.create({})
