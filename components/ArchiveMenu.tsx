

import React from 'react';
import type { PropsWithChildren } from 'react';
import { processColor, TextInput, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';
import Prompt from "./prompt"
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ArchivePanel from "./ArchivePanel";
interface promptInterface{
  prompt: string
}
function ArchiveMenu() {
 return (
    <ScrollView style={styles.frame}>
    <View style={styles.scrollFrame}>
      {/* Archive Panels go here */}
      <ArchivePanel 
      title="Your New Years!"
      date="Jan 4th, 2023"
      entry="You went hard on new years. Nice job! It was fun."/>
      <ArchivePanel
      title="Karate - debunked"
      date="December 3rd 2022"
      entry="In this episode, we explore what exactly is going on inside the cities dojos to answer the question, is karate real?"
      />
      <ArchivePanel
      title="Top Ten Movies This AI thinks you should see"
      date="Today"
      entry="All of them. Go watch all of the damn movies."/>
    </View>


      </ScrollView>
 );
};


const styles = StyleSheet.create({
    scrollFrame: {
        display: "flex",
        flex: 1,
    },
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
      },
});

export default ArchiveMenu;