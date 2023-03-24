
// Array map method

// note- All these methods does not modify the original array
let arr=[45, 23, 21]
console.log(arr);

// map hum use karte hai jab humko naya array banana hota hai
// for each hum use karte hai jab humko operation karna hota hai

 let a=arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a)


let b=arr.map((value, index)=>{
    console.log(value, index)
    return value+1
})

let c=arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value+1
})

// value index and array use kar sakte ho all at a time



// Array filter method

let arr2=[2,4,5,6,7,8,8]

 let k=arr2.filter((a)=>{
    return a<5
})
console.log(k);


// Array reduce method

let arr3=[23, 3, 45, 56, 65]
function add(h1, h2)
{
    return h1+h2
}

let j=arr3.reduce(add)
console.log(j);



let k1=arr3.reduce((h1, h2)=>{
    return h1+h2;
})
console.log(k1);


