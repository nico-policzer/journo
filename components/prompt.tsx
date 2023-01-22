

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
          <Button onPress={() => console.log("Talk")} title="talk" color={"green"}/> 
          <Button onPress={() => console.log("Write")} title="Write"/> 
        </View>
    </View>
 );
};


const styles = StyleSheet.create({
    prompt: {
      width: "90%",
      height: 100,
      backgroundColor: "blue",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#121212",
        justifyContent: "space-evenly",
        alignContent: "center",
      },
      promptButtons: {
        width: "100%",
        display: "flex",
        flexDirection:"row",
        gap: 40,
      },
      BoyIconStyle: {
        width: 125,
        height: 125,
      },
    
      iconContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "white",
        backgroundColor: "purple",
        fontFamily: "Hind",
      },



});

export default Prompt;