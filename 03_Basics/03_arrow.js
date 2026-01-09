const user ={

    name : "Tarun",
    price: 999,

    welcomeMessage : function(){
            console.log(`${this.name}, Welcome to my Site`);
            console.log(this);
            
    }
}

// user.welcomeMessage()
// user.name = "Rana"
// user.welcomeMessage()

//console.log(this);

// function chai(){
// let username ="Tarun"
//     console.log(this); // If you print only this it would return system kind of data
//     console.log(this.username); // is you define this.user it would be undefined as it is only work for Objects
// }

// chai()

const chai = () =>{
 let username ="Tarun"
     console.log(this.username);
}
//chai()

// const addtwo = (num1, num2) =>{  Arrow Function
//    return num1 + num2
// }

const addtwo = (num1, num2) => num1 + num2 // Implicit Return


console.log(addtwo(3,12));
