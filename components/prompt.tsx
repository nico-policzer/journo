

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface promptInterface {
  prompt: string
  setActivePrompt: any
}
// A single prompt panel which on press, changes the active journaling prompt in the app
function Prompt({ prompt, setActivePrompt }: promptInterface) {
  return (
    <View style={styles.prompt}>
      <TouchableOpacity activeOpacity={0.5} style={styles.touch} onPress={() => setActivePrompt(prompt)}>
        <Text style={styles.text}>{prompt}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  prompt: {
    backgroundColor: "rgba(52, 66, 60, 0.5)",
    alignContent: "center",
    justifyContent: "center",
    display:"flex",
    borderRadius: 30,
    height: 150,
  },

  touch: {
    flex:1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
  text: {
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    fontStyle: "italic",
    color: "white",
    margin: 30,
    flex: 1,
    fontFamily: "Hind",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 20,
  },
});

export default Prompt;