export const typess = {
    GET_USER : 'GET_USER',
    GET_USER_SUCCESS : 'GET_USER_SUCCESS',
    GET_USER_FAILURE : 'GET_USER_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const userActions ={
    getUser : (payload:any)=>action(typess.GET_USER,payload),
    getUserSuccess: (payload:any)=>action(typess.GET_USER_SUCCESS,payload),
    getUserFailure: (payload:any)=> action(typess.GET_USER_FAILURE,payload),
}