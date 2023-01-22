// import { CompletionRequest, EngineName, OpenAI } from "@dalenguyen/openai";

// const OPENAI_API_KEY: string = "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";

// export class TextProcessor {
//     private openAI: OpenAI;

//     constructor() {
//         this.openAI = new OpenAI(OPENAI_API_KEY);
//     }

//     public completeText(prompt: string) {
//         // From https://www.npmjs.com/package/@dalenguyen/openai
//         const completionRequest: CompletionRequest = {
//             prompt: `give me 3 journal prompts`,
//             temperature: 0.95,
//             max_tokens: 150,
//         };

//         this.openAI
//             .createCompletion(EngineName.Davinci, completionRequest)
//             .then((res) => console.log(res))
//             .catch((error) => console.error(error));
        
//         console.log("done");
//     }
// }
