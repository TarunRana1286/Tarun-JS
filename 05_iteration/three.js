// for of

//["","",""] Array

//[{},{},{}]  Array Of Objects

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const strarr = ["Tarun","Rana","Ahmedabad"]

for (const name of strarr) {
    //console.log(name);
}

const greetings = "Hello Tarun!"

for (const greet of greetings) {
   // console.log(`Each Char is ${greet}`);
}

// MAPS

const map = new Map()

//The Map object holds key-value pairs and remembers the original insertion order of the keys.

map.set('IN',"India")
map.set('CH',"China")
map.set('JP',"Japan")
map.set('NZ',"New Zealand")
map.set('IN',"India")

//console.log(map);

for (const key of map) { // this for of loop will give response in Array
 console.log(key);
}

for (const [key,value] of map) { //  this loop will destructure the array
 console.log(key , ':-', value);
}



// FOR OF SYTANCT WON't WORK FOR OBJECTS as IT IS not iteratable
// const myObject = {
//     'game1' :'NFS',
//     'game2' :'GTA'
// }

// for (const [key,Value] of myObject) {
//     console.log(key, ': - ', Value);
    
// }
