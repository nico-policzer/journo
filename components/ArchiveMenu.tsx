

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
import { Entry } from './types'
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ArchivePanel from "./ArchivePanel";
interface promptInterface {
    prompt: string
}

interface ArchiveMenuProps {
    archive: Entry[];
    title?: string;
}

function ArchiveMenu({ archive }: ArchiveMenuProps) {

    return (
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}> Your Journey</Text>
                <Text style={styles.date}> 2023</Text>
            </View>
            <ScrollView style={styles.frame}>
                <View style={styles.scrollContent}>
                    {archive.map((e) => <ArchivePanel entry={e} key={e.id} />)}
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    scrollContent: {
        display: "flex",
        flex: 1,
        height: "100%",
        gap: 20,
        padding: 15,

    },
    content: {
        height:"90%",
    },
    title: {
        color: "white",
        fontFamily: "Hind",
        fontWeight: "bold",
        textAlign:"center",
        height: 50,
        padding: 30,
        fontSize: 30,  
        flex: 1,
    },
   
    header: {
        display: "flex",
        textAlign:"center",
        height:"20%",
        },
    date: {
        color: "white",
        fontFamily: "Hind",
        fontWeight: "bold",
        letterSpacing: 4,
        fontSize: 18,
        textAlign:"center",
        flex: 1,
    },
    frame: {
        width: "100%",
        height:"80%",
        display: "flex",
        flex: 1,
    },
});

export default ArchiveMenu;