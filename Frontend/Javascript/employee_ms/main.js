

var deleted_emp = {

}


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

function cancel_edit_emp(){
    document.getElementById("edit_emp_form").style.display = "none"
}


function add_emp_form(){
    document.getElementById("add_form").style.display = "block"
}


function show_alert(id,msg){

    document.getElementById(id).style.display = "block"
    document.getElementById(id).innerHTML = msg

    setTimeout(function(){
        document.getElementById(id).innerHTML = ""
        document.getElementById(id).style.display = "none"
    },3000)

}


function add_employee(){

    var name = document.getElementById("emp_name").value 
    var skills = document.getElementById("emp_skills").value
    var hours = document.getElementById("emp_hours").value 

    if(name == "" || skills == "" || hours == ""){
        show_alert("epm_error_msg", "All the fields are required!")
    }
    else{

        if(name in data["emp_data"]){
            show_alert("epm_error_msg", "Employee with same name Already Exists!" )
        }else{
            show_alert("epm_success_msg", "Employee Added Successfully!" )
            data["emp_data"][name] = {"skills" : skills.split(","), "hours" : hours}
        }

        document.getElementById("emp_name").value  = ""
        document.getElementById("emp_skills").value = ""
       document.getElementById("emp_hours").value  = ""
       
        init()
    }


}




function edit_employee(){
    
    var name = document.getElementById("edit_emp_name").value 
    var skills = document.getElementById("edit_emp_skills").value
    var hours = document.getElementById("edit_emp_hours").value 

    if(name == "" || skills == "" || hours == ""){
        show_alert("epm_error_msg_edit", "All the fields are required!")
    }
    else{
            show_alert("epm_success_msg_edit", "Employee data updated Successfully!" )
            data["emp_data"][name] = {"skills" : skills.split(","), "hours" : hours}
        }

        document.getElementById("emp_name").value  = ""
        document.getElementById("emp_skills").value = ""
       document.getElementById("emp_hours").value  = ""
       
        init()

}


function update_emp(emp){
    
    document.getElementById("edit_emp_name").value  = emp
    document.getElementById("edit_emp_skills").value =  data["emp_data"][emp]["skills"]
   document.getElementById("edit_emp_hours").value  = data["emp_data"][emp]["hours"]
    document.getElementById("edit_emp_form").style.display = "block"
    
    setTimeout(function(){
        focus_input()
    },500)

        // element = document.getElementById("myTab")

        // element.scrollIntoView()
}

function delete_emp(emp){
    

    deleted_emp[emp] = data["emp_data"][emp]

    delete data["emp_data"][emp]

    console.log(deleted_emp)
    init()

}

function focus_input(){
    var element = document.getElementById("edit_emp_name")
    element.focus()
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
       

    
                document.getElementById("emp_profiles").innerHTML += `
                
                
                
            
                
                
                <div  style='background-color:#5ee0c6'  class='card p-4 my-4 rounded'>

                                
                                <div>

                                <div class="btn-group p-1 dropleft" style='float:right'>
                                            <button type="button" class="btn p-1 btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" >
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item"  onclick='update_emp(this.title)' href='#edit_emp_form' title='${emp}' >Update</a>
                                                <a class="dropdown-item" onclick='delete_emp(this.title)' title='${emp}'>Delete</a>
                                            </div>
                                            <button type="button" class="p-1 btn btn-primary"><i class="fas fa-ellipsis-v"></i></button>
                                </div>
                                </div>
                
                                <h3 style='float:left;width:fit-content;' >${emp}</h3>
                


                                <div class='d-flex'>
                                <h5>skills :</h5>

                                <div class='d-flex flex-wrap'>
                                    ${skills}
                                </div>
                                </div>
                                <small>Working hours: ${employees[emp]["hours"]}</small>
                                
                               


                                
                                </div>
                                
                                
                                `

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


