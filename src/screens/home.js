import React from 'react';
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
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useHistory} from 'react-router-dom';

// components
import HeaderComponent from '../components/header';

//import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {widthDimen, heightDimen} = Dimensions.get('window');

const Home = () => {
  let history = useHistory();
  const getAddTaskScreen = () => {
    history.push('/addtask');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <HeaderComponent />
      </View>
      <View style={styles.bodyArea}>
        <ScrollView>
          <Text>Area</Text>
        </ScrollView>
      </View>
      <View style={styles.footerArea}>
        <View style={styles.taskAddView}>
          <TouchableOpacity
            onPress={getAddTaskScreen}
            style={styles.taskAddTouchButton}>
            <Text style={{
              fontWeight: 'bold',
              color: Colors.white
            }}>Create New Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    flexDirection: 'column',
  },
  headerArea: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: Colors.white,
  },
  bodyArea: {
    width: '100%',
    height: hp('80%'),
    backgroundColor: 'skyblue',
  },
  footerArea: {
    width: '100%',
    height: hp('10%'),
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  taskAddView: {
    width: wp('100%'),
    height: hp('8%'),
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: hp('2%'),
    backgroundColor: '#4540c1',
  },
});

export default Home;
