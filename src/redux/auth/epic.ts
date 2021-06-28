import {userActions, typess} from './action';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {config} from '../../api/config';

export const getUser = ($action: any) => {
  return $action.pipe(
    ofType(typess.GET_USER),
    mergeMap((act: any) => {
      console.log('act',act)
      return config
        .get('user/userById', {
          headers: {
            AutAuthorization: 'Bearer ' + act.payload,
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

