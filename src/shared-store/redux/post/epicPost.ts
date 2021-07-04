import {postActions, typesPost} from './actionPost';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import { $axios } from '@api';

export const createPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.GET_ALL_POSST),
    mergeMap((act: any) => {
      const post = {
        title: act.payload.title,
      };
      const headers = {
        Authorization: 'Bearer ' + act.payload.accessTokent,
        'My-Custom-Header': 'foobar',
      };
      return $axios.config
        .post('post', post, {headers})
        .then((rs: any) => {
          const {data} = rs;
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
    ofType(typesPost.GET_ALL_POSST),
    mergeMap((act: any) => {
      return $axios.config
        .get('newsfeed')
        .then((rs: any) => {
          const {data} = rs;
          return postActions.getAllPostSuccess(data.payload);
        })
        .catch((err: any) => {
          return postActions.getAllPostFailure(err);
        });
    }),
  );
};
export const commentPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.COMMENT_POSST),
    mergeMap((act: any) => {
      return $axios.config
        .post('newsfeed')
        .then((rs: any) => {
          const {data} = rs;
          return postActions.commentPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.commentPostFailure(err);
        });
    }),
  );
}
