# From https://pythonbasics.org/webserver/
# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
from io import BytesIO
import time
import json
import base64
import whisper
import openai

hostName = "localhost"
serverPort = 8080
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


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        self.send_response(200)
        self.end_headers()

        # decoded_body = base64.b64decode(body)
        body_string = body.decode("utf-8")
        body_json = json.loads(body_string)

        result = speech_to_text(body_json["audio_filepath"])

        response = BytesIO()
        response.write(bytes(result, encoding='utf8'))
        self.wfile.write(response.getvalue())


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
