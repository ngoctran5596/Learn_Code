import {typesDocument} from './actionDocument';
const initialState = {
  allDocument: [],
  message: '',
};

export const documentReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesDocument.GET_ALL_DOCUMENT_SUCCESS:
      return {
        ...state,
        allDocument: payload,
      };

    case typesDocument.CREATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
};
