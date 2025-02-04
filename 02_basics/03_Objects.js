// const tinderUser  = new Object()   //this singleton object
const tinderUser = {}                   //this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samuy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "xfvf@gmail.com",
    fullname: {
        userfullanme: {
            firstname: "Prgati",
            lastname: "Srivatava"
        }
    }
}


// console.log(regularUser.fullname.userfullanme.firstname);

//   object functions
const obj1 = { 1:"a", 2: "b", 3: "c"}
const obj2 = { 9:"a", 10: "b", 11: "c"}
const obj4 = { 5:"a", 6: "b", 7: "c"}

// const obj3 = { obj1, obj2}                 // it is object inside object, not joined
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // takes an emplty curly braces, then it must joined multiple object and return an object

const obj3 = {...obj1, ...obj2}
console.log(obj3);


// when we get values from data base we get arrays of object
// what should be done at that time

const users = [
    {
        id: 1,
        email: "pra@gmail.com"
    },
    {
        id: 1,
        email: "pra@gmail.com"
    },
    {
        id: 1,
        email: "pra@gmail.com"
    },
    {
        id: 1,
        email: "pra@gmail.com"
    },
]
// to access values from it use map function or following method
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    // it retuns all the key in the array
// console.log(Object.values(tinderUser));    // it retuns all the values in the array
// console.log(Object.entries(tinderUser));    // it retuns  the key values  in the array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pragati"
}

// const  { courseInstructor} = course    //de structuring
const  { courseInstructor : instructor} = course    //de structuring
console.log(instructor);

