import { combineReducers } from 'redux';
import { coursesReducer } from './courses/reducerCourses';
import { postReducer } from './post/reducerPost';
import { UserReducer } from './auth/reducer';
import { ChatReducer} from './chat';
import { noteReducer} from './note';
import { documentReducer} from './document';

export const rootReducer = combineReducers({
  courses:coursesReducer,
  post:postReducer,
  auth :UserReducer,
  chat :ChatReducer,
  note :noteReducer,
  document :documentReducer,
});
