import {typess} from './action';
const initialState = {
  user: [],
  userById: [],
  message:[],
  isLoading:false
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
        userById: payload,
      };
    case typess.GET_USER_FAILURE:
      return {
        ...state,
        
      };
    case typess.LOGIN:
      return {
        ...state,
      };

    case typess.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,  
        isLoading:true,
      };
    case typess.LOGIN_FAILURE:
      return {
        ...state,
        isLoading:false,
      };
    case typess.REGISTER:
      return {
        ...state,
      };

    case typess.REGISTER_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case typess.REGISTER_FAILURE:
      return {
        ...state,
      };
    case typess.LOGOUT:
        return {
          ...state,
          isLoading:false
        };
    default:
      return state;
  }
};
