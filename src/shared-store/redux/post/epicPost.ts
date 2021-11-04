import {postActions, typesPost} from './actionPost';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {$axios} from '@api';

export const createPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.CREATE_POST),
    mergeMap((act: any) => {
      const post = {
        userId: act.payload.userId,
        description: act.payload.discriptions,
      };
      const headers = {
        Authorization: 'Bearer ' + act.payload.accessTokent,
        'My-Custom-Header': 'foobar',
      };
      return $axios.config
        .post('post', post, {headers})
        .then((rs: any) => {
          const {data} = rs;
          return postActions.createPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.createPostFailure(err);
        });
    }),
  );
};

export const getAllPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.GET_ALL_POST),
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
    ofType(typesPost.COMMENT_POST),
    mergeMap((act: any) => {
      console.log('actactactactactactactactact', act);
      return $axios.config
        .post(`newsfeed/${act.payload.idPost}`, act.payload.data)
        .then((rs: any) => {
          console.log('rsrsrsrsrsrsrsrs', rs.data);
          const {data} = rs;
          return postActions.commentPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.commentPostFailure(err);
        });
    }),
  );
};

export const deleteCommentPostEpic = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.DELETE_COMMENT_POST),
    mergeMap((act: any) => {
      console.log('actactactactactactactactact', act);
      return $axios.config
        .delete(`newsfeed/comment/${act.payload.idComment}`)
        .then((rs: any) => {
          console.log('rsrsrsrsrsrsrsrs', rs.data);
          const {data} = rs;
          return postActions.deleteCommentPostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.deleteCommentPostFailure(err);
        });
    }),
  );
};


export const LikePost = ($action: any) => {
  return $action.pipe(
    ofType(typesPost.LIKE_POST),
    mergeMap((act: any) => {
      const id = act.payload.idPost
      const headers = {
        Authorization: act.payload.token,
        'My-Custom-Header': 'foobar',
      };
      return $axios.config
        .post(`newsfeed/like/${id}`, {}, {headers})
        .then((rs: any) => {
          const {data} = rs;
          return postActions.likePostSuccess(data);
        })
        .catch((err: any) => {
          return postActions.likePostFailure(err);
        });
    }),
  );
};