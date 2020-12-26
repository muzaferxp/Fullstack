
//=============Variables======

// rules to define a variable
// variable names should be unique
// variable case sensitive
// variable name should not be reserved keywords like (var, alert, else)
// it should not start with num or special cgaracter

// var keyword
// it can be re-init and re-defined
var Name = "Adam"

var Name = "Sam"

console.log(Name)

// LET keyword
let username = "David"

username = "Adam"

console.log(username)

// const keyword

const id = 'D125d'

console.log("Id: ", id)

//Data types

// 1) String 
// 2) Number
// 3) Boolean
// 4) Array
// 5) object
// 6) undefined
// 7) float


// string data type

var Name = "Adam";
var Name = 'Adam';

var count = "100";

console.log(count);
console.log("type is :" ,  typeof(count));

//number

var count = 100;

console.log(100);

console.log("type is :" ,  typeof(count));

// Boolean

var status = true;

var val = false;

console.log(true);
console.log("==================LIST==========")
// List
// index       0         1      2
var data = ["Python", "Html", "Css"];

console.log(data);

var data = [123, "Hyd", ["a", "b", "c"]];

console.log(data);


// two dimensiona array

var data = [
    ["A", "B", "C"],
    ["D", "E", "F"]
];

console.log(data[1][2]);

// Object
console.log("==================OBJECTS==========")
var data = {
    "Key2" : "B",
    "Key1" : 'A'
};

console.log(data["Key1"])

console.log(data.Key1)


var data = {
    "Key2" : ["A", "B", {"key" : 'Welcome'}],
    "Key1" : 'A',
    "Key1" : 'New Value' 
};

console.log(data)

var value = data.Key2[2].key

var value = data["Key2"][2]["key"]

console.log(value)

console.log(data.Key1)

// undefined
var Data;
console.log(Data)
console.log(typeof(Data))







