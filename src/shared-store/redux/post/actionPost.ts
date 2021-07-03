
export const typesPost = {
    GET_ALL_POSST : 'GET_ALL_POSST',
    GET_ALL_POSST_SUCCESS : 'GET_ALL_POSST_SUCCESS',
    GET_ALL_POSST_FAILURE : 'GET_ALL_POSST_FAILURE',
    COMMENT_POSST : 'COMMENT_POSST',
    COMMENT_POSST_SUCCESS : 'COMMENT_POSST_SUCCESS',
    COMMENT_POSST_FAILURE : 'COMMENT_POSST_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const postActions ={
    getAllPost : (payload:any)=>action(typesPost.GET_ALL_POSST,payload),
    getAllPostSuccess: (payload:any)=>action(typesPost.GET_ALL_POSST_SUCCESS,payload),
    getAllPostFailure: (payload:any)=> action(typesPost.GET_ALL_POSST_FAILURE,payload),
    commentPost : (payload:any)=>action(typesPost.COMMENT_POSST,payload),
    commentPostSuccess: (payload:any)=>action(typesPost.COMMENT_POSST_SUCCESS,payload),
    commentPostFailure: (payload:any)=> action(typesPost.COMMENT_POSST_FAILURE,payload),
}
    