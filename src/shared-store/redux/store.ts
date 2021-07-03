// import {applyMiddleware, createStore} from 'redux';
// import {createEpicMiddleware} from 'redux-observable';
// import { persistStore, persistReducer } from 'redux-persist';
// import {rootReducer} from './rootReducer';
// import {rootEpic} from './rootEpic';

// const epicMiddleware = createEpicMiddleware();
// export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
// epicMiddleware.run(rootEpic);
// export const persistor = persistStore(store);


import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import {createEpicMiddleware} from 'redux-observable';
const auth = createWhitelistFilter('auth');
const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
  transform: [auth],
  // blacklist: ['movie', 'loading'],
};
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

store.subscribe(() => {
  console.log('state', store.getState());
});
export const persistor = persistStore(store);