import * as React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { $axios } from '@api';
import { styles } from './style';
import { ButtonCLass, ButtonCustom, ModalCustom } from '@components';
import { Colors } from '@assets';
import { useNavigation } from '@react-navigation/native';


export const Questions = (props: any) => {
  const navigation = useNavigation()
  const { point, setPoint, onPress, selectIsToutor, setScreen } = props;
  const [questions, setQuestions] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [Option, setOption] = React.useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' })

  const submit = () => {
    if (point < 9) {
      setShow(true);
      setTitle("Bạn chưa hoàn thành bài test điểm của bạn là: ");
      return;
    } else {
      setShow(true);
      setTitle("Chúc mừng bạn vượt qua bài test điểm của bạn là: ");
      return;
    }
  }
  const outquestion = () => {
    setScreen(0);
  }

  const data = async () => {
    const result = await $axios.config.get(
      'questions',
    );
    console.log('RESULLLTT', result);
    return setQuestions(result.data);
  };

  const dataQuestion = (value: any, question: any) => {
    switch (true) {
      case question === 'Câu hỏi:1':
        if (value === '1') {
          setOption({ ...Option, 0: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          setOption({ ...Option, 0: value })
        }
        break;
      case question === 'Câu hỏi:2':
        if (value === '4') {
          setOption({ ...Option, 1: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 1: value });
        }
      case question === 'Câu hỏi:3':
        if (value === '2') {
          setOption({ ...Option, 2: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 2: value });
        }
      case question === 'Câu hỏi:4':
        if (value === '1') {
          setOption({ ...Option, 3: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 3: value });
        }
      case question === 'Câu hỏi:5':
        if (value === '1') {
          setOption({ ...Option, 4: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 4: value });
        }
      case question === 'Câu hỏi:6':
        if (value === '1') {
          setOption({ ...Option, 5: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 5: value });
        }
      case question === 'Câu hỏi:7':
        if (value === '4') {
          setOption({ ...Option, 6: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 6: value });
        }
      case question === 'Câu hỏi:8':
        if (value === '1') {
          setOption({ ...Option, 7: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 7: value });
        }
      case question === 'Câu hỏi:9':
        if (value === '3') {
          setOption({ ...Option, 8: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 8: value });
        }
      case question === 'Câu hỏi:10':
        if (value === '1') {
          setOption({ ...Option, 9: value })
          return setPoint((prev: any) => prev + 1);
        } else {
          setPoint((prev: any) => prev - 0);
          return setOption({ ...Option, 9: value });
        }
      default:
        break;
    }
  };

  React.useEffect(() => {
    data();
  }, []);
  console.log('POINTTTTTTTTTTT,', point);
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.textQS}>Câu hỏi test trình độ</Text>

      {questions ? (
        <FlatList
          keyExtractor={(item: any, index: any) => index.toString()}
          data={questions}
          renderItem={(itemData: any) => {
            return (
              <View style={styles.card}>
                <Text style={{ color: Colors.BLUE }}>
                  Câu hỏi:{itemData.index + 1} {itemData.item.title}
                </Text>
                <RadioButton.Group

                  onValueChange={value => dataQuestion(value, `Câu hỏi:${itemData.index + 1}`)}
                  value={Option[itemData.index]}>
                  <RadioButton.Item label={itemData.item.option1} value={"1"} />
                  <RadioButton.Item label={itemData.item.option2} value={"2"} />
                  <RadioButton.Item label={itemData.item.option3} value={"3"} />
                  <RadioButton.Item label={itemData.item.option4} value={"4"} />
                </RadioButton.Group>
              </View>
            );
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="red" />
      )}
      <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
        <ButtonCLass text='Nộp Bài' onPress={submit} />
        <ButtonCLass text='Thoát' onPress={()=>selectIsToutor('')} />
      </View>

      {show ?
        (<ModalCustom modalVisible={show} onPress={()=>selectIsToutor('')} setShowModal={setShow} >
          <Text style={{ padding: 10 }}>{title} {point}</Text>

        </ModalCustom>) : null}
    </View>
  );
};
