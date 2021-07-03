
export const typesCoures = {
    GET_ALL_COURSES : 'GET_ALL_COURSES',
    GET_ALL_COURSES_SUCCESS : 'GET_ALL_COURSES_SUCCESS',
    GET_ALL_COURSES_FAILURE : 'GET_ALL_COURSES_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const coursesActions ={
    getAllCourses : (payload:any)=>action(typesCoures.GET_ALL_COURSES,payload),
    getAllCoursesSuccess: (payload:any)=>action(typesCoures.GET_ALL_COURSES_SUCCESS,payload),
    getAllCoursesFailure: (payload:any)=> action(typesCoures.GET_ALL_COURSES_FAILURE,payload),
}
    