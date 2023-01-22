// https://stackoverflow.com/a/64358954/13488316

import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';

import { AudioProcessor } from '../AudioProcessor';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const Recorder = () : JSX.Element => {
    const audioProcessor : AudioProcessor = new AudioProcessor();
    const[isRecording, setIsRecording] = useState(false);

    // const dirs = RNFetchBlob.fs.dirs;

    useEffect(() => {
        Promise.resolve(handlePermissions)
    }, []); // need dependency list - empty means only run on mount

    const handlePermissions = async () => {
        // https://github.com/hyochan/react-native-audio-recorder-player
        if (Platform.OS === 'android') {
            try {
                const grants = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                ]);

                console.log('write external stroage', grants);

                if (
                grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.RECORD_AUDIO'] ===
                    PermissionsAndroid.RESULTS.GRANTED
                ) {
                    console.log('Permissions granted');
                } else {
                    console.log('All required permissions not granted');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    }

    const onStartRecord = async () => {
        console.log("STARTING RECORD");
        console.log(audioRecorderPlayer);
        // try catch TODO
        const uri: string = await audioRecorderPlayer.startRecorder();
        console.log("uri = " + uri);

        const androidPathToRead: string = RNFS.CachesDirectoryPath + "/sound.mp4";
        
        // await RNFS.readDir(RNFS.CachesDirectoryPath)
        //     .then(result => {
        //         result.forEach(x => console.log("result:"+ x.name))
        //     })
        //     .catch(err => console.log("error " + err));
        
        const encodedAudioFile: string | void = await RNFS.readFile(androidPathToRead, 'base64')
            .then(result => {
                console.log("b64" + result);
                audioProcessor.handleAudioInput("", result);
                return result;
            })
            .catch(err => console.log(err));
        console.log("encodedAudioFile at: " + encodedAudioFile);
        // const uri : string = await audioRecorderPlayer.startRecorder();
        // console.log("-> recording at " + uri);
        // audioRecorderPlayer.addRecordBackListener((e: any) => {
        //     console.log('Recording . . . ', e.currentPosition);
        //     return;
        // });
        setIsRecording((curr) => !curr);
    };

    const onStopRecord = async () => {
        console.log("STOPPING RECORD!");
        console.log(audioRecorderPlayer);
        // console.log(await audioRecorderPlayer.stopRecorder());
        await audioRecorderPlayer.stopRecorder()
            .then(result => console.log("result:"+ result))
            .catch(err => console.log("error " + err));
        // audioRecorderPlayer.removeRecordBackListener();
        setIsRecording((curr) => !curr);
    };
  
    return (
        <View>
        <TouchableOpacity style={styles.touch} onPress={() => isRecording ? onStopRecord() : onStartRecord()}
        >
            <Text>Start</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touch: {
        backgroundColor: "blue",
        flex: 1,
        width: "100%",
    }


}


)
