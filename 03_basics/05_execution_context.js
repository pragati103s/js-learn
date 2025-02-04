// Javascript  execution context
//1. global execution context  
// 2. functional  execution context
// eval  execution context  (global, used in mangoose and further)

// how to execute code, call stacks
// how to pass programs in memory, execute and get out of it
// 1. memory creation phase (memory allocation)
// 2. execution phase

// first global execution context is created and put it to this


let val1 = 10
let val2 = 3
function addnum(num12, num2){
    let total = num12, num2
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)


// step to run js program
/*
  1. global execution -> allocated to this
  2.memory phase/ creation phase 
  first allocated undefined to all variable
  addnum definition

  val1 -> undefined
  val2 -> undefined
  addnum -> defnition
  result1 -> defnition
  result2 -> defnition

  3. execution phase 
  val1 ->10
  val2 ->5
  addnum ->  new exectuion phase
          new variable environment  + execution thread

   memory phase and execution phase is created for each function 
   and after completion of function process it will be deleted

*/ 

// call stack
//  it follows LIFO  