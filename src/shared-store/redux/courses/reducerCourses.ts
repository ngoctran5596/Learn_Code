import {typesCoures} from './actionCourses';
const initialState = {
  allCourse: [],
  coursesDetail: [],
  coursesById: [],
  message: '',
};

export const coursesReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case typesCoures.GET_ALL_COURSES:
      return {
        ...state,
      };

    case typesCoures.GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        allCourse: payload.payload,
      };
    case typesCoures.GET_ALL_COURSES_FAILURE:
      return {
        ...state,
      };
    case typesCoures.GET_COURSES_DETAIL:
      return {
        ...state,
      };

    case typesCoures.GET_COURSES_DETAIL_SUCCESS:
      return {
        ...state,
        coursesDetail: payload.payload,
      };
    case typesCoures.GET_COURSES_DETAIL_FAILURE:
      return {
        ...state,
      };
    case typesCoures.CREATE_COURSES_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };
    case typesCoures.ADD_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };
    case typesCoures.COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        coursesById: payload.payload,
      };
    default:
      return state;
  }
};
