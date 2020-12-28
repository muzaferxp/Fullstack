var sample_data = ["Python", "Html", "Css", "Flask", "Mysql", "Bootstrap", "Jquery"]

console.log(sample_data)


function refresh_data(){
    for(x = 0 ; x < sample_data.length ; x++ ){
        document.getElementById("list_items").innerHTML += "<li>" + sample_data[x] + "</li>"
        console.log(sample_data[x])
        document.getElementById("my_cards").innerHTML += "<div class='card my-4 bg-primary text-white p-4'>" + sample_data[x]  + "</div>"
    }
}

