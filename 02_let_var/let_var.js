
//  var is mostly avoided now a days in writing a program . It was generally used in program before es6 
// engines so it is a pre es6 keyword which is avoided now a days

// let______var_________const

console.log("Difference between let , var and const")

let a=10;

// let a=9 cannot be writeen because initialization is done only once

{  
    let a=5;   // is a block element scope is block
    console.log(a);
}
console.log(a);

var c="ATMAJ";
console.log(c);   
var c="Mishra";
console.log(c);


// const must be initialized during declaration else throws error
const k=4;
console.log(k)