export const typesActionChat = {
    ALL_USER:'ALL_USER',
    ACTIVE_ROOM:'ACTIVE_ROOM',
    ACTIVE_USER:'ACTIVE_USER',
    ADD_MESSAGE:'ADD_MESSAGE',
    INJECT_MESSAGE:'INJECT_MESSAGE',
    LOAD_MESSAGE:'LOAD_MESSAGE',
    CHAT_USERLIST : 'CHAT_USERLIST',
    UNIQUE_USER : 'UNIQUE_USER',
    ON_UNIQUE_USER : 'ON_UNIQUE_USER',
    SEND_MSG : 'SEND_MSG',
    HANDLE_DISPATCH_MSG : 'HANDLE_DISPATCH_MSG',
    LOAD_ROOM : 'LOAD_ROM',
    CLEAR_ACTIVE_MSGS : 'CLEAR_ACTIVE_MSGS',
}

const action = (type:string,payload:any)=>({type,payload});

export const chatActions ={
    loadMessage : (payload:any)=>action(typesActionChat.LOAD_MESSAGE,payload),
    allUser : (payload:any)=>action(typesActionChat.ALL_USER,payload),
    chatUserList: (payload:any)=>action(typesActionChat.CHAT_USERLIST,payload),
    uniqueUser: (payload:any)=> action(typesActionChat.UNIQUE_USER,payload),
    onUniqueUser: (payload:any)=>action(typesActionChat.ON_UNIQUE_USER,payload),
    sendMsg: (payload:any)=>action(typesActionChat.SEND_MSG,payload),
    handleDispatchMsg: (payload:any)=> action(typesActionChat.HANDLE_DISPATCH_MSG,payload),
    loadRoom: (payload:any)=> action(typesActionChat.LOAD_ROOM,payload),
    clearActiveMsg: (payload:any)=>action(typesActionChat.CLEAR_ACTIVE_MSGS,payload),
}
