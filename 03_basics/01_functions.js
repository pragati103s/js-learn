// console.log("P");
// console.log("r");
// console.log("a");
// console.log("g");
// console.log("a");
// console.log("t");
// console.log("i");

function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("t");
    console.log("i");
}
sayMyName  // reference
// sayMyName()  // execution

// function addTwoNumber(number1, number2){
//  console.log(number1+number2);
 
// }

function addTwoNumber(number1, number2){
    let result = number1+number2
//  console.log(result);
 return result             // when return is define in a function after that there will  be no other lines of code will work
                            // return means end of the function definition
 
}
   // when need to store result of funtion to store in another variable then function should return the value
const result = addTwoNumber(3,4)     // when we call function for execution then it called arguments and when we define funtion it call parameters
// console.log(result);

// function loginUserMessage(username){   
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Pragati"));
// console.log(loginUserMessage());
  // if user not pass any argument then funtion return undefined 
  // to avoid this issue if else for check the values or set some default value like
  function loginUserMessage(username = "sam"){   
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());  

function calculateCartPrice(val1, val2, ...num1){   //rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 5000, 600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and 
        price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 133
})

const myNewArray = [200, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([23,54,76]));

