import { TextProcessor } from "./TextProcessor";
import axios from 'axios';

// https://stackoverflow.com/questions/5528850/how-do-you-connect-localhost-in-the-android-emulator
const WHISPER_ENDPOINT = 'http://10.0.2.2:8080';

export class AudioProcessor {

    private textProcessor: TextProcessor = new TextProcessor();

    constructor() { }

    // Audio file path string -> completion string
    public async handleAudioInput(audioFilepath: string, audioEncoded: string) {
        // Call whisper API to transcribe audio
        const transcription: string = await this.speechToText(audioFilepath, audioEncoded);
        console.log("Yay! The transcription is done " + transcription);

        // Text complete the audio transcription
        // const textCompletions: string[] = await this.textProcessor.completeText(transcription);
        // return textCompletions;
        return [transcription];
    }

    private speechToText(audioFilepath: string, audioEncoded: string): Promise<string> {
        return axios.post(WHISPER_ENDPOINT, {
            "audio_filepath": audioFilepath,
            "audio_encoded": audioEncoded
        }).then(resp => {
            console.log(resp.data);
            return resp.data;
        })
        .catch(err => console.log(err));
    }
}
