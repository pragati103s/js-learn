const userEmail = "pra@gati.ai"

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("dont have email")
}


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NAN, 

// truthy values
// "0", 'false', " ", [ ], {}, function(){} (empty items )

if (userEmail.length ===0) {
    console.log("Array is en=mpty");
    
}
const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is en=mpty");
    
}
 
// Nullish Coalescing Operator(??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1  = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


// terniary operator
// conditon ? ture : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ?  console.log("leass than 80") : console.log("more than 80");

