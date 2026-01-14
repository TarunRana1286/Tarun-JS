const myObject = {
    js : 'Javascript',
    csharp : 'C#',
    java : 'Java',
    cpp : 'C++'
}

for (const key in myObject) {
    
    //console.log(key); // for KEY
    //console.log(myObject[key]); // for Object
   //console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const programming = ["JS","C#","JAVA","RUBY","SWIFT"]

for (const key in programming) {
    //console.log(programming[key]);
        
}

const map = new Map()

//The Map object holds key-value pairs and remembers the original insertion order of the keys.

map.set('IN',"India")
map.set('CH',"China")
map.set('JP',"Japan")
map.set('NZ',"New Zealand")
map.set('IN',"India")

for (const key in map) {
 console.log(key);
    
}