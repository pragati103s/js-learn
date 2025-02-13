 const myNums = [1,2,3,4]

 const myTotal = myNums.reduce( function (acc, currval) {
    console.log(acc, currval);
    
    return acc+currval
 } , 0 )

 console.log(myTotal);
 

 // what is reduce and why it is used 