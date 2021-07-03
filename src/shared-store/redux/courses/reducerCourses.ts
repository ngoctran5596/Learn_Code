import {typesCoures} from './actionCourses';
const initialState = {
  allCourse: [],
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
    default:
      return state;
  }
};
 
