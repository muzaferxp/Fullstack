from flask import *
import os, json

app = Flask(__name__)
app.secret_key = "4f5s3v1c2df4s6df"
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
    



@app.route("/check_session")
def check_session():
    if "user" in session:
        return "session stored, name=" + session["user"] 
    else:
        return "session did not stored!"


@app.route("/set_session")
def set_session():

    #setting session variable
    session["name"] = "Abdul"

    return "session variable stored!"



@app.route("/remove_session")
def remove_session():
    #setting session variable
    session.pop("user")

    return "session variable remove!"



@app.route("/")
def home():
    if "user" in session:
        return render_template("index.html")
    else:
        return redirect(url_for("login"))
    


@app.route("/logout")
def logout():
    #setting session variable
    if "user" in session:
        session.pop("user")

    return redirect(url_for("login"))



@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/authenticate", methods= ["GET", "POST"])
def authenticate():
    f = open(ROOT_DIR + "/Flask-Project/static/creds.json")
    creds = json.load(f)
    f.close()
    user = request.form["name"]
    passw = request.form["passw"]
    if user in creds:
        if creds[user] == passw:
            print("Logged in!")
            status = "Logged in successfully!"
            session["user"] = request.form["name"]
        else:
            print("Password incorrect!")
            status = "Password incorrect!"
    else:
        print("User not found")
        status = "User not found"

    return {"status" : status }

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

def search_blog(data,tag):
    res = []
    for blog in data:
        if tag in data[blog]["tags"]:
            res.append(data[blog])
    
    return {"data" : res}

@app.route("/blog")
def blog():
    file = open(ROOT_DIR + "/Flask-Project/static/blogs.json")
    data = json.load(file)
    file.close()
    return render_template("blog.html",data = data)


@app.route("/search_blog", methods=["GET", "POST"])
def search():
    file = open(ROOT_DIR + "/Flask-Project/static/blogs.json")
    data = json.load(file)
    file.close()

    res = search_blog(data,request.form["tag"])

    return res


if __name__ == "__main__":
    app.run(host = "localhost")