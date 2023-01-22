import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const configuration = new Configuration({
    apiKey: "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",
  });

export class PromptGenerator {
    private openAI: OpenAIApi;

    constructor() {
        setupURLPolyfill();
        this.openAI = new OpenAIApi(configuration);
    }

    // Get list of completion choices (list of string)
    public completeText() {


    return ["Something that made you smile today", "What was the kindest thing someone did for you today?", "What is a goal that you'd like to accomplish by the end of the month?"];
        
    }
}