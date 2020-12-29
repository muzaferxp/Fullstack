
var num1 = 0;
var num2 = 0;
var oprt = 0;
var total = 0;

function add_input(num){
    document.getElementById("user_input").value += num 
}


function set_num(opt){

    oprt = opt
    
    if(num1 == 0){
        num1 = document.getElementById("user_input").value

        document.getElementById("total").innerHTML = "Num 1 is: " + num1 + " " + opt
    }
    else{
        num2 = document.getElementById("user_input").value

        document.getElementById("total").innerHTML = "Num 2 is: " + num2  + " " + opt
    }

    document.getElementById("user_input").value = ""

    console.log("num1:",  num1)
    
    console.log("num2:", num2)

}



function calculate(){

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    console.log(num1)
    console.log(num2)
    console.log("OPERATOR IS: " + oprt )


    if(oprt == "+"){
        total = num1 + num2
    }
    else if(oprt == "-"){
        total = num1 - num2
    }
    else if(oprt == "/"){
        total = num1 / num2
    }
    else if(oprt == "*"){
        total = num1 * num2
    }

   



    document.getElementById("total").innerHTML = "Total: " + total

}


function clear_input(){
    num1 = 0;
    num2 = 0;
    total = 0;
    document.getElementById("total").innerHTML = ""
    document.getElementById("user_input").value = ""
}