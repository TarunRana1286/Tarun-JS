// # Primitive Datatype

// 7 Types : String, Boolean, Null, Number, Symbol, undefined, Bigint

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id);
// console.log(anotherId);

// console.log(id===anotherId);

// # reference type : Non Primitive

// Array , Objects, functions

const hero=["shakti","naag","doga"]

let myObj = {
name:"Tarun",
surnamr:"Rana"
}

const myFunction = function () {
    console.log("Hello World");
}

//console.log(typeof hero);
//https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html

//++++++++++++++++++++++++++++++++++++++++/++

// Memory Section//

// Heap(Non Primitive) , Stack (Primitive) //

let myname ="Tarun Rana"

let myAnothername=myname;

myAnothername="Rana"

console.log(myname);
console.log(myAnothername);

let userone ={
 Email:"tarun@test.com",
 upi:"tarun@okicici"
}

let usertwo=userone

usertwo.Email="tarun@rana.com"

console.log(userone.Email);
console.log(usertwo.Email);

