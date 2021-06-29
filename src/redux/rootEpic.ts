import {combineEpics} from 'redux-observable';
import {getAllCourses} from './courses/epicCourses';
import {getUser} from './auth/epic';
import {getAllPostEpic} from './post/epicPost';

export const rootEpic = combineEpics(getAllCourses,getUser,getAllPostEpic);
// export default rootEpic;
