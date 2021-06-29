import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { MyApp } from '@navigations';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';



export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}