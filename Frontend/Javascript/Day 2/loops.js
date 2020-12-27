// for loop

// for(x = 0; x < 10; x++){
//     console.log(x);
// }

var data = ["Python", "Html", "Css"]

var dict_Data = {
    "key1" : "Val1",
    "Key2" : "Val2"
}

for(x = 0; x < data.length; x++){
    console.log(x)
    console.log(data[x])
}

for(x in dict_Data){
    console.log(x)
    console.log(dict_Data[x])
}
var i = 10
var Status = true
while(Status){
    console.log(i)

    if(i > 15 ){
        Status = false;
    }

    i++
}