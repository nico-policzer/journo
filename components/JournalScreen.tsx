

import React from 'react';
import { useState } from 'react';
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
function JournalScreen(prop: any) {
    const prompt = prop.prompt;
    const[text, setText] = useState('');
 return (
    <View style={styles.frame}>
        <Text style={styles.text}> {prompt}</Text>
    <TextInput style={styles.input} placeholder="... enter text here!"
    onSubmitEditing={(prop) => setText(prop.nativeEvent.text)}>
    </TextInput>
    <Button onPress={()=> submitPrompt(text)}
    title="submit" color="green"/>
    </View>
 );
};
function submitPrompt(prompt: string) {
    console.log(prompt);
}

const styles = StyleSheet.create({
    frame: {
        height: "40%",
        width: "100%",
        display: "flex",
        flex: 1,
        gap: 40,
        backgroundColor:"white",
      },
    input: {
        flex: 1,
    },
    text: {
        padding: 30,
        fontFamily:"Hind",
        fontSize: 20,
        fontWeight:"800",
        textAlign:"center",
    }
});

export default JournalScreen;