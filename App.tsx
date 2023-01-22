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
import { Entry } from "./components/types";

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const [page, setPage] = useState<'prompts'|'main'|'archive'>('main');
  // Arhive will hold objects of type archive  in the format {date:string, title:string, entry:string, ai_response:string}
  // use .unshift to update
  const [archive, setArchive] = useState<Entry[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      {page ==='archive' && <ArchiveMenu archive={archive}/>}
      {page ==='main' && <JournalScreen prompt="HELLO DUDE" archive={archive} setArchive={setArchive}/>}
      {page ==='prompts' && <PromptScreen/>}
      
      
      
      
      <NavBar pages={setPage}/>
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
