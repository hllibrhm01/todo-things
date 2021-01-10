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

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Route exact path="/" component={AddTask} />
        <Route path="/about" component={Welcome} />
      </View>
    </NativeRouter>
  );
};

export default App;
