import {combineEpics} from 'redux-observable';
import {getAllCourses} from './courses/epicCourses';
import {getUser} from './auth/epic';
import {createPostEpic} from './post/epicPost';

export const rootEpic = combineEpics(getAllCourses,getUser,createPostEpic);
// export default rootEpic;
