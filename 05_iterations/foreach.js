const programmin = ['js', 'cpp', 'java', 'python', 'swift']


// highier order function: for each
// in call function, name is not required, and automatiCALLY IT is executed
// programmin.forEach( function (val) {
//     console.log(val);
    
// } )

programmin.forEach( (val)=>{
    // console.log(val);
})


// in for each other parameters are available, item, index and full array 
programmin.forEach( (item, index, arr) =>{
    // console.log(item, index, arr);
    
}) 

const myCoding = [ 
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
]

myCoding.forEach( (item) =>{
    console.log(item);
    
})