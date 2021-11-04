import React from "react";
import { Button, View, Alert, FlatList, Text, TouchableOpacity,ImageBackground } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { HeaderNav } from "@components";
import { studyrouteLogic } from "./studyroute.logic";
import { BACK, BAIHOC } from "@assets";


export function studyrouteHome(props: any) {
  const { list, onPress, onScreen } = studyrouteLogic(props);

  return (
    <View style={{ flex: 1 ,backgroundColor:'#f9b294'}}>
      <View style={{ height: 100 }}>
        <HeaderNav title="Lộ trình học" imgMenu={BACK} setMyScreen={onScreen} />
      </View>


      <FlatList
        keyExtractor={(item: any, index: any) => index.toString}
        data={list}
        renderItem={({ item, index }) => {

          return (
            <ImageBackground  imageStyle={{ borderRadius: 10}} source={BAIHOC} style={{ width:'95%',height:100,marginBottom:20,marginHorizontal:'5%'}}>
              <TouchableOpacity style={{ width: wp(100), height: hp(10) ,marginHorizontal:20}} onPress={() => onPress(item.id)}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  width:70,
                  marginVertical: hp(1),
                  backgroundColor: '#f7a535',
                  borderRadius:20
                }} >Bài {index + 1}</Text>
              </TouchableOpacity>
            </ImageBackground>

          )
        }}
      />

    </View>
  );
}
