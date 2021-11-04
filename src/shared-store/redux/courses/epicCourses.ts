import {coursesActions, typesCoures} from './actionCourses';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {$axios} from '@api';

export const getAllCourses = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.GET_ALL_COURSES),
    mergeMap((act: any) => {
      return $axios.config
        .get('courseType')
        .then((rs: any) => {
          const {data} = rs;
          return coursesActions.getAllCoursesSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.getAllCoursesFailure(err);
        });
    }),
  );
};

export const getCoursesDetail = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.GET_COURSES_DETAIL),
    mergeMap((act: any) => {
      console.log('getCoursesDetailgetCoursesDetail', act.payload);
      return $axios.config
        .get(`courses/type/${act.payload}`)
        .then((rs: any) => {
          const {data} = rs;
          return coursesActions.getCoursesDetailSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.getCoursesDetailFailure(err);
        });
    }),
  );
};

export const createCoures = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.CREATE_COURSES),
    mergeMap((act: any) => {
      console.log('actactactactactcreateCourescreateCoures', act.payload);
      return $axios.config
        .post(`courses/addCourse`, act.payload)
        .then((rs: any) => {
          const {data} = rs;
          return coursesActions.createCoursesSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.createCoursesFailure(err);
        });
    }),
  );
};

export const getCoursesByIdUser = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.COURSE_BY_ID),
    mergeMap((act: any) => {
      console.log('getCoursesDetailgetCoursesDetail', act.payload);
      return $axios.config
        .get(`courses/userId/${act.payload}`)
        .then((rs: any) => {
          const {data} = rs;
          return coursesActions.getCourseByUserIdSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.getCourseByUserIdFailure(err);
        });
    }),
  );
};

export const addStudentCoures = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.ADD_STUDENT_COURSE),
    mergeMap((act: any) => {
      const data = act.payload.userId;
      return $axios.config
        .put(`courses/addStudent/${act.payload.id}`, {userId: act.payload.userId})
        .then((rs: any) => {
          const {data} = rs;
          console.log('addStudentCouresaddStudentCouresaddStudentCoures', data);
          return coursesActions.addStudentSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.addStudentFailure(err);
        });
    }),
  );
};
