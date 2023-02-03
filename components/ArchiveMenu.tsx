

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
import ArchivePanel from "./ArchivePanel";
interface ArchiveMenuProps {
    archive: Entry[];
    title?: string;
}

// Menu page displaying users past journal entries with ChatGTPs response

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
        paddingBottom: 0,
        fontSize: 30,  
        flex: 1,
    },
   
    header: {
        display: "flex",
        textAlign:"center",
        height:"20%",
        justifyContent:'flex-end',
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
        height:"80%",
        display: "flex",
        flex: 1,
        backgroundColor:"rgba(0,0,0, 0.5)",
        marginHorizontal:20,
        borderTopLeftRadius: 30,
        padding: 10,
        borderTopRightRadius: 30,
    },
});

export default ArchiveMenu;