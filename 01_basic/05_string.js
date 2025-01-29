const myName = 'pragati'

const gameName = new String('Application')

// string functions 
// it can be get from browser console 

const newString = gameName.substring(-2) //it can not be negative
// console.log(newString);
const anotherString = gameName.slice(-2)   //it can be negaive or reverse slicing
// console.log(anotherString);

// Ques.. what is difference between subtring and slice

const newStringOne = " pragati   "
const lineTerminatorString =" A new day"
console.log(newStringOne);
console.log(lineTerminatorString.trim());   // it only works at whitespaces and line terminator
//  can all spaces between " A new day" string is removed using trim()

const url = " A world is full of world "
console.log(url.replace('world', '&'))  // can it replace in whole string is a word is repeated in tha sentence


// Ques.. what is difference between  trim and replace
// practice all string function is done here