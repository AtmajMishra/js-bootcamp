
//  This --- is a very notorious keyword in the 
// javascript


console .log(this) //-- gives an empty scope of parenthesis for our node engine in the vscode but it will no always give that

let game="basketball"

function sayName()
{
    var name="Hitesh"
    console.log(this);
}

sayName();

//  this is a keyword that gives us access to the global context and
// in the case a node it gives me an empty scope and in the case of browser it gives me an access to window object 
