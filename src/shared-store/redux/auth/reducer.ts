import {typeAuth} from './action';
const initialState = {
  user: [],
  userById: [],
  message:[],
  isLoading:false,
  error:'',
};

export const UserReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  console.log('actions',actions)
  switch (actions.type) {
    case typeAuth.GET_USER:
      return {
        ...state,
      };

    case typeAuth.GET_USER_SUCCESS:
      return {
        ...state,
        userById: payload,
      };
    case typeAuth.GET_USER_FAILURE:
      return {
        ...state,
        
      };
    case typeAuth.LOGIN:
      return {
        ...state,
      };

    case typeAuth.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,  
        isLoading: true,
      };
    case typeAuth.LOGIN_FAILURE:
      return {
        ...state,
        isLoading:false,
      };
    case typeAuth.REGISTER:
      return {
        ...state,
      };

    case typeAuth.REGISTER_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case typeAuth.REGISTER_FAILURE:
      return {
        ...state,
      };
    case typeAuth.LOGOUT:
        return {
          ...state,
          isLoading:false
        };
    default:
      return state;
  }
};
