// IF

//
//Comparison Operators

//<, >, <=, >=, ==, !=,===, !==

// const isuserLoggedIn = true
// const tempreture = 46

// if(tempreture < 50){
//     console.log("Tempreture is less than 50");
// }else{
// console.log("Tempreture is greater than 50");
// }

// console.log("Executed");

// const score =220

// if (score > 200){

//     let power = "fly"
//     console.log(`User power is ${power}`);
// }
// console.log(`User power is ${power}`);


//const balance = 1000

//if(balance > 200) console.log(balance); // This is called short hand notation or Implicit notation

const isuserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = true
const loogedInfromEmail = false

if(isuserLoggedIn && debitCard){

    console.log("Allowed");
    
}

if(loggedInfromGoogle || loogedInfromEmail){

    console.log("Looged In");
    
}



