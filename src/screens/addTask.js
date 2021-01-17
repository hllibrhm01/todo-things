import React, { useState } from 'react';
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

import { useHistory } from 'react-router-dom';
import { NativeRouter, BackButton } from 'react-router-native';

// components
import HeaderComponent from '../components/header';
import DateTimePicker from '@react-native-community/datetimepicker';

//import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { widthDimen, heightDimen } = Dimensions.get('window');

// components
import DateTimePickers from '../components/datetimepicker';

const Home = () => {
  let history = useHistory();
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.iconFlex}>
          <View style={styles.iconFlex1}>
            <Icon
              onPress={() => history.goBack()}
              name="chevron-left"
              size={hp('3%')}
              color="white"
            />
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
              flexDirection: 'row',
              marginTop: hp('2%'),
            }}>
            <TextInput
              style={{
                width: wp('75%'),
                height: 40,
                borderColor: 'gray',
                borderWidth: 0,
                marginLeft: wp('3%'),
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
              }}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Your task name"
            />
            <Icon
              name="microphone"
              size={hp('3%')}
              color="black"
            />
          </View>
          <View>
            <DateTimePickers />
          </View>
          <View
            style={{
              marginTop: wp('3%'),
            }}
          >
            <View>
              <View>
                <View
                  style={{
                    marginTop: hp('2%'),
                  }}
                >
                  <View
                    style={{
                      marginLeft: wp('2%'),
                    }}
                  >
                    <Text
                      style={{
                        color: 'gray',
                      }}
                    >Description</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: wp('100%')
                    }}
                  >
                    <View
                      style={{
                        width: wp('75%'),
                        marginLeft: wp('2%'),
                      }}
                    >
                      <Text
                        style={{
                          width: wp('75%'),
                          marginTop: hp('4%'),
                          borderBottomWidth: 0.2,
                        }}
                      >asdad</Text>
                    </View>
                    <View
                      style={{
                        right: 0,
                        width: wp('10%'),
                        marginRight: wp('2%'),
                        marginTop: hp('2%')
                      }}
                    >
                      <Icon
                        name="microphone"
                        size={hp('3%')}
                        color="black"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flex: 1,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              flex: 3,
            }}
          >
            <TouchableOpacity
              style={styles.roundButton1}>
              <Icon
                name="check"
                size={hp('5%')}
                color="white"
              />
            </TouchableOpacity>
          </View>
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
  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#4540c1',
  },
});

export default Home;
