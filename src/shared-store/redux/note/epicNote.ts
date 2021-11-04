import {noteActions,typesNote} from './actionNote';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {$axios} from '@api';

export const getAllNote = ($action: any) => {
  return $action.pipe(
    ofType(typesNote.GET_ALL_NOTE),
    mergeMap((act: any) => {
      console.log("getAllNotegetAllNotegetAllNotegetAllNote",act)
      return $axios.config
        .get(`note/${act.payload.userId}`)
        .then((rs: any) => {
          const {data} = rs;
          console.log(rs)
          return noteActions.getAllNoteSuccess(data);
        })
        .catch((err: any) => {
          return noteActions.getAllNoteFailure(err);
        });
    }),
  );
};




export const createNote = ($action: any) => {
  return $action.pipe(
    ofType(typesNote.CREATE_NOTE),
    mergeMap((act: any) => {
      console.log('actactactactactcreateCourescreateCoures', act.payload);
      return $axios.config
        .post(`note/create`, act.payload)
        .then((rs: any) => {
          const {data} = rs;
          return noteActions.createNoteSuccess(data);
        })
        .catch((err: any) => {
          return noteActions.createNoteFailure(err);
        });
    }),
  );
};
