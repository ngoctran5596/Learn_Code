import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import {rootReducer} from './rootReducer';
import {rootEpic} from './rootEpic';


const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
export const persistor = persistStore(store);
