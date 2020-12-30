var data = ["Python", "Html", "Css","Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sapiente."]

function search_keyword(){
    document.getElementById("items").innerHTML = ""
    var keyword = document.getElementById("search_input").value
    var temp = []
    for(x = 0; x<data.length; x++ ){
        if(data[x].indexOf(keyword) != -1) {
            temp.push(data[x])
        }
    }
    if(temp.length > 0){
        refresh_data(temp)
        document.getElementById("alert").innerHTML = ""
    }
    else{
        document.getElementById("alert").innerHTML = "Item not found"
    }
    
}


function refresh_data(data){
    for(x=0;x<data.length;x++){
        document.getElementById("items").innerHTML += `<li>${data[x]}</li> ` 
    }
}

refresh_data(data)