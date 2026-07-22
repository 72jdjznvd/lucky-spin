from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="web")

@app.route("/")
def home():
    return send_from_directory("web", "index.html")
