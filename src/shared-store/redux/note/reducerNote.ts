import {typesNote} from './actionNote';
const initialState = {
  allNote: [],
  message: '',
};

export const noteReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesNote.GET_ALL_NOTE_SUCCESS:
      return {
        ...state,
        allNote: payload,
      };

    case typesNote.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
};
