// in js multiple items can be store in array
// array can be resied
const myArr = [0,1,2,4,5]
const heros = ["shaktiman", "naagraaj"]

const myArr2 = new Array(1,2,4,5)
// console.log(myArr);

// Arrya Method
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(6)   //it add the value in the start of array
// myArr.shift()   //it remove the value from the start of array

// console.log(myArr.includes(9));  //it gives result in boolean
// console.log(myArr.indexOf(2));  //it gives result in boolean
const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);

//slice, splice
// console.log("A ", myArr);
const myn1 = myArr.slice(1,3)   //it only getthe value from the array notincluding range, 
                                // and also not make changes in original array
// console.log("B ", myArr);
// console.log(myn1);

const myn2 = myArr.splice(1,3) // it includes range and also cut the orignal array
// console.log("c ", myArr);
// console.log(myn2);



const marvel_heros = ["thor", "Ironman", " spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)   //array takes any value 
                            //   push add values in the orignal array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const allHero =  marvel_heros.concat(dc)  // concat add two arrays and return a new array, it not added in the existing array
// console.log(allHero);

const all_new_heros = [...marvel_heros, ...dc]   //spread operator
// console.log(all_new_heros); 

const anotherArry = [1,2,3, [4,5,6], 7,[5,7,[6,7]],6]
const realAnotherArry = anotherArry.flat(Infinity)
// console.log(realAnotherArry);

console.log(Array.isArray("Pragati"));  //it checks string is array or not
console.log(Array.from("Pragati"));     // it converts string in to arrya

console.log(Array.from({name:"Pragati"}));  // it not converted object into array directly, needs to clear whom to make array, key or value

let s1 =100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));
