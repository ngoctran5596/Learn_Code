import React, { useEffect, useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import lodash from 'lodash'
import { PermissionsAndroid } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import {useSelector} from 'react-redux'
export const ProfileLogic = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setopen] = useState(false)
  const noimage = '../../../../assets/image/no_Image.jpg'
  const [sourcepath, setsourcepath] = useState<any>({
    pathimage: '',
    load: false,
  });
  const profile = useSelector((state:any) => {
    return state?.authentication.user;
  });
  
  console.log('profile',profile)

  const chooseFile = () => {
    let options: any = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source: string = lodash.get(response?.assets, [0], '')
        setsourcepath({ pathimage: source, load: true });
        setopen(false)
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const Camera = async () => {
    await requestCameraPermission();
    const options: any = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      const source: any = lodash.get(response?.assets, [0], '')
      setsourcepath({ pathimage: source, load: true })
      setopen(false)

    });

  }
  return {
    isopen,
    setopen,
    noimage,
    chooseFile,
    Camera,
    open,
    setOpen,
    sourcepath,
    setsourcepath,
    profile,
  };
};
