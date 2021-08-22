import { ADD, CHAT, Colors, HOME, NOTES, PROFILE } from '@assets';
import { BottomNavigationHome, BottomNavigationOptionHome } from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ChatsScreen,
  CoursesDetail,
  studyrouteHome,
  MessageScreen,
  studyrouteDetail,
  Home,
  LoginView,
  Note,
  PostNewsScreen,
  ProfileScreen,
  Questions,
  Setting,
  Splash,
} from '@screens';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

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
  return (
    <BottomStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'relative',
          bottom: 10,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <BottomStack.Screen
        name="Home"
        options={BottomNavigationOptionHome('Home', HOME)}
        component={HomeCourse}
      />
      <BottomStack.Screen
        name="Chat"
        options={BottomNavigationOptionHome('Chat', CHAT)}
        component={ChatsScreen}
      />
       <BottomStack.Screen
        name="Class"
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Image
              source={ADD}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#ffffff' : '#ffffff',
              }}
            />

          ),
          tabBarButton: (props) => (
            <BottomNavigationHome {...props} />
          )


        }}
        component={Note}
      />
      <BottomStack.Screen
        name="Note"
        options={BottomNavigationOptionHome('Note', NOTES)}
        component={Note}
      />
     

      <BottomStack.Screen
        name="Profile"
        options={BottomNavigationOptionHome('Profile', PROFILE)}
        component={Note}
      />
    </BottomStack.Navigator>
  );
};
const StackApp = createStackNavigator();
export const MyApp = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Splash">
        <StackApp.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <StackApp.Screen
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
        <StackApp.Screen
          name="Message"
          options={{ headerShown: false }}
          component={MessageScreen}
        />

        <StackApp.Screen
          name="studyroute"
          options={{ headerShown: false }}
          component={studyrouteHome}
        />
        <StackApp.Screen
          name="studyrouteDetail"
          options={{ headerShown: false }}
          component={studyrouteDetail}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.PURPLE,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
