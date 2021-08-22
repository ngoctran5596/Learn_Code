import {typesActionChat} from './action';
const initialState = {  
  activeUser:null
};

export const ChatReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesActionChat.ALL_USER:
      return {
        ...state,
        activeUser:payload
      };

    default:
      return state;
  }
};
