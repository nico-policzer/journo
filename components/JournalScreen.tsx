

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
function JournalScreen(prop: any) {
    const prompt = prop.prompt;
 return (
    <View style={styles.frame}>
        <Text style={styles.text}> {prompt}</Text>
    <TextInput > ...
    </TextInput>
    </View>
 );
};


const styles = StyleSheet.create({
    frame: {
        height: "40%",
        width: "100%",
        display: "flex",
        flex: 1,
        gap: 40,
        backgroundColor:"white",
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