import React from "react";
import { Button, View, Alert, FlatList, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { HeaderNav } from "@components";
import { studyrouteLogic } from "./studyroute.logic";

export function studyrouteHome(props: any) {
  const {list,onPress} = studyrouteLogic(props);

  return (
    <View style={{flex:1}}>
      <View style={{height:100}}> 
      <HeaderNav title="Lộ trình học"/>
      </View>
     
      <FlatList
      keyExtractor={(item: any, index: any) => index.toString}
      data={list}
      renderItem={({ item, index }) => {
        console.log('itemitemitem',item)
        return (
          <TouchableOpacity style={{ width: wp(100), height: hp(10) }} onPress={()=>onPress(item.id)}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              padding: 10,
              marginVertical: hp(1),
              backgroundColor: '#f7a535'
            }} >Bài {index + 1}</Text>
          </TouchableOpacity>
        )
      }}
      />
      
    </View>
  );
}
