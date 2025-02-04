// var c = 50           //globalscoep

let a =1034
if(true){      // block scope
    let a =10
    const b = 20
    var c = 30
    console.log(a, "inner");
}

// console.log(a);
// console.log(b);
// console.log(c);


// scope
// global
// local
// nested scope

function one(){
    const usnername = "pragti"

    function two(){                        //inner function can get access of parent scope variables
        const website  = "youtube"
        // console.log(usnername);
        
    }

    // console.log(website);
    two()
    
}
// one()


if(true){
    const username = "pragati"
    if(username === "pragati"){
        const website  = " youtube"
        // console.log(username + website);
        
    }
    // console.log( website);
}
// console.log( username);


// ++++++++++++++++ interesting ++++++++++++++++

// definition of functon in javascipt


console.log(addone(5) );

function addone(num){
    return num+1
}

console.log( addTwo(5)); // it is hoisting 
 
const addTwo = function(num){           // sometimes it called expressions in js
    return num +2
}
