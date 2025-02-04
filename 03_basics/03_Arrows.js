const user = {
    username: "Pragti",
    price: 199,

    welcomeMesage: function(){           // this keyword is used to get value of current context
        console.log(`${this.username}, welcome to website`);
        // console.log(`${username}, welcome to website`);   // it gives error, variable not defined
        console.log(`${user.username}, welcome to website`);   // it gives error, variable not defined
        console.log(this);
        
    }

}

// user.welcomeMesage()
// user.username = "Sam"
// user.welcomeMesage()
// console.log(this);            // in node js it returns empty but when run it on the browser 
                                //  then the global object in brower is window

// function chai(){
//     console.log(this);         // it gives many details of cuntion
//     let username = "hitesh"
//     console.log(this.username);  // it will not work as get access i objects
    
    
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//arrow function
const chai = () =>{ 
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addTwo(2,4));

//  if use curly braces use return
//  implicit return    ,  when function definition of one line
// const addTwo = (num1, num2) =>  num1+num2 
// const addTwo = (num1, num2) => ( num1+num2 )
const addTwo = (num1, num2) => ({username: "pragati"}) 
console.log(addTwo(2,4));
