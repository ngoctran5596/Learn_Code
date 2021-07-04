import {combineEpics} from 'redux-observable';
import {getAllCourses, getCoursesDetail} from './courses/epicCourses';
import {getUser, loginUser, registerUser} from './auth/epic';
import {getAllPostEpic, commentPostEpic} from './post/epicPost';

export const rootEpic = combineEpics(
  getAllCourses,
  getUser,
  getAllPostEpic,
  loginUser,
  registerUser,
  getCoursesDetail,
  commentPostEpic,
);
// export default rootEpic;
