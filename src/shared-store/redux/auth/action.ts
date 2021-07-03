export const typess = {
    COFIRMEMAIL:'COFIRMEMAIL',
    GET_USER : 'GET_USER',
    GET_USER_SUCCESS : 'GET_USER_SUCCESS',
    GET_USER_FAILURE : 'GET_USER_FAILURE',
    LOGIN : 'LOGIN',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILURE',
    REGISTER : 'REGISTER',
    REGISTER_SUCCESS : 'REGISTER_SUCCESS',
    REGISTER_FAILURE : 'REGISTER_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const userActions ={
    getUser : (payload:any)=>action(typess.GET_USER,payload),
    getUserSuccess: (payload:any)=>action(typess.GET_USER_SUCCESS,payload),
    getUserFailure: (payload:any)=> action(typess.GET_USER_FAILURE,payload),
    login : (payload:any)=>action(typess.LOGIN,payload),
    loginSuccess: (payload:any)=>action(typess.LOGIN_SUCCESS,payload),
    loginFailure: (payload:any)=> action(typess.LOGIN_FAILURE,payload),
    register: (payload:any)=> action(typess.REGISTER,payload),
    registerSuccess: (payload:any)=>action(typess.REGISTER_SUCCESS,payload),
    registerFailure: (payload:any)=> action(typess.REGISTER_FAILURE,payload),
    confirmEmail: (payload:any)=> action(typess.COFIRMEMAIL,payload),
}
