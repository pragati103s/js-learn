// singleton  Object.creat
// object declaration of two type: 1. litrals, 2.contructor
// literals

const mySym = Symbol("Kay1")   /// Symbol declaration 

const JsUser = {
    name: "Pragati",
    age: "19",
    "full name": "pragati srivastava",
    [mySym]: "myKey1",             //use symbol as a value in object, syntax of adding symbols in objects
    location: "Lucknow",
    email: "sds@gmial.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}                    //in objects keys are always treated as string, where we write it as a string or not

// how to access objects 
// console.log(JsUser.email);               //this way is applicanle when keys are not written as string
// console.log(JsUser["email"]);            // but when any key is written as string, then is must be access using []
// console.log(JsUser["full name"]);            // but when any key is written as string, then is must be access using []
// console.log(typeof JsUser[mySym]); 
// console.log( JsUser[mySym]); 


//  how to change value of objects

JsUser.email = "sbcvb@gmail.com"
// Object.freeze(JsUser)     //it is used to freeze the value  (not changeble)

JsUser.email = "ssdffdvb@gmail.com"
// console.log(JsUser);


// add function in objects
JsUser.greeting = function(){
    console.log("hello js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js User, ${this.name}`);                      // back ticks used for strting interpolation
    
}

console.log(JsUser.greeting());     // it execute function and return thier value
console.log(JsUser.greetingTwo());     // it execute function and return thier value
// console.log(JsUser.greeting);     // here function is not excuted only function return back(only reference of that function)

