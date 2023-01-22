// https://stackoverflow.com/a/64358954/13488316

import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, Platform, StyleSheet} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { PermissionsAndroid } from 'react-native';
import {RNFetchBlob} from 'rn-fetch-blob';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const Recorder = () : JSX.Element => {
    const[isRecording, setIsRecording] = useState(false);

    const dirs = RNFetchBlob.fs.dirs;
    

    useEffect(() => {
        Promise.resolve(handlePermissions)
    });

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
        const uri : string = await audioRecorderPlayer.startRecorder();
        console.log("-> recording at " + uri);
        audioRecorderPlayer.addRecordBackListener((e: any) => {
            console.log('Recording . . . ', e.currentPosition);
            return;
        });
        setIsRecording(!isRecording);
    };

    const onStopRecord = async () => {
        console.log("STOPPING RECORD!")
        const audio = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setIsRecording(!isRecording);
    };
  
    return (
        <View>
        <TouchableOpacity style={styles.touch} onPress={() => isRecording ? onStartRecord() : onStopRecord()}
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
