from flask import *
import os, json

app = Flask(__name__)
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


#====================GLOBAL FUNCTIONS

def get_emp_data():
    f = open(ROOT_DIR + "/Flask-Project/static/emp_data.json")
    data = json.load(f)
    f.close()
    return data


def update_emp_data_in_file(emp_data,current_projects):
    obj = {
        "emp_data" : emp_data,
        "current_projects" : current_projects
    }
    f = open(ROOT_DIR + "/Flask-Project/static/emp_data.json", "w")
    f.write(json.dumps(obj, indent= 4))
    f.close()

    return {"status" : "Done"}


def delete_emp(emp):
    data = get_emp_data()
    empdata = data["emp_data"]
    empdata.pop(emp)
    update_emp_data_in_file(empdata, data["current_projects"])
    return {"status" : "Done"}
    


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/emp_data", methods = ["POST", "GET"])
def emp_data():
    f = open(ROOT_DIR + "/Flask-Project/static/emp_data.json")
    data = json.load(f)
    f.close()
    obj = {'data' : data}
    return  obj


@app.route("/delete_emp_api", methods=["POST", "GET"])
def delete_emp_api():
    name = request.form['name']
    delete_emp(name)
    return {"Status"  : "Done"}

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
    return {"status" : "Your data submitted successfully!"}


@app.route("/ajax_api", methods = ["POST", "GET"])
def ajax_api():
    f = open(ROOT_DIR + "/Flask-Project/static/userdata.csv")

    data = []
    for line in f:
        data.append(line.split(","))
    f.close()

    obj = {'data' : data }
    return  obj



@app.route("/ajax_test")
def ajax_test():
    return render_template("ajax_test.html")






if __name__ == "__main__":
    app.run(host = "localhost")