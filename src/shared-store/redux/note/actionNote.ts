
export const typesNote = {
    GET_ALL_NOTE : 'GET_ALL_NOTE',
    GET_ALL_NOTE_SUCCESS : 'GET_ALL_NOTE_SUCCESS',
    GET_ALL_NOTE_FAILURE : 'GET_ALL_NOTE_FAILURE',
    CREATE_NOTE : 'CREATE_NOTE',
    CREATE_NOTE_SUCCESS : 'CREATE_NOTE_SUCCESS',
    CREATE_NOTE_FAILURE : 'CREATE_NOTE_FAILURE',
    
}

const action = (type:string,payload:any)=>({type,payload});

export const noteActions ={
    getAllNote : (payload:any)=>action(typesNote.GET_ALL_NOTE,payload),
    getAllNoteSuccess: (payload:any)=>action(typesNote.GET_ALL_NOTE_SUCCESS,payload),
    getAllNoteFailure: (payload:any)=> action(typesNote.GET_ALL_NOTE_FAILURE,payload),
    createNote : (payload:any)=>action(typesNote.CREATE_NOTE,payload),
    createNoteSuccess: (payload:any)=>action(typesNote.CREATE_NOTE_SUCCESS,payload),
    createNoteFailure: (payload:any)=> action(typesNote.CREATE_NOTE_FAILURE,payload),

}

    