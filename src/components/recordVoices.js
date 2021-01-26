import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Voice from '@react-native-community/voice';

const RecordVoices = () => {
  const requestAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Cool Voice App Permission',
          message:
            'Cool Voice App needs access to your voice' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (PermissionsAndroid.RESULTS.GRANTED === 'granted') {
        console.log('You can use the voice');
      } else {
        console.log('voice permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const startonPress = () => {
    Voice.start('tr-TR');
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={requestAudioPermission}>
        <Text>Voice</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  button: {
    marginTop: 100,
    backgroundColor: 'gray',
  },
});

export default RecordVoices;
