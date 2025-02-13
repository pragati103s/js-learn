const programmin = ['js', 'cpp', 'java', 'python', 'swift']

const values = programmin.forEach((item) =>{
    // console.log(item);
    
})

// console.log(values);   // for each is not returning any value
                        // for this use other things:  
// filter
// there is a callback function and there is a condition in it 
const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums = num.filter( (num) => num> 4)
//  if define scope in function then return is needed
// const newNums = num.filter( (num) => {
//   return  num> 4
// })

// const newNums = []
// num.forEach( (num) =>{
//     if(num> 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//map loop is also work as filter

//  chaining 
const newNums  = num
.map( (num) => num * 10)
.map( (num)=> num + 10)
.filter((num)=> num>=40)
console.log(newNums);