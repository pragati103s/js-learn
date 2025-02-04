// Immediately Invoked Function Expressions (IIFE)
// to avoid polution of global scope , iIFe is used
// it execute immediately
//  syntax ()()   , first is for definition of function and second is for exeution

(function chai(){
    console.log("db Connected");
    
})();    // sometimes semicolon is neccessary to run it proper

(function chai(){                  // named iife
    console.log("db Connected");
    
})();

((name)=>{                            // unnamed iife, parameterised
    console.log(`db Connected ${name}`);
})('pragati')