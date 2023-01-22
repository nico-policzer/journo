/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>


      
      <View style={styles.content}>
        <Text>A text element</Text>
        <TextInput></TextInput>
      </View>
      <ScrollView style={styles.frame}>
      <Prompt prompt={"TEXT PROMPT #1"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt='TEXT PROMPT #3'/>
      

      </ScrollView>
      
      <NavBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  frame: {
    height: "40%",
    width: "100%",
    display: "flex",
    backgroundColor:"#3380DA",
  },
  content: {
    flex: 1,
    backgroundColor:"#3380DA",
    width: "100%",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    //'#4c2150',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
 
 
});

export default App;
