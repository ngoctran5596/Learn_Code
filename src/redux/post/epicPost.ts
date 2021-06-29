import {postActions, types} from './actionPost';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
// import config from '../../api/config';

export const createPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_POSST),
    mergeMap((act: any) => {
      console.log('ACTION', act);
      const post = {
        title: act.payload.title,
      };
      const headers = {
        Authorization: 'Bearer ' + act.payload.accessTokent,
        'My-Custom-Header': 'foobar',
      };
      return axios
        .post('https://duan-3.glitch.me/api/post', post, {headers})
        .then((rs: any) => {
          const {data} = rs;
          console.log('DATA', data);
          return postActions.getAllPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.getAllPostFailure(err);
        });
    }),
  );
};

export const getAllPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_POSST),
    mergeMap((act: any) => {
      return axios
        .get('https://duan-3.glitch.me/api/newsfeed')
        .then((rs: any) => {
          const {data} = rs;
          console.log('DATA', data);
          return postActions.getAllPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.getAllPostFailure(err);
        });
    }),
  );
};
