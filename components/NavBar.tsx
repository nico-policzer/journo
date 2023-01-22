
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
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PromptGenerator } from './promptGenerator';

function NavBar(prop: any) {
    const setPage = prop.pages;
    const setRecord = prop.setRecord;
    const page = prop.page;
    const setPrompts = prop.setPrompts;
    
    

    return (
        <View style={styles.footer}>
            <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {

                    setPage('prompts');
                     }}>
                    <Image
                        source={require('../images/journalIcon.png')}

                    />

                </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    (page === 'main' && setRecord(true))
                    setPage('main')
                }
                }>
                    <Image
                        source={require('../images/boy.png')}
                        style={styles.BoyIconStyle}
                    />

                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setPage('archive')}>
                    <Image
                        source={require('../images/historyIcon.png')}

                    />

                </TouchableOpacity>

            </View>
        </View>
    );
}
async function getPrompts() {
    let generator: PromptGenerator = new PromptGenerator();
    return ["Something that made me smile today", "What was the kindest thing someone did for me today?", "What is a goal that i'd like to accomplish by the end of the month?"];
}

const styles = StyleSheet.create({
    BoyIconStyle: {
        height: 100,
        width: 135,
    },
    anotherContainer: {

    },
      iconContainer: {
        padding: 10,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: 'black',
        justifyContent: "space-evenly",
        alignContent: "center",
    },
}

)
export default NavBar;