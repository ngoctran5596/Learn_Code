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
};

const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

store.subscribe(() => {
  console.log('state', store.getState());
});
export const persistor = persistStore(store);