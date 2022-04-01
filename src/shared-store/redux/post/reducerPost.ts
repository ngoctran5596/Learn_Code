import {typesPost} from './actionPost';
const initialState = {
  post: [],
  message: [],
  commentDelete: [],
  like: [],
};

export const postReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesPost.GET_ALL_POST:
      return {
        ...state,
      };

    case typesPost.GET_ALL_POST_SUCCESS:
      return {
        ...state,
        post: payload,
      };
    case typesPost.GET_ALL_POST_FAILURE:
      return {
        ...state,
      };
    case typesPost.COMMENT_POST:
      return {
        ...state,
      };

    case typesPost.COMMENT_POST_SUCCESS:
      return {
        ...state,
      };
    case typesPost.COMMENT_POST_FAILURE:
      return {
        ...state,
      };
    case typesPost.LIKE_POST_SUCCESS:
      return {
        ...state,
        like: payload,
      };

    case typesPost.DELETE_COMMENT_POST:
      return {
        ...state,
      };

    case typesPost.DELETE_COMMENT_POST_SUCCESS:
      return {
        ...state,
        commentDelete: payload,
      };
    case typesPost.DELETE_COMMENT_POST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
