
export const typesCoures = {
    GET_ALL_COURSES : 'GET_ALL_COURSES',
    GET_ALL_COURSES_SUCCESS : 'GET_ALL_COURSES_SUCCESS',
    GET_ALL_COURSES_FAILURE : 'GET_ALL_COURSES_FAILURE',
    CREATE_COURSES : 'CREATE_COURSES',
    CREATE_COURSES_SUCCESS : 'CREATE_COURSES_SUCCESS',
    CREATE_COURSES_FAILURE : 'CREATE_COURSES_FAILURE',
    GET_COURSES_DETAIL : 'GET_COURSES_DETAIL',
    GET_COURSES_DETAIL_SUCCESS : 'GET_COURSES_DETAIL_SUCCESS',
    GET_COURSES_DETAIL_FAILURE : 'GET_COURSES_DETAIL_FAILURE',
    ADD_STUDENT_COURSE : 'ADD_STUDENT_COURSE',
    ADD_STUDENT_COURSE_SUCCESS : 'ADD_STUDENT_COURSE_SUCCESS',
    ADD_STUDENT_COURSE_FAILURE : 'ADD_STUDENT_COURSE_FAILURE',
    COURSE_BY_ID : 'COURSE_BY_ID',
    COURSE_BY_ID_SUCCESS : 'COURSE_BY_ID_SUCCESS',
    COURSE_BY_ID_FAILURE : 'COURSE_BY_ID_FAILURE',
}

const action = (type:string,payload:any)=>({type,payload});

export const coursesActions ={
    getAllCourses : (payload:any)=>action(typesCoures.GET_ALL_COURSES,payload),
    getAllCoursesSuccess: (payload:any)=>action(typesCoures.GET_ALL_COURSES_SUCCESS,payload),
    getAllCoursesFailure: (payload:any)=> action(typesCoures.GET_ALL_COURSES_FAILURE,payload),
    createCourses : (payload:any)=>action(typesCoures.CREATE_COURSES,payload),
    createCoursesSuccess: (payload:any)=>action(typesCoures.CREATE_COURSES_SUCCESS,payload),
    createCoursesFailure: (payload:any)=> action(typesCoures.CREATE_COURSES_FAILURE,payload),
    getCoursesDetail : (payload:any)=>action(typesCoures.GET_COURSES_DETAIL,payload),
    getCoursesDetailSuccess: (payload:any)=>action(typesCoures.GET_COURSES_DETAIL_SUCCESS,payload),
    getCoursesDetailFailure: (payload:any)=> action(typesCoures.GET_COURSES_DETAIL_FAILURE,payload),
    addStudent : (payload:any)=>action(typesCoures.ADD_STUDENT_COURSE,payload),
    addStudentSuccess: (payload:any)=>action(typesCoures.ADD_STUDENT_COURSE_SUCCESS,payload),
    addStudentFailure: (payload:any)=> action(typesCoures.ADD_STUDENT_COURSE_FAILURE,payload),
    getCourseByUserId : (payload:any)=>action(typesCoures.COURSE_BY_ID,payload),
    getCourseByUserIdSuccess: (payload:any)=>action(typesCoures.COURSE_BY_ID_SUCCESS,payload),
    getCourseByUserIdFailure: (payload:any)=> action(typesCoures.COURSE_BY_ID_FAILURE,payload),
}

    