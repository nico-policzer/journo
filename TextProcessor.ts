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
            max_tokens: 50,
            temperature: 0,
          });
          console.log(response.data);

        return response.data["choices"].map((x: any) => x["text"]);;
    }
}
