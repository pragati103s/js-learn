//  data type is categorised based on  allocation of memory 
// two types: 
// 1. Primitive  : 7 types
// string, number, boolean, null, undefined, symbol, bigint
// 2. Reference type (Non- primitive)
// Array, Objects, Functions

// JS is dynamically typed.


const score =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')   //SYmbol makes same valued variables unique
//  thats why it gives false
// console.log(id === anotherId)

const bigNumber = 3434535464565765765754453425n  //n is used to represnt bigint


// Non Primitives
const heros = ["shaktiman", "naagraj"]

my_obj = {
    name: "pragati",
    age: 10
}

const myFunction = function(){
 console.log("hello world")
}

console.log(typeof bigNumber)

// +============================ memories
// two types : Stack ( primitive), when changes in it, changes done in a copy and get a copy of it
//  heap(non primitive)  , when changes in it changes done in a original values

let myYoutubeName = "knowledge for gis and it tools"
let anothername = myYoutubeName
// in this scenario, created two variables which have a saparate space in the memory
// first pass the value of first varible , just get the copy of it 
// means both variables having same value
//  it means whatevere changes made in first variable or in second, change reflect only that
//  not in both
anothername = "pragati"
console.log(myYoutubeName)   
console.log(anothername);


//  but in non primitive if two variables are created and havinve same object(value)
// in memory variable have the reference of that object only
//  if changes made using any of the varible in the object then the changes reflect in both the variables

let userOne = {
    email: "sdf@gmail.com",
    upi: 2343443
}

let userTwo = userOne

userTwo.email = "fxcv@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

