// Singleton
//Object.create

// Object Literals

const mysym = Symbol("symData")
const myuser ={
    name : "Tarun",
    "Full Name" : "Tarun Rana",
    age:26,
    [mysym]: "Symbol",
    city: "Ahmedabad",
    email : "tarun@test.com",
    isLoggedId: false,
    lastLoggedInDays : ["Monday", "Saturday"]
}

// console.log(myuser.name);
// console.log(myuser["name"]);
// console.log(myuser["Full Name"]);
// console.log(myuser[mysym]);

myuser.email="tarun@google.com"
//Object.freeze(myuser)
myuser.email="tarun@testun.com"
//console.log(myuser);

myuser.greeting = function(){
    console.log(" Hello my userrrr");
    
}

console.log(myuser.greeting());





