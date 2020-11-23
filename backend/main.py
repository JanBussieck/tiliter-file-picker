from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", flask_token="Hello   world")

app.run(debug=True)
