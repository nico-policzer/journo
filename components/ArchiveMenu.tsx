

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
        <>
        <Text style={styles.header}> Past Entries</Text>
        <ScrollView style={styles.frame}>
            <View style={styles.scrollContent}>
                {archive.map((e) => <ArchivePanel entry={e} key={e.id}/>)}
            </View>
        </ScrollView>
        </>
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
    header: {
        color: "white",
        fontFamily:"Hind",
        fontWeight: "bold",
        padding: 30,
        fontSize: 30,
    },
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
    },
});

export default ArchiveMenu;