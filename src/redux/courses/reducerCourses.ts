import {types} from './actionCourses';
const initialState = {
  allCourse: [],
};

 const getCoursesReducer = (state = initialState, actions: any) => {
  let {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_COURSES:
      return {
        ...state,
      };

    case types.GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        allCourse: payload,
      };
    case types.GET_ALL_COURSES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default getCoursesReducer;
