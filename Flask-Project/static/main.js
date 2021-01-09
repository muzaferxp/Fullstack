var deleted_emp = {
}
var data = {}

$.ajax({
    type  : "GET" ,
    url : "/emp_data",
    dataType : "JSON",
    success : function(callback){
        console.log(callback)

        data = callback.data
        
        alert("AJAX SUCCESS")
        
        init_project(data["current_projects"])
        init_emp(data["emp_data"])
    },
    error: function(e){

    }
})



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
        init_emp(data["emp_data"])
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
        init_emp(data["emp_data"])
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
    init_emp(data["emp_data"])
    
}
function focus_input(){
    var element = document.getElementById("edit_emp_name")
    element.focus()
}
function init_emp(data){
    alert("INIT EMPLOYEE")
    document.getElementById("emp_profiles").innerHTML = ""
    //document.getElementById("emp_select").innerHTML = ""
    var employees = data
    for(emp in employees){

       // document.getElementById("emp_select").innerHTML += ` <a class="dropdown-item" href="#"><input id='${emp.split(" ").join("_")}'  onchange='select_emp(this.id)' type='checkbox'>${emp}</a>`

        console.log(employees[emp]["hours"])
        var skills = ""
        for(skl in employees[emp]["skills"]){
            skills += `<div><span class="badge badge-primary">${employees[emp]["skills"][skl]}</span></div>`
        }
                document.getElementById("emp_profiles").innerHTML += `<div class='col-12 col-md-4 col-lg-4'>
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
                                <div class='d-flex' style='overflow-x:auto;'>
                                    ${skills}
                                </div>
                                </div>
                                <small>Working hours: ${employees[emp]["hours"]}</small>
                                </div>
                                </div>
                                `
        } //=======================EMPLOYEE CARD CREATED======
      
}

selected_emps = {}
function select_emp(emp_id){
  
    if(document.getElementById(emp_id).checked == true){
        selected_emps[emp_id] = data["emp_data"][emp_id.split("_").join(" ")]
    }
    else{
       
        delete selected_emps[emp_id]
    }

    console.log(selected_emps)
}

function init_project(data){
      //=========================PROJECT CARD STARTS HERE========
      var projects_data = data
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
      document.getElementById("projects").innerHTML += `<div class='col-12 col-md-4 col-lg-4'><div style='background-color:#5ee0c6'  class='card p-4 my-4 rounded'>
                                                             

                                                                <div class="accordion" id="acr${project_name.split(" ").join("_")}">
                                                                
                                                                
                                                                <div class="card z-depth-0 bordered">
                                                                    <div class="card-header" id="heading${project_name.split(" ").join("_")}">
                                                                    <h5 class="mb-0">
                                                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                                                        data-target="#collapse${project_name.split(" ").join("_")}" aria-expanded="false" aria-controls="collapse${project_name.split(" ").join("_")}">
                                                                        ${project_name}
                                                                        </button>
                                                                    </h5>
                                                                    </div>
                                                                    <div id="collapse${project_name.split(" ").join("_")}" class="collapse" aria-labelledby="heading${project_name.split(" ").join("_")}" data-parent="#acr${project_name.split(" ").join("_")}">
                                                                    <div class="card-body">
                                                                    ${employee_cards}
                                                                    </div>
                                                                    </div>
                                                                </div>


                                                                </div>


                                                          </div></div>`
              }
}



function search_emp(){

    temp_data = {
        
    }

    var text = document.getElementById("search_emp_inp").value
    for(emp in data["emp_data"]){
        if(emp.includes(text)){
            temp_data[emp] = data["emp_data"][emp]
        }
        for(skl in data["emp_data"][emp]["skills"]){
            if(data["emp_data"][emp]["skills"][skl].includes(text)){
                temp_data[emp] = data["emp_data"][emp]
            }
        }
        
    }

    init_emp(temp_data)
}


var input = document.querySelector("#project_skills_input")

new Tagify(input)