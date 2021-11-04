import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { userSelectorApp } from '@screens';
import { coursesActions, documentActions } from '../../shared-store/redux';

export const DocumentLogic = (props: any) => {
  const dispatch = useDispatch();
  const data = useSelector((state:any)=>state.document.allDocument);
  const title = props.route.params.title;
  const id = props.route.params.id;

  React.useEffect(() => {
    dispatch(documentActions.getAllDocument(id))
  }, []);


  const setMyScreen = () => {
    props.navigation.goBack();
  }

  return {
    setMyScreen,title,id,data
  };
};
