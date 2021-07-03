import {typess} from './action';
const initialState = {
  user: [],
  message:[]
};

export const UserReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  console.log('actionsactionsactionsactionsactionsactionsactions', actions);
  switch (actions.type) {
    case typess.GET_USER:
      return {
        ...state,
      };

    case typess.GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
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
      };
    case typess.LOGIN_FAILURE:
      return {
        ...state,
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
    case typess.COFIRMEMAIL:
        return {
          ...state,
          message:[]
        };
    default:
      return state;
  }
};
