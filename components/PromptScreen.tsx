

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
function PromptScreen() {
 return (
    <ScrollView style={styles.frame}>
    <View style={styles.scrollFrame}>
      <Prompt prompt={"TEXT PROMPT #1"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
      <Prompt prompt={"TEXT PROMPT #2"}/>
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

export default PromptScreen;