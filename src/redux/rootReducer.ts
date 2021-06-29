import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import CoursesReducer from './courses/reducerCourses';
import PostReducer from './post/reducerPost';

// const rootReducer = combineReducers({
//   booksReducer: persistReducer(persistConfig, booksReducer)
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks']
};
export const rootReducer=  combineReducers({
  coursesReducer:persistReducer(persistConfig, CoursesReducer),
  postsReducer:persistReducer(persistConfig, PostReducer),
})
