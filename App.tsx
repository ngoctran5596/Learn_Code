import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { MyApp } from '@navigations';
import { store } from './src/redux/store';


export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyApp />
      </NavigationContainer>
    </Provider>
  )
}