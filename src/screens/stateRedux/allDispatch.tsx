import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const dispatch = useDispatch();
export const userSelectorApp = useSelector((state: any) => state?.auth?.user?.user);
export const dataCourses = useSelector((state: any) => state?.courses.allCourse);