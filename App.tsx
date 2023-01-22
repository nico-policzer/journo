/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavBar from "./components/NavBar";
import prompt from "./components/prompt";
import Prompt from './components/prompt';
import PromptScreen from "./components/PromptScreen";
import JournalScreen from "./components/JournalScreen";
import ArchiveMenu from "./components/ArchiveMenu";
import { AudioProcessor } from './AudioProcessor';


// import AudioRecorderPlayer, {
//   AVEncoderAudioQualityIOSType,
//   AVEncodingOption,
//   AudioEncoderAndroidType,
//   AudioSet,
//   AudioSourceAndroidType,
//  } from 'react-native-audio-recorder-player';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const [page, setPage] = useState<'journal'|'main'|'archive'>('main');
  const isDarkMode = useColorScheme() === 'dark';

  // const audioRecorderPlayer = new AudioRecorderPlayer();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = async () => {
    const audioProcessor: AudioProcessor = new AudioProcessor();

    audioProcessor.handleAudioInput("TODO filepath");
  }
  //   console.log("hello")
  //   const path = 'hello.m4a';
  //   const audioSet = {
  //     AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
  //     AudioSourceAndroid: AudioSourceAndroidType.MIC,
  //     AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
  //     AVNumberOfChannelsKeyIOS: 2,
  //     AVFormatIDKeyIOS: AVEncodingOption.aac,
  //   };
  //   console.log('audioSet', audioSet);
    
  //   audioRecorderPlayer.addRecordBackListener((e) => {
  //     console.log(e);
  //   });
    
  //   audioRecorderPlayer.startRecorder()
  //     .then((result: string) => {
  //       console.log(result);
  //     });
  //   // setPage('main')
  // };

  return (
    <SafeAreaView style={styles.container}>
      {page ==='archive' && <ArchiveMenu/>}
      {page ==='main' && <JournalScreen prompt="HELLO DUDE"/>}
      {page ==='journal' && <PromptScreen/>}
      
      
      
      
      <NavBar pages={setPage}
      onPress={onPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
 
 
});

export default App;
