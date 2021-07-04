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
        .get(
           'courseType'
        )
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
      console.log('actactactactact',act.payload);
      return $axios.config
        .get(
           `courses/type/${act.payload.id}`
        )
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


