import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const configuration = new Configuration({
    apiKey: "PASTE API KEY HERE",
  });

export class TextProcessor {
    private openAI: OpenAIApi;

    constructor() {
        setupURLPolyfill();
        this.openAI = new OpenAIApi(configuration);
    }

    // Get list of completion choices (list of string)
    public async completeText(prompt: string) {
      // UNCOMMENT CODE BELOW 
        // const response = await this.openAI.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: prompt,
        //     max_tokens: 50,
        //     temperature: 0,
        //   });
        //   console.log(response.data);

        // return response.data["choices"].map((x: any) => x["text"]);;



        // COMMENT OUT THIS LINE |
        //                       v
        return ["Stand in CHATGTP Response, please see ./TextProcessor.ts for intstructions on how to connect to ChatGTP"];

        // TO USE CHAT GTP FUNCTIONALITY
        // 1 - Uncomment code above
        // 2 - sign up / log in to https://openai.com
        // 3 - on your account, visit https://platform.openai.com/account/api-keys
        // 4 - generate a new key, and paste it at the top of the page where is says "Paste API KEY HERE"
        // Have fun!
    }
}
