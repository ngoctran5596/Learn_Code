
export const typesDocument = {
    GET_ALL_DOCUMENT : 'GET_ALL_DOCUMENT',
    GET_ALL_DOCUMENT_SUCCESS : 'GET_ALL_DOCUMENT_SUCCESS',
    GET_ALL_DOCUMENT_FAILURE : 'GET_ALL_DOCUMENT_FAILURE',
    CREATE_DOCUMENT : 'CREATE_DOCUMENT',
    CREATE_DOCUMENT_SUCCESS : 'CREATE_DOCUMENT_SUCCESS',
    CREATE_DOCUMENT_FAILURE : 'CREATE_DOCUMENT_FAILURE',
    
}

const action = (type:string,payload:any)=>({type,payload});

export const documentActions ={
    getAllDocument : (payload:any)=>action(typesDocument.GET_ALL_DOCUMENT,payload),
    getAllDocumentSuccess: (payload:any)=>action(typesDocument.GET_ALL_DOCUMENT_SUCCESS,payload),
    getAllDocumentFailure: (payload:any)=> action(typesDocument.GET_ALL_DOCUMENT_FAILURE,payload),
    createDocument : (payload:any)=>action(typesDocument.CREATE_DOCUMENT,payload),
    createDocumentSuccess: (payload:any)=>action(typesDocument.CREATE_DOCUMENT_SUCCESS,payload),
    createDocumentFailure: (payload:any)=> action(typesDocument.CREATE_DOCUMENT_FAILURE,payload),

}

    