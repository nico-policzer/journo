

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
         <Button onPress={() => 1} title="write"/>
         <Button onPress={() => 1} title="talk"/>
        </View>
    </View>
 );
};


const styles = StyleSheet.create({
    prompt: {
      height: 200,
      backgroundColor: "gray",
      alignContent: "center",
      flex: 1,
    },
      promptButtons: {
        width: "auto",
        margin: 30,
        justifyContent:"center",
        display: "flex",
        flexDirection:"row",
        color: "yellow",
        gap: 40,
      },
      text: {
        color: "white",
        margin: 30,
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