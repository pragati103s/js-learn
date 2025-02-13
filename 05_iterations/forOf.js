//  for of 
//  especially for array
["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(greet);
    
}

//datatype and also an object in javascript
// it is used for unique values and also follow order  which is not in object
// it is not iteratable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

console.log(map);
for (const [key, value ]of map) {
    console.log(key);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spideramn'
}
//  for of is not working in object
for (const [key, value ]of myObject) {
    // console.log(key, value);
}

for (const key in map) {
    console.log(key);
}