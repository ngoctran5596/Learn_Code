import * as React from 'react';
import { ChatInput, HeaderMessage } from '@components';
// import { sendTouserMessage } from '@screens';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MessageLogic } from './Message.Logic';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const MessageScreen = (props: any) => {

  const scrollRef = React.createRef<ScrollView>();
  const { routerParams, onPress, activeRoomMgs, message, onchange, txtMsg } =
    MessageLogic(props);

  console.log("messagemessagemessagemessagemessage", message);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: heightPercentageToDP(10) }}>
        <HeaderMessage
          imageUser={routerParams.image}
          nameUser={routerParams.name}
        />
      </View>
      <View style={{ flex: 1, paddingTop: 5 }}>
        {message.length > 0
          ? (
            <ScrollView
            ref={scrollRef}
              onContentSizeChange={() => {
                scrollRef.current?.scrollToEnd({animated: true})
              }}
              showsVerticalScrollIndicator={false}
              onLayout={() => {
                scrollRef.current?.scrollToEnd({animated: true})
              }}
            >
              {message.map(({ txtMsg, sender }: any, index: any) => (
                <React.Fragment key={index}>
                  <RenderItem {...{ txtMsg, sender }} />
                </React.Fragment>
              ))}
            </ScrollView>)
          : (
            <View
              style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text>Start chatting ...</Text>
            </View>
          )}
      </View>
      <View>
        <ChatInput
          txtMsg={txtMsg}
          onChangeText={(text: any) => onchange(text)}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const RenderItem = ({ txtMsg, sender }: any) => {
  return (
    <TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: sender ? 'flex-end' : 'flex-start',
        paddingHorizontal: 10,
      }}>
        <View style={{
          marginBottom: 10,
          paddingVertical: 5,
          paddingHorizontal: 5,
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: sender ? 'blue' : 'white',
          borderRadius: 10,
          maxWidth: 237,
          alignItems: 'center'
        }}>
          <Text numberOfLines={3}
            style={{
              fontSize: 12,
              lineHeight: 25,
              color: sender ? 'white' : 'black',
            }}>
            {txtMsg}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}