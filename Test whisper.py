import whisper
import openai

# Path to audio file
audio = input()
openai_key = "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"


model = whisper.load_model("base")
result = model.transcribe(str(audio))
transcription = result["text"]

openai.api_key = openai_key

response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Correct the errors in the following speech transcription: " + transcription,
    temperature=0.8,
    max_tokens=100,
)

print(response["choices"][0]["text"])

