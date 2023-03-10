
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
                    <Image source={require('../images/journalIcon.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    (page === 'main' && setRecord(true))
                    setPage('main')
                }}>
                    <Image source={require('../images/boy.png')} style={styles.BoyIconStyle}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setPage('archive')}>
                    <Image
                        source={require('../images/historyIcon.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
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