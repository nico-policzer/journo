

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


function RecordScreen({ setRecord }: any) {

    return (
        <View style={styles.frame}>
            <View style={styles.visualizerFrame} >
            <Image source={require('../images/Visualizer.png')} style={styles.visualizer}/>
            </View>
            <View style={styles.iconFrame}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => setRecord(false)
            }>
                <Image
                    source={require('../images/boyRecord.png')}/>
                    </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    visualizerFrame: {
        display: "flex",
        justifyContent:"flex-end",
        flex:1,
    },
    iconFrame: {
        flex: 1,
        display:"flex",
        justifyContent:"flex-end",
        paddingBottom: 40,
        alignItems:"center",
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
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
});

export default RecordScreen;