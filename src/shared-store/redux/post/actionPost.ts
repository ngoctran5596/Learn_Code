
export const typesPost = {
    GET_ALL_POST : 'GET_ALL_POST',
    GET_ALL_POST_SUCCESS : 'GET_ALL_POST_SUCCESS',
    GET_ALL_POST_FAILURE : 'GET_ALL_POST_FAILURE',
    COMMENT_POST : 'COMMENT_POSST',
    COMMENT_POST_SUCCESS : 'COMMENT_POST_SUCCESS',
    COMMENT_POST_FAILURE : 'COMMENT_POST_FAILURE',
    LIKE_POST : 'LIKE_POST',
    LIKE_POST_SUCCESS : 'LIKE_POST_SUCCESS',
    LIKE_POST_FAILURE : 'LIKE_POST_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const postActions ={
    getAllPost : (payload:any)=>action(typesPost.GET_ALL_POST,payload),
    getAllPostSuccess: (payload:any)=>action(typesPost.GET_ALL_POST_SUCCESS,payload),
    getAllPostFailure: (payload:any)=> action(typesPost.GET_ALL_POST_FAILURE,payload),
    commentPost : (payload:any)=>action(typesPost.COMMENT_POST,payload),
    commentPostSuccess: (payload:any)=>action(typesPost.COMMENT_POST_SUCCESS,payload),
    commentPostFailure: (payload:any)=> action(typesPost.COMMENT_POST_FAILURE,payload),
    likePost : (payload:any)=>action(typesPost.LIKE_POST,payload),
    likePostSuccess: (payload:any)=>action(typesPost.LIKE_POST_SUCCESS,payload),
    likePostFailure: (payload:any)=> action(typesPost.LIKE_POST_FAILURE,payload),
}
    