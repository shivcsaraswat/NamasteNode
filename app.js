const { calculateAdd, calculateMultiply }  = require("./calculate")
const data = require("./data.json")
// Could be index.js
// Could be main.js or any other file name 
var name = "Namaste NodeJS";
var a = 10;
var b = 20;
console.log(data);
calculateAdd(a, b);
calculateMultiply(a, b);


console.log(name);
console.log(a + b);
console.log("Hello World");
console.log(this); // Empty Objec t