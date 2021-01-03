

var data = {
    "emp_data": {
        "Adam": {
            "skills": [
                "Python-Flask",
                "Python"
            ],
            "hours": 8
        },
        "Sam": {
            "skills": [
                "Html",
                "Css"
            ],
            "hours": 4
        },
        "David": {
            "skills": [
                "MySQL",
                "Flask",
                "Python"
            ],
            "hours": 0
           
        },
        "Rahul": {
            "skills": [
                "Bootstrap",
                "Jquery"
            ],
            "hours": 10
        },
        "Aditya": {
            "skills": [
                "Python",
                "Flask"
            ],
            "hours": 8  
        }
    },
    "current_projects": {
        "SPMS": {
            "Employees": {
                "Adam": {
                    "hours": 4,
                    "skills": [
                        "Python"
                    ]
                },
                "Sam": {
                    "hours": 4,
                    "skills": [
                        "HTML"
                    ]
                }
            }
        },
        "COFFEE": {
            "Employees": {
                "Aditya": {
                    "hours": 4,
                    "skills": [
                        "Python",
                        "Flask"
                    ]
                },
                "Azeem": {
                    "hours": 6,
                    "skills": [
                        "HTML",
                        "Css",
                        "Javascript"
                    ]
                },
                "Aquib": {
                    "hours": 6,
                    "skills": [
                        "Python",
                        "Mysql"
                    ]
                }
            }
        }
    }
}


console.log(data["emp_data"])

function cancel_emp(){
    document.getElementById("add_form").style.display = "none"
}
function add_emp_form(){
    document.getElementById("add_form").style.display = "block"
}

function add_employee(){
    var name = document.getElementById("emp_name").value 
    var skills = document.getElementById("emp_skills").value
    var hours = document.getElementById("emp_hours").value 

    data["emp_data"][name] = {"skills" : skills.split(","), "hours" : hours}





    console.log(data["emp_data"])

    init()
}

function init(){
    document.getElementById("emp_profiles").innerHTML = ""
    var employees = data["emp_data"]
    for(emp in employees){
        console.log(employees[emp]["hours"])
        var skills = ""
        for(skl in employees[emp]["skills"]){
            skills +=   `<p class='bg-primary text-white rounded p-2 mx-4'>${employees[emp]["skills"][skl]}</p>` 
        }
       

    
                document.getElementById("emp_profiles").innerHTML += `<div  style='background-color:#5ee0c6'  class='card p-4 my-4 rounded'>
                                <h3>${emp}</h3>
                                <div class='d-flex'>
                                <h5>skills :</h5>

                                <div class='d-flex flex-wrap'>
                                    ${skills}
                                </div>
                                </div>
                                <small>Working hours: ${employees[emp]["hours"]}</small>
                                </div>`

        } //=======================EMPLOYEE CARD CREATED======




        //=========================PROJECT CARD STARTS HERE========

                var projects_data = data["current_projects"]
                

                console.log(Employees)
                
                for(project_name in projects_data){


                    var Employees = projects_data[project_name]["Employees"]
                  
                    var employee_cards = ""

                   
                    for(emp_name in Employees){
                        console.log(emp_name)

                    var skills = ""
                        for(skl in Employees[emp_name]["skills"]){
                            skills +=   `<p class='bg-primary text-white rounded p-2 mx-4'>${Employees[emp_name]["skills"][skl]}</p>` 
                        }


                        employee_cards += `<div class='card p-4 my-4 rounded'>
                                <h3>${emp_name}</h3>
                                <div class='d-flex'>
                                <h5>skills :</h5>

                                <div class='d-flex flex-wrap'>
                                    ${skills}
                                </div>
                                </div>
                                <small>Working hours: ${Employees[emp_name]["hours"]}</small>
                                </div>`

                            }
                
                document.getElementById("projects").innerHTML += `<div style='background-color:#5ee0c6'  class='card p-4 my-4 rounded'>
                                                                        <h3>${project_name}</h3>
                                                                        <div>
                                                                            ${employee_cards}
                                                                        </div>
                                                                    </div>`
                        }
                                

}



init()


