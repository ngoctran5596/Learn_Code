import {userActions, typess} from './action';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {$axios} from '@api';

export const getUser = ($action: any) => {
  return $action.pipe(
    ofType(typess.GET_USER),
    mergeMap((act: any) => {
      console.log('getUsergetUser',act)
      return $axios.config
        .get('user/infor/v3', {
          headers: {
            Authorization: act.payload,
          },
        })
        .then((rs: any) => {
          const {data} = rs;
          
          return userActions.getUserSuccess(data);
        })
        .catch((err: any) => {
          return userActions.getUserFailure(err);
        });
    }),
  );
};
export const loginUser = ($action: any) => {
  return $action.pipe(
    ofType(typess.LOGIN),
    mergeMap((act: any) => {
      return $axios.config
        .post('user/login',act.payload)
        .then((rs: any) => {
          const {data} = rs;
          return userActions.loginSuccess(data);
        })
        .catch((err: any) => {
          return userActions.loginFailure(err);
        });
    }),
  );
};

export const registerUser = ($action: any) => {
  return $action.pipe(
    ofType(typess.REGISTER),
    mergeMap((act: any) => {
      return $axios.config
        .post('user/register',act.payload)
        .then((rs: any) => {
          const {data} = rs;
          return userActions.registerSuccess(data);
        })
        .catch((err: any) => {
          return userActions.registerFailure(err);
        });
    }),
  );
};


