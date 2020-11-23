from flask import Flask
from flask import render_template
from flask import send_file
from flask import request
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", flask_token="Hello   world")

@app.route('/upload', methods=['POST'])
def upload():
    # check if the post request has the file part
    if 'file' not in request.files:
        abort(404)

    file = request.files['file']
    mimetype = file.content_type
    filename = file.filename
    return "We received your file ;)"

app.run(debug=True)
