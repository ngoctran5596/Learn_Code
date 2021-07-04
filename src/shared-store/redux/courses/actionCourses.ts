
export const typesCoures = {
    GET_ALL_COURSES : 'GET_ALL_COURSES',
    GET_ALL_COURSES_SUCCESS : 'GET_ALL_COURSES_SUCCESS',
    GET_ALL_COURSES_FAILURE : 'GET_ALL_COURSES_FAILURE',
    GET_COURSES_DETAIL : 'GET_COURSES_DETAIL',
    GET_COURSES_DETAIL_SUCCESS : 'GET_COURSES_DETAIL_SUCCESS',
    GET_COURSES_DETAIL_FAILURE : 'GET_COURSES_DETAIL_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const coursesActions ={
    getAllCourses : (payload:any)=>action(typesCoures.GET_ALL_COURSES,payload),
    getAllCoursesSuccess: (payload:any)=>action(typesCoures.GET_ALL_COURSES_SUCCESS,payload),
    getAllCoursesFailure: (payload:any)=> action(typesCoures.GET_ALL_COURSES_FAILURE,payload),
    getCoursesDetail : (payload:any)=>action(typesCoures.GET_COURSES_DETAIL,payload),
    getCoursesDetailSuccess: (payload:any)=>action(typesCoures.GET_COURSES_DETAIL_SUCCESS,payload),
    getCoursesDetailFailure: (payload:any)=> action(typesCoures.GET_COURSES_DETAIL_FAILURE,payload),
}

    