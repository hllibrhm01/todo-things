import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// components
import HeaderComponent from '../components/header';
import DateTimePicker from '@react-native-community/datetimepicker';

//import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {widthDimen, heightDimen} = Dimensions.get('window');

const Home = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  // date select
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.iconFlex}>
          <View style={styles.iconFlex1}>
            <Icon name="chevron-left" size={hp('3%')} color="white" />
          </View>
          <View style={styles.iconFlex2} />
          <View style={styles.iconFlex3} />
        </View>
        <View style={styles.textFlex}>
          <Text style={styles.textAddTaskWrite}>Add Task</Text>
        </View>
        <View style={styles.bodyArea}>
          <View
            style={{
              width: '100%',
              height: 50,
              flex: 1,
            }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 0,
                marginLeft: wp('3%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Your task name"
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              flex: 1,
            }}>
            <Text style={{color: 'gray'}}>DATE</Text>
            <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'red',
              flex: 1,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'green',
              flex: 1,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'yellow',
              flex: 1,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'purple',
              flex: 2,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'purple',
              flex: 6,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerArea: {
    width: '100%',
    height: hp('100%'),
    marginBottom: hp('20%'),
    backgroundColor: '#4540c1',
  },
  bodyArea: {
    width: '100%',
    height: hp('100%'),
    flexDirection: 'column',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: Colors.white,
    marginTop: hp('15%'),
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
  },
  iconFlex: {
    flexDirection: 'row',
  },
  iconFlex1: {
    width: 50,
    height: 50,
    flex: 2,
    justifyContent: 'center',
    paddingLeft: wp('2%'),
  },
  iconFlex2: {
    width: 50,
    height: 50,
    flex: 2,
  },
  iconFlex3: {
    width: 50,
    height: 50,
    flex: 2,
  },
  textFlex: {
    flex: 1,
    backgroundColor: 'black',
    marginLeft: wp('10%'),
    justifyContent: 'center',
  },
  textAddTaskWrite: {
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: hp('15%'),
    fontSize: wp('6%'),
  },
});

export default Home;
