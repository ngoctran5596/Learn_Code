import { combineReducers } from 'redux';
import { coursesReducer } from './courses/reducerCourses';
import { postReducer } from './post/reducerPost';
import { UserReducer } from './auth/reducer';

export const rootReducer = combineReducers({
  courses:coursesReducer,
  post:postReducer,
  auth :UserReducer,
});
