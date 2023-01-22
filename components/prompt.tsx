

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
}
function Prompt({ prompt }: promptInterface) {
  return (
    <View style={styles.prompt}>
      <TouchableOpacity activeOpacity={0.5} style={styles.touch}>
        <Text style={styles.text}>{prompt}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  prompt: {
    height: 150,
    backgroundColor: "gray",
    alignContent: "center",
    flex: 1,
    display: "flex",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
  },

  touch: {
    flex:1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
  text: {
    color: "white",
    margin: 30,
    fontFamily: "Hind",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  button: {
    padding: 40,
    color: "blue",
  },
});

export default Prompt;