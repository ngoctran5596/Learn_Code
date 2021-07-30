import {typesActionChat} from './action';
const initialState = {  
  activeUser:null
};

export const ChatReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesActionChat.CHAT_USERLIST:
      return {
        ...state,
        activeUser:payload
      };

    default:
      return state;
  }
};
