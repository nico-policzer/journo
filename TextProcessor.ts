import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const configuration = new Configuration({
    apiKey: "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",
  });

export class TextProcessor {
    private openAI: OpenAIApi;

    constructor() {
        setupURLPolyfill();
        this.openAI = new OpenAIApi(configuration);
    }

    // Get list of completion choices (list of string)
    public async completeText(prompt: string) {
        // const response = await this.openAI.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: prompt,
        //     max_tokens: 10,
        //     temperature: 0,
        //   });

        //return response.data["choices"].map((x: any) => x["text"]);
        return ["Hello there, how are you? ", "I wish i could respond to your inquery.",
      " But I have no idea what it is!"];
    }
}