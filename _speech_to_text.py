import whisper
import openai

# Path to audio file
transcribe = input()
openai_key = "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"


def speech_to_text(audio: str) -> str:
    """
    :param audio: Name of the audio file
    :return: Transcription of the audio file as a string
    """

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

    return response["choices"][0]["text"]


print(speech_to_text(transcribe))
