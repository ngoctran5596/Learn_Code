import {documentActions,typesDocument} from './actionDocument';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import axios from 'axios';
import {$axios} from '@api';

export const getAllDocument = ($action: any) => {
  return $action.pipe(
    ofType(typesDocument.GET_ALL_DOCUMENT),
    mergeMap((act: any) => {
      console.log("getAllNotegetAllNotegetAllNotegetAllNote",act)
      return $axios.config
        .get(`document/courseId/${act.payload}`)
        .then((rs: any) => {
          const {data} = rs;
          console.log(rs)
          return documentActions.getAllDocumentSuccess(data);
        })
        .catch((err: any) => {
          return documentActions.getAllDocumentFailure(err);
        });
    }),
  );
};




export const createDocument = ($action: any) => {
  return $action.pipe(
    ofType(typesDocument.CREATE_DOCUMENT),
    mergeMap((act: any) => {
      console.log('actactactactactcreateCourescreateCoures', act.payload);
      return $axios.config
        .post(`document/add`, act.payload)
        .then((rs: any) => {
          const {data} = rs;
          return documentActions.createDocumentSuccess(data);
        })
        .catch((err: any) => {
          return documentActions.createDocumentFailure(err);
        });
    }),
  );
};
