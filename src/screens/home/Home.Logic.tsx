import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coursesActions, postActions, userActions } from '../../shared-store/redux';
import Animated, { Value } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ofType } from 'redux-observable';
import { $axios } from '@api';
import { Alert } from 'react-native';


export const HomeLogic = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user?.user);
  const userbyid = useSelector((state: any) => state?.auth?.userById);
  const dataCourses = useSelector((state: any) => state?.courses.allCourse);
  const dataPost = useSelector((state: any) => state?.post.post);
  const [screen, setScreen] = React.useState(0);
  const [Like, setLike] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');
  const [idPost, setIdPost] = React.useState('');
  const tokent = useSelector((state: any) => state?.auth?.user?.accessToken);
  const checkPost = dataPost.findIndex((item: any) => { return item?.classByUser?.studentId?.includes(user.id) })
  let bottomSheetRef = React.createRef<BottomSheet>();
  let fall = new Animated.Value(0);
  const [butomsheet, setButomsheet] = React.useState([0, 0, 0]);
  
  const onclickComment = (id: any) => {
    setCommentText('');
    setButomsheet([250, 150, 0]);
    setIdPost(id);
    return bottomSheetRef?.current?.snapTo(0);
  };

  const commentDispatch = (idPost: any) => {
    setButomsheet([0, 0, 0]);
    setCommentText('');

    new Promise((resolve, reject) => {
      dispatch(
        postActions.commentPost({
          idPost,
          data: { userId: user.id, content: commentText },
        }),
      ),
        setTimeout(() => {
          resolve(true);
        }, 1000)
    }).then((data) => {
      getAllpost();
    }).catch((err) => console.log('Like failure'));
    // await dispatch(postActions.getAllPost(''));

  };

  const onPress = (id: any, name: any) => {
    props.navigation.navigate('CourseDetail', { id, name });
  };
  const onPressProfile = () => {
    props.navigation.navigate('Profile', { user: user });
  };
  const onPressPostNews = () => {
    props.navigation.navigate('PostNews');
  };
 
  const getAllpost = async()=>{
    await dispatch(postActions.getAllPost(''));
  }
  const onRefresh = async () => {
    setIsFetching(true);
    await dispatch(coursesActions.getAllCourses(''));
    await dispatch(postActions.getAllPost(''));
    await dispatch(userActions.getUser(tokent))
    setIsFetching(false);
  };

  React.useEffect(() => {
    dispatch(userActions.getUser(tokent))
  }, []);

  const dispatchCourseDetail = async (valueID: any) => {
    await dispatch(coursesActions.getCoursesDetail(valueID));
  };

  const onClickLike =  (id: any) => {
    // const headers = {
    //   Authorization: tokent,
    //   'My-Custom-Header': 'foobar',
    // };
    // const reult = await $axios.config.post(`newsfeed/like/${id}`, {}, { headers })

    // if (reult) {
    //   dispatch(postActions.getAllPost(''));
    // }

    new Promise((resolve, reject) => {
      dispatch(postActions.likePost({ idPost: id, token: tokent }));
      setTimeout(() => {
        resolve(true);
      }, 1000)
    }).then((data) => {
      getAllpost();
      // dispatch(postActions.getAllPost(''));
    }).catch((err) => console.log('Like failure'));
}

const onEdit = (item: any) => {
  props.navigation.navigate('editPost', item)

}

const deletePost = async (id: any) => {
  await $axios.config.delete(`newsfeed/post/${id}`).then((result) => {
    if (result?.data.message === 'success') {
      dispatch(postActions.getAllPost(''));
    } else {
      return;
    }

  });

}


const setMyScreen = (screen: any) => {
  setScreen(screen);
};

console.log("DTATAAPOST", checkPost);
return {
  screen,
  setScreen,
  user,
  Like,
  setLike, onEdit,
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
  idPost, isFetching,
  userbyid, onClickLike, deletePost
};
};
