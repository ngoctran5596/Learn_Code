import {typesPost} from './actionPost';
const initialState = {
  post: [],
  message: [],
};

export const postReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesPost.GET_ALL_POSST:
      return {
        ...state,
      };

    case typesPost.GET_ALL_POSST_SUCCESS:
      return {
        ...state,
        post: payload,
      };
    case typesPost.GET_ALL_POSST_FAILURE:
      return {
        ...state,
      };
      case typesPost.COMMENT_POSST:
      return {
        ...state,
      };

    case typesPost.COMMENT_POSST_SUCCESS:
      return {
        ...state
      };
    case typesPost.COMMENT_POSST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
