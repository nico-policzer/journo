

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

// A single panel displaying an archive entry
function ArchivePanel({ entry }: { entry: Entry }) {

    return (

        <View style={styles.entry}>
            <Image source={require("../images/folderminus.png")}/>
            <View style={styles.content}>
                <Text style={styles.date}>{entry.date}</Text>
                <Text style={styles.title}>{entry.title}</Text>
                <Text style={styles.entryText}>{entry.entry}</Text>
                <Text style={styles.aiText}>{entry.ai_response} </Text>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    entry: {
        display: "flex",

        height: "auto",
        padding: 15,
        flex: 1,
        borderRadius: 20,
        flexDirection: "row",
        gap: 10,

    },
    content: {
        width: "90%",

        gap: 1,
    },
    aiText: {
        fontWeight: "bold",
        color: "rgba(255,255,255,0.7)",
        fontFamily: "Hind",
    },
    date: {
        color: "rgba(255,255,255, 0.5)",
        fontFamily: "Hind",
        fontWeight: "bold"
    },
    title: {
        color: "white",
        fontFamily: "Hind",
        fontWeight: "bold"
    },
    entryText: {
        color: "white",
        fontFamily: "Hind",
        fontWeight: "300"
    }
});

export default ArchivePanel;