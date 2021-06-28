import {typess} from './action';
const initialState = {
  user: [],
};

export const UserReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typess.GET_USER:
      return {
        ...state,
      };

    case typess.GET_USER_SUCCESS:
      return {
        ...state,
        allCourse: payload,
      };
    case typess.GET_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
