import {types} from './actionPost';
const initialState = {
  post: [],
};

 const postReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case types.CREATE_POST:
      return {
        ...state,
      };

    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        allCourse: payload,
      };
    case types.CREATE_POST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default postReducer;
