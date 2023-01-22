

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

import { Entry } from "./types";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function ArchivePanel({entry}: {entry: Entry}) {

 return (
    <View style={styles.entry}>
        <Text style={styles.date}>{entry.date}</Text>
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.entryText}>{entry.entry}</Text>
        <Text style={styles.aiText}>{entry.ai_response} </Text>
    </View>
 );
};


const styles = StyleSheet.create({
    entry: {
        display: "flex",
        backgroundColor: "rgba(52, 66, 60, 0.5)",
        height: "auto",
        padding: 30,
        flex: 1,
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 1,

    },
    aiText: {
        fontWeight:"bold",
        color:"white",
        fontFamily:"Hind",
    },
    date: {
        color:"white",
        fontFamily:"Hind",
        fontWeight:"bold"
    },
    title: {
        color:"white",
        fontFamily:"Hind",
        fontWeight:"bold"
    },
    entryText: {
        color:"white",
        fontFamily:"Hind",
        fontWeight:"300"
    }
});

export default ArchivePanel;