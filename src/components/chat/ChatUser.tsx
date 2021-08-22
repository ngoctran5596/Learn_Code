import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { USER } from '@assets'
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';


export const UserList = ({ _id, name, msg,image, time, email }: any) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: 10,
                backgroundColor: 'dgrey',
                alignItems: 'center',
            }}>
            <View
                style={{
                    paddingVertical: 5,
                    marginRight: 2,
                    justifyContent: 'center',
                    // position: 'relative',
                    height: 60,
                    width: 60,
                    alignItems: 'center',
                }}>
                <Image source={{uri:image}} style={{ width: '100%', height: "100%",borderRadius:120, resizeMode: 'contain' }} />
            </View>
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'column', 
                    paddingVertical: 5,
                }}>
                <Text style ={{fontSize:19,color:'black',textTransform:'capitalize'}}>{name}</Text>
                <Text style={{color:'black'}}>{msg}</Text>
            </View>
        </View>
    );
};
export const ChatUser = ( props:any) => {
    const [loadUser, setLoadUser] = React.useState(false);
    const { navigate } = useNavigation();

    React.useEffect(() => {
        setTimeout(() => {
            setLoadUser(true);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            {loadUser ? (
                <>
                    {props.userdata.length > 0 ? (
                        <FlatList
                            contentContainerStyle={{
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                            showsVerticalScrollIndicator={false}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                            data={props.userdata}
                            renderItem={({ item: { _id, name, msg,image, time, email } }) => {
                                return (
                                    <TouchableOpacity onPress={() => {navigate('Message',{_id,email,name,image})}}>
                                        <UserList {...{ _id, name, msg,image, time, email }} />
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    ) : (
                        <View>
                            <Text>No contacs</Text>
                        </View>
                    )}
                </>
            ) : (
                <ActivityIndicator size="large" color="red" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
