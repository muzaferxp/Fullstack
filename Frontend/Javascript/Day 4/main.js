//====================FUNCTIONS===============

function say_hello(){
    var name = document.getElementById("username").value
    console.log(name)

    var gender = document.getElementById("gender_input").value

    console.log(gender)
    var x = ""
    if(gender == "Male"){
        x = "Mr. "
    }else{  
        x = "Mrs. "
    }

    var message = document.getElementById("message").value
    console.log(message)


    document.getElementById("output").innerHTML = "<h1> Welcome " + x + name + "<br />  How can i help you? </h1>"

    document.getElementById("submit_btn").innerHTML = "Next"

    document.getElementById("header").innerHTML = "Javascript Basics - Day 3"

    refresh_data()
}

//======================event listners=========
//onclick
//onchange
//onkeyup



//DOM

// 1) document.getElementsByTagName("li")

var my_list = document.getElementsByTagName("li")
console.log(my_list)

// 2) document.getElementId("input")

var name = document.getElementById("username").value
console.log(name)


var firstname = 'Adam'
var lastname = 'smith'

var fullname = firstname + " " + lastname
console.log(fullname)

