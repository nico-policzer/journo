

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

interface promptInterface{
  prompt: string
}
function Prompt({prompt}: promptInterface) {
 return (
    <View style={styles.prompt}>
        <Text style={styles.text}>{prompt}</Text>
        <View style={styles.promptButtons}>
         
        </View>
    </View>
 );
};


const styles = StyleSheet.create({
    prompt: {
      width: "90%",
      height: 100,
      backgroundColor: "#151411",
    },
      promptButtons: {
        width: "auto",
        margin: 30,
        justifyContent:"center",
        display: "flex",
        flexDirection:"row",
        gap: 40,
      },
      text: {
        color: "white",
        fontFamily: "Hind",
        textAlign: "center",
        fontWeight: "bold",
      },
      button: {
        padding: 40,
        color: "blue",
      },
});

export default Prompt;