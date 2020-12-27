//====================Arithmetic Operators================
var a = 10;
var b = 6;
console.log("a: ", a);
console.log("b: ", b)


//Addition
c = a+b 

console.log(c)

//Subtraction
c = a - b
console.log(c)
//Division

c = a / b
console.log(c)
//Multiplication

c = a * b
console.log(c)
//Exponentiation 

c = a ** b
console.log(c)
//Modulus (Remainder)

c = a % b
console.log(c)
//Increment

a++
b++

console.log("a: ", a);
console.log("b: ", b)

//Decrement

a--
b--


console.log("a: ", a);
console.log("b: ", b)


//==============Assignment Operators=================

var a = 10;
var b = 5;
var c  = b += 1;

console.log( a  <  b)

console.log( a  ==  b)

console.log( a  <=  b)

console.log( a  >=  b)

console.log( a  !=  b)

var a = 4
var b = 5

console.log(a === b )

//========TYPE CONVERSION
console.log("========TYPE CONVERSION============")
var a  =  "10"

console.log(typeof(a))

var a = parseInt(a)

var a = "1.5"
var a = Number(a)
console.log(a)


// toString()
// var a = String(a)

// var a = a.toString()



// console.log(typeof(a))

var a = "1.5"

var a = parseFloat(a)

console.log("Float: ", a)

console.log(typeof(a))

// json string to object 
var data = '{"key" : "val"}'

var data = JSON.parse(data)

console.log(data.key)

console.log(typeof(data))

// object to string

var data = JSON.stringify(data)

console.log(data)

console.log(typeof(data))