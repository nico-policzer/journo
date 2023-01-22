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
        const response = await this.openAI.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 7,
            temperature: 0,
          });

        return response.data["choices"].map((x: any) => x["text"]);
    }
}
