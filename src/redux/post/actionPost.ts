
export const types = {
    GET_ALL_POSST : 'GET_ALL_POSST',
    GET_ALL_POSST_SUCCESS : 'GET_ALL_POSST_SUCCESS',
    GET_ALL_POSST_FAILURE : 'GET_ALL_POSST_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const postActions ={
    getAllPost : (payload:any)=>action(types.GET_ALL_POSST,payload),
    getAllPostSuccess: (payload:any)=>action(types.GET_ALL_POSST_SUCCESS,payload),
    getAllPostFailure: (payload:any)=> action(types.GET_ALL_POSST_FAILURE,payload),
}
    