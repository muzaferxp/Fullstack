// If
var a = 20;
var b = 20;

if(a > b){
    console.log("A is greater then b")
}
else{
  console.log("A is less then B")  
}

// else if

if( a < b){
    console.log("A is less then B") 
}
else if( a <= b){
    console.log("A is less then or equal to B") 
}
else{
    console.log("A is greater then B") 
}

// or 
if(a < b || a == b){
    console.log("A is less then or equal to B") 
}

if(a == b && a < 10){
    console.log("A is equal to b and greater than 10")
}