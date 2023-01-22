

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

interface promptInterface{
  prompt: string
}
function PromptScreen({setActivePrompt}: any) {
 return (
    <View style={styles.scrollFrame}>
      <Prompt prompt={"Something that made me smile today"} setActivePrompt={setActivePrompt}/>
      <Prompt prompt={"What was the kindest thing that someone did for me today?"} setActivePrompt={setActivePrompt}/>
      <Prompt prompt={"What is a goal that I would like to accomplish by the end of the month?"} setActivePrompt={setActivePrompt}/>
    </View>

 );
};


const styles = StyleSheet.create({
    scrollFrame: {
        display: "flex",
        flex: 1,
        gap: 20,
        justifyContent: "center",
        padding: 10,
        width: "100%",
        backgroundColor:'#FF9B26', // rgba(255, 155, 38, 1.0) orange
    },
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
      },
});

export default PromptScreen;