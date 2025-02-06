//if

// short hand notation  (implicit scope end with terminator)

if(balance > 100)  console.log("hello");

// nested f else
const userLoggin = true
const debitcard = true
const LoggedinFromGoogle = true
const LoggedinFromEmail = true

if(userLoggin && debitcard){
    console.log("allow to buy course");
    
}

if(LoggedinFromEmail || LoggedinFromGoogle){
    console.log("User logged in");
    
}