

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

function ArchivePanel(prop: any) {
    const title = prop.title;
    const date = prop.date;
    const entry = prop.entry;

 return (
    <View style={styles.entry}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.entryText}>{entry}
        </Text>
    </View>
 );
};


const styles = StyleSheet.create({
    entry: {
        display: "flex",
        backgroundColor: "gray",
        height: 300,
        padding: 30,
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