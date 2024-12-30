
const { calculateAdd, calculateMultiply } = require("./calculate");

var a = 100;
var b = 200;

// setTimeOut : asynch 
setTimeout(() =>  { 
    console.log(" Thank you for calling me after 10s ")
}, 10000)


setTimeout(() =>  { 
    console.log("Thank you for  calling me after 0s ")
}, 0)


const c = 100;

let d = calculateAdd(calculateMultiply(a, b) , c);

console.log(" The result is %s", d );





