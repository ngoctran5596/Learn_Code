import {types} from './actionPost';
const initialState = {
  post: [],
};

 const postReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_POSST:
      return {
        ...state,
      };

    case types.GET_ALL_POSST_SUCCESS:
      return {
        ...state,
        post: payload,
      };
    case types.GET_ALL_POSST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default postReducer;
