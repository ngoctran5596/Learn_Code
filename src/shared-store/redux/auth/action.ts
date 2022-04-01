export const typeAuth = {
    LOGOUT:'LOGOUT',
    GET_USER : 'GET_USER',
    GET_USER_SUCCESS : 'GET_USER_SUCCESS',
    GET_USER_FAILURE : 'GET_USER_FAILURE',
    LOGIN : 'LOGIN',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILURE',
    REGISTER : 'REGISTER',
    REGISTER_SUCCESS : 'REGISTER_SUCCESS',
    REGISTER_FAILURE : 'REGISTER_FAILURE',
    GET_USER_INFOR: 'GET_USER_INFOR',
    GET_USER_INFOR_SUCCESS:'GET_USER_INFOR_SUCCESS',
    GET_USER_INFOR_FAILURE:'GET_USER_INFOR_FAILURE'
}

const action = (type:string,payload:any)=>({type,payload});

export const userActions ={
    getUser : (payload:any)=>action(typeAuth.GET_USER,payload),
    getUserSuccess: (payload:any)=>action(typeAuth.GET_USER_SUCCESS,payload),
    getUserFailure: (payload:any)=> action(typeAuth.GET_USER_FAILURE,payload),
    getUserInfor : (payload:any)=>action(typeAuth.GET_USER_INFOR,payload),
    getUserInforSuccess: (payload:any)=>action(typeAuth.GET_USER_INFOR_SUCCESS,payload),
    getUserInforFailure: (payload:any)=> action(typeAuth.GET_USER_INFOR_FAILURE,payload),
    login: (payload:any)=>action(typeAuth.LOGIN,payload),
    loginSuccess: (payload:any)=>action(typeAuth.LOGIN_SUCCESS,payload),
    loginFailure: (payload:any)=> action(typeAuth.LOGIN_FAILURE,payload),
    register: (payload:any)=> action(typeAuth.REGISTER,payload),
    registerSuccess: (payload:any)=>action(typeAuth.REGISTER_SUCCESS,payload),
    registerFailure: (payload:any)=> action(typeAuth.REGISTER_FAILURE,payload),
    LOGOUT: (payload:any)=> action(typeAuth.LOGOUT,payload),
}
