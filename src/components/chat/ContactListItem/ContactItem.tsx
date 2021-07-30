import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { User, Group } from "../../../../types";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
  user: User;
}

export const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  let id =user._id;
  let name =user.name;
  let email =user.email;
  console.log('object', id)
  const navigation = useNavigation();

  const onClick = async () => {
    navigation.navigate('Message',{id,name,email});
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.image }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

