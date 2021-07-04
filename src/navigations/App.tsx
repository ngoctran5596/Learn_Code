import {
  BottomNavigationOptionChat,
  BottomNavigationOptionHome,
  BottomNavigationOptionNote
} from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat, CoursesDetail, Home, LoginView, Note, PostNewsScreen, ProfileScreen, Questions, Setting, Splash } from '@screens';
import * as React from 'react';


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
      <StackApp.Navigator initialRouteName='Splash'>
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

      </StackApp.Navigator>
    </NavigationContainer>
  );
};
