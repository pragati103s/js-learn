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