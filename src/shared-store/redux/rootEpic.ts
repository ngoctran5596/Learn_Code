import {combineEpics} from 'redux-observable';
import {getAllCourses} from './courses/epicCourses';
import {getUser,loginUser,registerUser} from './auth/epic';
import {getAllPostEpic,commentPostEpic} from './post/epicPost';

export const rootEpic = combineEpics(getAllCourses,getUser,getAllPostEpic,loginUser,registerUser,commentPostEpic);
// export default rootEpic;
