

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

// A screen displaying a prompt and allowing users to input their journal responses
function JournalScreen(prop: any) {
    const prompt = prop.prompt;
    const archive = prop.archive;
    const setArchive = prop.setArchive;
    const setFocus = prop.setFocus;
    const focus = prop.focus;
    const [response, setResponse] = useState('Please enter a query.');
    return (
        <View style={styles.frame}>
            <Text style={styles.text}> {prompt}</Text>
            <TextInput  style={focus? styles.input_focus: styles.input} placeholder="Type here"
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

    let toAI = "Read the following journal entry and, assuming it is complete, give a response to it that is within two sentences, providing well-being recommendations. If the text seems incomplete or doesn't seem like a journal entry, respond with an apology about how you aren't able to understand their entry:\n"  + prompt + "\n" + entry;
    const textProcessor: TextProcessor = new TextProcessor();
    const results: string[] = await textProcessor.completeText(toAI);
    let dateOfEntry = months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
    const loggedEntry: Entry = { title: prompt, date: dateOfEntry, entry: entry, ai_response: "\njourno:\n" + results.join(" ").trim(), id: date.getTime() }

    archive.unshift(loggedEntry);
    setArchive(archive);
    setResponse(results);


}

const styles = StyleSheet.create({
    frame: {
        width: "100%",
        display: "flex",
        flex: 1,
        //backgroundColor: '#FF9B26',
    },
    input: {
        flex: 1,
        padding: 15,
        textAlignVertical: "top",
        color:"white",
        marginHorizontal: 20,
    },
    input_focus: {
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: "rgba(0,0,0, 0.5)",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 15,
        paddingTop: 30,
        textAlignVertical: "top",
        color:"white",
        fontSize:14,
        fontFamily:"Hind",
        letterSpacing:1,
        lineHeight:100,
    },
    text: {
        padding: 40,
        color: "white",
        fontFamily: "Hind",
        height: "auto",
        fontSize: 25,
        fontWeight: "800",
        textAlign: "center",
        fontStyle:"italic",
        justifyContent: "flex-start",
    }
});

export default JournalScreen;