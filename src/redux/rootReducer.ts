import {combineReducers} from 'redux';
import CoursesReducer from './courses/reducerCourses';
import {UserReducer} from './auth/reducer';
import PostReducer from './post/reducerPost';
import {from} from 'rxjs';

export const rootReducer=  combineReducers({
  CoursesReducer,
  UserReducer,PostReducer
})
