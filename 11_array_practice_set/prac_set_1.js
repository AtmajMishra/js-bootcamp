const prompt= require('prompt-sync')();

let a=prompt("enter the number:")
console.log(a);
a=Number.parseInt(a);
console.log(typeof(a))


let arr=[]

for(let i=0; i<6; i++)
{
    arr[i]=prompt("enter the number:- ")
}
console.log(arr)