import {combineEpics} from 'redux-observable';
import {getAllCourses, getCoursesDetail} from './courses/epicCourses';
import {getUser, loginUser, registerUser} from './auth/epic';
import {getAllPostEpic, commentPostEpic,likePostEpic} from './post/epicPost';
// import {chatUserListEpic} from './chat/epic';

export const rootEpic = combineEpics(
  getAllCourses,
  getUser,
  getAllPostEpic,
  loginUser,
  registerUser,
  getCoursesDetail,
  commentPostEpic,likePostEpic
  // chatUserListEpic
);
// export default rootEpic;
