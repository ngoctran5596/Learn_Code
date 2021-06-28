import {coursesActions, types} from './actionCourses';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {config} from '../../api/config';

export const getAllCourses = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_COURSES),
    mergeMap((act: any) => {
      return config
        .get(
            'courses'
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

