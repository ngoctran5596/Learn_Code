import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {coursesActions, postActions} from '../../shared-store/redux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export const HomeLogic = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user.user);
  const dataCourses = useSelector((state: any) => state?.courses.allCourse);
  const dataPost = useSelector((state: any) => state?.post.post);
  const [screen, setScreen] = React.useState(0);
  const [Like, setLike] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');
  const [idPost, setIdPost] = React.useState('');
  let bottomSheetRef = React.createRef<BottomSheet>();
  let fall = new Animated.Value(0);
  const [butomsheet, setButomsheet] = React.useState([0, 0, 0]);
  const onclickComment = (id: any) => {
    setCommentText('');
    setButomsheet([450, 300, 0]);
    setIdPost(id);
    return bottomSheetRef?.current?.snapTo(0);
  };

  const commentDispatch = async (idPost: any) => {
    setButomsheet([0, 0, 0]);
    const myPromise = new Promise(resolve => {
      resolve(
        dispatch(
          postActions.commentPost({
            idPost,
            data: {userId: user.id, content: commentText},
          }),
        ),
      );
    });
    myPromise
      .then(data => {
        console.log('rsrsrsCAIOK', data);
        dispatch(postActions.getAllPost(''));
      })
      .catch(err => console.log('ERRRRRRRRR', err));
  };

  const onPress = (id: any) => {
    props.navigation.navigate('CourseDetail', {id});
  };
  const onPressProfile = () => {
    props.navigation.navigate('Profile', {user: user});
  };
  const onPressPostNews = () => {
    props.navigation.navigate('PostNews');
  };

  React.useEffect(() => {
    dispatch(coursesActions.getAllCourses(''));
    dispatch(postActions.getAllPost(''));
  }, []);

  const onRefresh = () => {
    setIsFetching(true);
    dispatch(coursesActions.getAllCourses(''));
    dispatch(postActions.getAllPost(''));
    setIsFetching(false);
  };
  const dispatchCourseDetail = (valueID: any) => {
    dispatch(coursesActions.getCoursesDetail(valueID));
  };

  const setMyScreen = (screen: any) => {
    setScreen(screen);
  };

  return {
    screen,
    setScreen,
    user,
    Like,
    setLike,
    onPress,
    onPressProfile,
    onPressPostNews,
    dataCourses,
    dataPost,
    dispatchCourseDetail,
    onRefresh,
    setMyScreen,
    commentText,
    setCommentText,
    onclickComment,
    commentDispatch,
    bottomSheetRef,
    fall,
    butomsheet,
    idPost,isFetching
  };
};
