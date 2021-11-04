import {combineEpics} from 'redux-observable';
import {
  getAllCourses,
  getCoursesDetail,
  createCoures,
  addStudentCoures,
  getCoursesByIdUser,
} from './courses/epicCourses';
import {getUser, loginUser, registerUser} from './auth/epic';
import {createNote, getAllNote} from './note/epicNote';
// import {chatUserListEpic} from './chat/epic';
import {getAllPostEpic, commentPostEpic, LikePost} from './post/epicPost';
import {createDocument, getAllDocument} from './document/epicDocument';
// import {chatUserListEpic} from './chat/epic';

export const rootEpic = combineEpics(
  getAllCourses,
  getUser,
  getAllPostEpic,
  loginUser,
  registerUser,
  getCoursesDetail,
  commentPostEpic,
  LikePost,
  createCoures,
  createNote,
  getAllNote,
  addStudentCoures,
  getCoursesByIdUser,
  createDocument,
  getAllDocument,
  // chatUserListEpic
);
// export default rootEpic;
