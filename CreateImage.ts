import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const configuration = new Configuration({
    apiKey: "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",
  });

export class CreateImage {
    private openAI: OpenAIApi;

    constructor() {
        setupURLPolyfill();
        this.openAI = new OpenAIApi(configuration);
    }

    // Given a list (in str) returns an image based on sentiment of the list
    public async completeText(prompt: string) {
        const response = await this.openAI.createCompletion({
             model: "text-davinci-003",
             prompt: "The word in [confused, joyful, melancholy, excited, depressed, curious, optimistic, contempt] that describe the following: " + prompt,
             max_tokens: 10,
             temperature: 0,
           });


        const image = await this.openAI.createImage({
             prompt: response.data["choices"].map((x: any) => x["text"]),
             n: 1,
             size: "256x256",
           });
         
        return image.data.map((x: any) => x["url"]);
    }
}