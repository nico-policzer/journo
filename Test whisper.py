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

print(response["choices"])

