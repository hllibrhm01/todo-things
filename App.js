import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  AppRegistry,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Route} from 'react-router-native';

// layouts
import Home from './src/screens/home';
import Welcome from './src/screens/welcome';
import AddTask from './src/screens/addTask';
import RecordVoice from './src/components/recordVoice';
import RecordVoices from './src/components/recordVoices';
import CameraView from './src/components/camera';

import DatePicker from './src/components/datetimepicker';

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Route exact path="/" component={AddTask} />
        <Route path="/addtask" component={AddTask} />
      </View>
    </NativeRouter>
  );
};

export default App;
