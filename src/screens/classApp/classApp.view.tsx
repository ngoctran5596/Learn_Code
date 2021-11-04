import React from "react";
import { Button, View, Alert, FlatList, Text, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ButtonCLass, ButtonCustom, HeaderNav, ModalCustom } from "@components";
import { classLogic } from "./classApp.logic";
import { TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { ScrollView, StyleSheet } from "react-native";
import { Colors } from "@assets";
import { useSelector, useDispatch } from "react-redux";
import { coursesActions, documentActions } from '../../shared-store/redux';


export function classHome(props: any) {
  const dispatch = useDispatch();
  const couresUser = useSelector((state: any) => state?.courses?.coursesById);
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [name, setName] = React.useState();
  const [title, setTitle] = React.useState();
  const [status, setStatus] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [description, setDecription] = React.useState();

  const pickerRef = React.useRef();
  const dataCourses = useSelector((state: any) => state?.courses.allCourse);
  const createSuccess = useSelector((state: any) => state?.courses.message);
  const user = useSelector((state: any) => state?.auth?.user.user);
  // description: { type: String },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref:"User"  },
  // courseId: { type: mongoose.Schema.Types.ObjectId, ref:"courses"},
  const setScreen = (value: any) => {
    switch (value) {
      case 'Thêm lớp':
        setStatus(true);
        setName();
        setDecription();
        setSelectedLanguage();
        break;
      case 'Đăng tài liệu':
        setStatus(false);
        setName();
        setDecription();
        setSelectedLanguage();
        break;
    }
  }
  const onPressDocument = () => {
    console.log("onPressDocumentonPressDocumentonPressDocumentonPressDocument", selectedLanguage, description);
    if (selectedLanguage == undefined || description == undefined) {
      setTitle(`
      Thêm tài liệu!  
      Chọn Lớp của bạn!
      Chưa có lớp vui lòng tạo lớp trước! `);
      setShowModal(true);
      return;
    } else {
      const data = {
        description: description,
        userId: user.id,
        courseId: selectedLanguage,
      }
      console.log(data);
      dispatch(documentActions.createDocument(data));
      setName();
      setDecription();
      setSelectedLanguage()
      props.navigation.navigate('Home');
    }
  }

  const setModal = () => {
    setShowModal(false);
  }
  const onPress = () => {
    if (name == undefined || selectedLanguage == undefined || description == undefined) {
      setTitle('Điền đầy đủ thông tin để tạo lớp!');
      setShowModal(true);
      return;
    } else {
      const data = {
        courseType: selectedLanguage,
        userId: user.id,
        name,
        description,
      }
      console.log(data);
      dispatch(coursesActions.createCourses(data));
      setName();
      setDecription();
      setSelectedLanguage()
      props.navigation.navigate('Home');
    }

  }
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView>

      <View style={{ flex: 1, marginBottom: 20 }}>
        <View style={{ height: 100 }}>
          <HeaderNav title={status ? "Thêm lớp học của bạn" : "Đăng tài liệu của bạn"} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <ButtonCLass onPress={() => setScreen("Thêm lớp")} text="Thêm lớp" />
          <ButtonCLass onPress={() => setScreen("Đăng tài liệu")} text="Đăng tài liệu" />
        </View>
        {status ? (<View>
          <Text style={styles.text}>Tên lớp học</Text>
          <TextInput style={styles.input} placeholder="Tên lớp học" onChangeText={(text) => setName(text)} />
          <Text style={styles.text}>Giới thiệu một vài điều về lớp học của bạn? </Text>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.input} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
            onChangeText={(text) => setDecription(text)}
            placeholder="Giới thiệu chút ít nào bạn"
          />
          <Text style={styles.text}>Bạn sẽ dạy ngôn ngữ gì? </Text>

          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Chọn ngôn ngữ" value="" />
            {dataCourses.map((item: any, index: any) => {
              return (
                <Picker.Item label={item.name} value={item._id} key={index} />
              )

            })}
          </Picker>

          <ButtonCustom onPress={() => onPress()} text="Tạo lớp" />
        </View>) : (
          <View>
            <Text style={styles.text}>Tài Liệu</Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.input} // Inherit any props passed to it; e.g., multiline, numberOfLines below
              editable
              maxLength={40}
              onChangeText={(text) => setDecription(text)}
              placeholder="Giới thiệu chút ít nào bạn"
            />
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Chọn lớp học" value="" />
              {couresUser.map((item: any, index: any) => {
                return (
                  <Picker.Item label={item.name} value={item._id} key={index} />
                )

              })}
            </Picker>

            <ButtonCustom onPress={() => onPressDocument()} text="Thêm tài liệu" />
          </View>
        )}
      </View>
      {<ModalCustom modalVisible={showModal} onPress={setModal}>
        <Text style={{paddingVertical:10}}>{title}</Text>
      </ModalCustom>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.PURPLE
  },
  input: { padding: 10, borderWidth: 1, marginHorizontal: 5, marginVertical: 5, borderColor: Colors.PURPLE, borderRadius: 4 }
})