//const whatsapp =new Object();

const whatsapp ={}

whatsapp.id="123abc"
whatsapp.name = "Rana"
whatsapp.isLoggedIn=false
//console.log((whatsapp));

const regularUser = {
    email : "tarun@test.com",
    userName : {
        fullName :{
            firstName : "Tarun",
            lastName : "Rana"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.userName);
// console.log(regularUser.userName.fullName);
// console.log(regularUser.userName.fullName.firstName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj4 = {5: "E", 6: "F"}

//const  obj3 = Object.assign({}, obj1,obj4)
//const obj3 = {obj1, obj2}

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users =[
    {
        id : 1,
        email : "tarun@gmail.com"
    },
    {
        id : 2,
        email : "tarun@yahoo.com"
    },
    {
        id : 3,
        email : "tarun@meta.com"
    },
]

//console.log(whatsapp);
// console.log(Object.keys(whatsapp));
// console.log(Object.values(whatsapp));
// console.log(Object.entries(whatsapp));

console.log(whatsapp.hasOwnProperty('isLoggedIn'));


// Object Destructuring
const cource = {
    courceName : "My JS Journey",
    price : "999",
    instructor : "Tarun Rana"
}

const {instructor} = cource
const {instructor : Tutor} = cource

console.log(instructor);
console.log(Tutor);



