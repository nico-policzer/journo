

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
    let prompts = ["Something that made you smile today", "What was the kindest thing someone did for you today?", "What is a goal that you'd like to accomplish by the end of the month?"];
    
 return (
    <View style={styles.frame}>
        <View style={styles.header}>
            <Text style={styles.title}>How was your day?</Text>
            <Text style={styles.promptTitle}>PICK A PROMPT</Text>
    <View style={styles.scrollFrame}>
      <Prompt prompt={prompts[0]} setActivePrompt={setActivePrompt}/>
      <Prompt prompt={prompts[1]} setActivePrompt={setActivePrompt}/>
      <Prompt prompt={prompts[2]} setActivePrompt={setActivePrompt}/>
      </View>
    </View>
    </View>
 );
};



const styles = StyleSheet.create({
    scrollFrame: {
        display: "flex",
        flex: 1,
        gap: 20,
        justifyContent: "center",
        height: "80%",
        padding: 10,
        width: "100%",
    },
    frame: {
        width: "100%",
        height: "80%",
        flex:1,
    },
    header: {
        height: "80%",
        display: "flex",
        justifyContent: "flex-start",
        gap: 8,
        
    },
    promptTitle: {
        flex: 1,
        
        color: "white",
        fontFamily:"Hind",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:14,
        letterSpacing: 1,
        

    },
    title: {
        paddingTop: 40,
        fontSize: 25,
        color: "white",
        fontFamily:"Hind",
        textAlign:"center",
        fontWeight:"bold",

    }
});

export default PromptScreen;