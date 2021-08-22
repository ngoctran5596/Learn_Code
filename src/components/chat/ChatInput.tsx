import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export function ChatInput(props:any) {
 const { txtMsg, onPress, onChange, loading } = props;
  return (
    <View style={styles.inputBox}>
      <TextInput
         {...props} 
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Nhập tin nhắn"
        placeholderTextColor="#666"
        autoCapitalize="none"
        value={txtMsg}
        // onChangeText={(value) => onChange(value)}
      />
      <TouchableOpacity onPress={onPress} style={styles.sendMessageButton}>
        {loading ? (
          <ActivityIndicator size={30} color="#000" style={styles.loading} />
        ) : (
          <Text style={styles.sendMessage}>Gửi</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor:'white',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  sendMessageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 15,
  },
  sendMessage: {
    fontSize: 18,
    color: '#aaa',
  },
  loading: {
    position: 'absolute',
    bottom: -5,
    right: 0,
  },
})

