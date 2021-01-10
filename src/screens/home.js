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
          <TouchableOpacity style={styles.taskAddTouchButton}>
            <Text style={{color: Colors.white}}>Create New Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    marginTop: wp('10%'),
    flexDirection: 'column',
  },
  headerArea: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: Colors.white,
  },
  bodyArea: {
    width: '100%',
    height: hp('75%'),
    backgroundColor: 'skyblue',
  },
  footerArea: {
    width: '100%',
    height: hp('15%'),
    backgroundColor: 'steelblue',
  },
  taskAddView: {
    width: wp('100%'),
    height: hp('10%'),
    alignItems: 'center',
    marginTop: hp('1%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4540c1',
  },
});

export default Home;
