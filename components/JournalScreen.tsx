

import React from 'react';
import { useState } from 'react';
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
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextProcessor } from '../TextProcessor';
import { Entry } from './types';

function JournalScreen(prop: any) {
    const prompt = prop.prompt;
    const archive = prop.archive;
    const setArchive = prop.setArchive;
    const setFocus = prop.setFocus;
    //const[input, setInput] = useState('');
    const [response, setResponse] = useState('Please enter a query.');
    return (
        <View style={styles.frame}>
            <Text style={styles.text}> {prompt}</Text>
            <TextInput style={styles.input} placeholder="..."
                onFocus={() => setFocus(true)}
                onSubmitEditing={(prop) => {
                    setFocus(false)
                prop.nativeEvent.text && submitPrompt(prop.nativeEvent.text, prompt, setResponse, archive, setArchive)}}>
                
            </TextInput>

        </View>
    );
};
async function submitPrompt(entry: string, prompt: string, setResponse: any, archive: any, setArchive: any) {
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // {Add functionality to send to chatGTP here}

    let toAI = "Please provide a respond to this journal entry.\n" + entry;
    const textProcessor: TextProcessor = new TextProcessor();
    const results: string[] = await textProcessor.completeText(toAI);
    let dateOfEntry = months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
    const loggedEntry: Entry = { title: prompt, date: dateOfEntry, entry: entry, ai_response: results.join(" "), id: date.getTime() }

    archive.unshift(loggedEntry);
    setArchive(archive);
    setResponse(results);


}

const styles = StyleSheet.create({
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
        backgroundColor: '#FF9B26',
    },
    input: {
        flex: 1,
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15,
        textAlignVertical: "top",
    },
    text: {
        padding: 30,
        color: "white",
        fontFamily: "Hind",
        height: "auto",
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center",
        justifyContent: "flex-start",
    }
});

export default JournalScreen;