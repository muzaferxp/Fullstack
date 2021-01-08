from flask import *
import os, json

app = Flask(__name__)
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route('/users')
def user():

    f = open(ROOT_DIR + "/Flask-Project/static/userdata.csv")

    data = []
    for line in f:
        data.append(line.split(","))
    f.close()

    obj = {'data' : data }

    res = json.dumps(obj)


    return render_template("users.html", maindata = data[1:]  , cols= data[0] , username = "Adam", res = res )

@app.route("/survey")
def survey():
    return render_template("survey.html")


@app.route("/save_survey_data", methods=["POST", "GET"])
def save_survey_data():
    name = request.form['name']
    phone = request.form['phone']
    f = open( ROOT_DIR + "/Flask-Project/static/userdata.csv", "a")
    f.write(name +','+phone + '\n')
    f.close()
    return "Your data submitted successfully!"

if __name__ == "__main__":
    app.run(host = "localhost")