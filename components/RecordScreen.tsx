

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

import LinearGradient from 'react-native-linear-gradient';


function RecordScreen({ setRecord }: any) {

    return (

        <View style={styles.frame}>
            <LinearGradient
                colors={['#ef1f8f', 'black']}
                end={{ x: 0.5, y: 0.7 }} style={styles.gradient}>
                <View style={styles.visualizerFrame} >
                    <Image source={require('../images/Visualizer.png')} style={styles.visualizer} />
                </View>
                <View style={styles.iconFrame}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setRecord(false)
                    }>
                        <Image
                            source={require('../images/boyRecord.png')} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    );
};


const styles = StyleSheet.create({
    visualizerFrame: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
        flex: 1,
    },
    visualizer: {
  
    },
    gradient: {
        width: "100%",
        height: "100%",
    },
    iconFrame: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: 40,
        alignItems: "center",
    },
    header: {
        color: "white",
        fontFamily: "Hind",
        fontWeight: "bold",
        padding: 100,
        fontSize: 30,
    },
    frame: {
        width: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default RecordScreen;