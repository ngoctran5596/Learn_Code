import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  LoginView, Home, Chat, Note, CoursesDetail, ProfileScreen, Setting, Splash, PostNewsScreen, Questions } from '@screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import {
  BottomNavigationOptionChat,
  BottomNavigationOptionHome,
  BottomNavigationOptionNote,
} from '@components';

const [isLoading, setIsLoading] = React.useState(false)

const Stack = createStackNavigator();


const getMyStringValue = async () => {
  try {
    let check = await AsyncStorage.getItem('ACCESS-Token')
    if (check) return setIsLoading(true)

  } catch (e) {
    console.log('ERORRORNavigation', e);
  }
}


const HomeStack = createStackNavigator();

export const HomeCourse = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeCourse">
      <HomeStack.Screen
        name="HomeCourse"
        options={{ headerShown: false }}
        component={Home}
      />
      <HomeStack.Screen
        name="CourseDetail"
        options={{ headerShown: false }}
        component={CoursesDetail}
      />
      <HomeStack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />

    </HomeStack.Navigator>
  );
};
const BottomStack = createBottomTabNavigator();

export const MyHome = () => {
  React.useEffect(() => { getMyStringValue() }, [])
  return (
    <BottomStack.Navigator initialRouteName="Home">
      <BottomStack.Screen
        name="Home"
        options={BottomNavigationOptionHome}
        component={HomeCourse}
      />
      <BottomStack.Screen
        name="Chat"
        options={BottomNavigationOptionChat}
        component={Chat}
      />
      <BottomStack.Screen
        name="Note"
        options={BottomNavigationOptionNote}
        component={Note}
      />
    </BottomStack.Navigator>
  );
};
const StackApp = createStackNavigator();
export const MyApp = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Login'>
        <StackApp.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
       <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginView}
      />
        <StackApp.Screen
          name="MyHome"
          options={{ headerShown: false }}
          component={MyHome}
        />
        <StackApp.Screen
          name="Setting"
          options={{ headerShown: false }}
          component={Setting}
        />
        <StackApp.Screen
          name="PostNews"
          options={{ headerShown: false }}
          component={PostNewsScreen}
        />
          <StackApp.Screen
          name="Questions"
          options={{ headerShown: false }}
          component={Questions}
        />
        
      </StackApp.Navigator>
    </NavigationContainer>
  );
};
