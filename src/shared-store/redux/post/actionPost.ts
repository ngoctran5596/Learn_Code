
export const typesPost = {
    GET_ALL_POST : 'GET_ALL_POST',
    GET_ALL_POST_SUCCESS : 'GET_ALL_POST_SUCCESS',
    GET_ALL_POST_FAILURE : 'GET_ALL_POST_FAILURE',
    CREATE_POST : 'CREATE_POST',
    CREATE_POST_SUCCESS : 'CREATE_POST_SUCCESS',
    CREATE_POST_FAILURE : 'CREATE_POST_FAILURE',
    COMMENT_POST : 'COMMENT_POSST',
    COMMENT_POST_SUCCESS : 'COMMENT_POST_SUCCESS',
    COMMENT_POST_FAILURE : 'COMMENT_POST_FAILURE',
    LIKE_POST : 'LIKE_POST',
    LIKE_POST_SUCCESS : 'LIKE_POST_SUCCESS',
    LIKE_POST_FAILURE : 'LIKE_POST_FAILURE',
    DELETE_COMMENT_POST : 'DELETE_COMMENT_POST',
    DELETE_COMMENT_POST_SUCCESS : 'DELETE_COMMENT_POST_SUCCESS',
    DELETE_COMMENT_POST_FAILURE : 'DELETE_COMMENT_POST_FAILURE',
   
}

const action = (type:string,payload:any)=>({type,payload});

export const postActions ={
    createPost : (payload:any)=>action(typesPost.CREATE_POST,payload),
    createPostSuccess: (payload:any)=>action(typesPost.CREATE_POST_SUCCESS,payload),
    createPostFailure: (payload:any)=> action(typesPost.CREATE_POST_FAILURE,payload),
    getAllPost : (payload:any)=>action(typesPost.GET_ALL_POST,payload),
    getAllPostSuccess: (payload:any)=>action(typesPost.GET_ALL_POST_SUCCESS,payload),
    getAllPostFailure: (payload:any)=> action(typesPost.GET_ALL_POST_FAILURE,payload),
    commentPost : (payload:any)=>action(typesPost.COMMENT_POST,payload),
    commentPostSuccess: (payload:any)=>action(typesPost.COMMENT_POST_SUCCESS,payload),
    commentPostFailure: (payload:any)=> action(typesPost.COMMENT_POST_FAILURE,payload),
    likePost : (payload:any)=>action(typesPost.LIKE_POST,payload),
    likePostSuccess: (payload:any)=>action(typesPost.LIKE_POST_SUCCESS,payload),
    likePostFailure: (payload:any)=> action(typesPost.LIKE_POST_FAILURE,payload),
    deleteCommentPost : (payload:any)=>action(typesPost.DELETE_COMMENT_POST,payload),
    deleteCommentPostSuccess: (payload:any)=>action(typesPost.DELETE_COMMENT_POST_SUCCESS,payload),
    deleteCommentPostFailure: (payload:any)=> action(typesPost.DELETE_COMMENT_POST_FAILURE,payload),
}
    