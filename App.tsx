
import React from 'react';
import { Provider } from 'react-redux';
import { MyApp } from '@navigations';
// import { configureStore } from '@shared-state';
import { store, persistor } from './src/shared-store/redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';



export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <MyApp />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}