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

import LinearGradient from 'react-native-linear-gradient';

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
import RecordScreen from "./components/RecordScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const [page, setPage] = useState<'prompts' | 'main' | 'archive'>('main');
  // Arhive will hold objects of type archive  in the format {date:string, title:string, entry:string, ai_response:string}
  // use .unshift to update
  const [archive, setArchive] = useState<Entry[]>([]);
  const [activePrompt, setActivePrompt] = useState<string>('Hello User, \n Welcome to journo');
  const [focus, setFocus] = useState<boolean>(false);
  const [record, setRecord] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
      <SafeAreaView style={styles.container}>
        <LinearGradient
      colors={['#3380Da', 'black']}
      end ={{x:0.5, y: 0.7}}
      style={styles.gradient}>
        {page === 'archive' && <ArchiveMenu archive={archive} />}
        {page === 'main' && !record && <JournalScreen
          prompt={activePrompt}
          archive={archive}
          focus={focus}
          setArchive={setArchive}
          setFocus={setFocus} />}
        {page === 'main' && record && <RecordScreen setRecord={setRecord} />}
        {page === 'prompts' && <PromptScreen setActivePrompt={setActivePrompt} />}




        {!focus && !record && <NavBar pages={setPage} page={page} setRecord={setRecord} />}
        </LinearGradient>
      </SafeAreaView>


    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#FF9B26', // ORANGE : rgba(255, 155, 38, 1.0) orange
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    display:"flex",
    width:"100%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  }


});

export default App;
