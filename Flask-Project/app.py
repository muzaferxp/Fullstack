from flask import Flask, render_template



app = Flask(__name__)


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
    f = open("E:/Data/WORKSHOP/FullStack development/Flask-Project/data.csv")

    data = []
    for line in f:
        data.append(line.split(","))
    f.close()

    return render_template("users.html", maindata = data[1:]  , cols= data[0] , username = "Adam" )


if __name__ == "__main__":
    app.run(host = "localhost")