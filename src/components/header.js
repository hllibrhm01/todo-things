import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Header, ThemeProvider} from 'react-native-elements';

const HeaderComponent = () => {
  return (
    <>
      <ThemeProvider>
        <Header
          leftComponent={{icon: 'menu', color: '#fff',
          onPress: () => alert('Hello'),
        }}
          centerComponent={{text: 'Todo Things', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default HeaderComponent;
