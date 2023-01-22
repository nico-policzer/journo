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
            max_tokens: 100,
            temperature: 0,
          });

        return response.data["choices"].map((x: any) => x["text"]);
    }

    public async generatePrompts() {
        const response = await this.openAI.createCompletion({
            model: "text-davinci-003",
            prompt: "Give me a list of 3 prompts",
            max_tokens: 10,
            temperature: 0,
          });

          console.log(response.data["choices"]);
        return response.data["choices"].map((x: any) => x["text"]);
    }

    // public async generatePrompts(): {
    //     const response = await this.openAI.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: "Give me a list of 3 prompts",
    //         max_tokens: 10,
    //         temperature: 0,
    //     });

    //     return response.data["choices"].map((x: any) => x["text"]);
    // }
}
