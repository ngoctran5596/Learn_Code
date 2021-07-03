import {coursesActions, typesCoures} from './actionCourses';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {$axios} from '@api';

export const getAllCourses = ($action: any) => {
  return $action.pipe(
    ofType(typesCoures.GET_ALL_COURSES),
    mergeMap((act: any) => {
      console.log('acttionnnnnnnnn',act)
      return $axios.config
        .get(
           'courses'
        )
        .then((rs: any) => {
          console.log('rsrsrsrsrsrsrs',rs)
          const {data} = rs;
          return coursesActions.getAllCoursesSuccess(data);
        })
        .catch((err: any) => {
          return coursesActions.getAllCoursesFailure(err);
        });
    }),
  );
};

