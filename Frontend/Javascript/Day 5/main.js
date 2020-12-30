//====================BUILT IN FUNCTIONS===============
//string functions
// 1) .length
// 2) split
// 3) join
// 4) toLowerCase
// 5) toUpperCase
// 6) indexOf
// 7) search
// 8) slice
// 9) concat firstname.concat(" ",lastname)

// 1) .length
var Name = "Adam";
console.log(Name.length)


// 2) split
let techs = 'Python_Html_Css'

console.log(techs.split("_"))

//getting extension

filename = "data.py"

console.log("Extension is: " , filename.split(".")[1])


var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sapiente."

console.log(para.split(","))

// 3) join

var data = ["Python", "Css"]

console.log(data.join("_"))

// 4) toLowerCase

var name = 'Adam'

console.log(name.toLowerCase())

// 5) toUpperCase

console.log(name.toUpperCase())


// 6) indexOf
var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sapiente."

// console.log(para.indexOf("Mango"))

function search_keyword(para, keyword){
    var search = para.indexOf(keyword)
    var found;
    if(search != -1){
        found = true;
    }
    else{
        found = false;
    }

    return found;
}


console.log(search_keyword(para, "asd"))

// 7) search
console.log(para.search("asd"))

// 8) slice

var demo = "Python Html Css"

console.log(demo.slice(0,7))


// 9) concat

var text1 = "Python"
var text2 = "Html"


console.log(text1 +","+ text2)

console.log(text1.concat(",", text2))

console.log("=================================ARRAY FUNCTIONS===================")

//array functions
// 1) .length
// 2) forEach
// 3) push
// 4) pop
// 5) shift
// 6) unshift
// 7) indexOf

var data = ["python", "html", "css"]

console.log(data.length)

console.log(data[0])

//getting last item of list
var len = data.length - 1
var lastindex = len -1

console.log(data[lastindex])

// forEach

data.forEach(function(item,index){
    
    console.log(index, item)
    
})

// for(x = 0; x< data.length; x++){
//     console.log(x, data[x])   
// }



// push 

data.push("Flask")

console.log(data)

// pop

data.pop()

console.log(data)


//shift

data.shift()

console.log(data)

// unshift

data.unshift("MySql")

console.log(data)

// indexOf

console.log(data.indexOf("css"))