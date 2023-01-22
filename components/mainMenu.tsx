import React from 'react';
import type { PropsWithChildren } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// The main menu for the app, processes voice and text input.
function mainMenu() {
    return (
        <View style={styles.textFrame}>
            <Text style={styles.text}>How are you feeling today?</Text>
            <TextInput></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    textFrame: {
        display: "flex",
      },
      text: {
        textAlign: "center",
        color: "#FFFE",
        fontWeight:"bold",
        fontSize: 25,
        fontFamily:"Hind",
      },
});

export default mainMenu;
