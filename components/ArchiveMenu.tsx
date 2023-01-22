

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
        <ScrollView style={styles.frame}>
            <View style={styles.scrollFrame}>
                {archive.map((e) => <ArchivePanel entry={e} key={e.id}/>)}
            </View>
           
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    scrollFrame: {
        display: "flex",
        flex: 1,
    },
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
    },
});

export default ArchiveMenu;