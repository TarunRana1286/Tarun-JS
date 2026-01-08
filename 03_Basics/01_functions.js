// function sayMyname(){
//     console.log("T");
//     console.log("A");
//     console.log("R");
//     console.log("U");
//     console.log("N");   
// }

// sayMyname()

// function addtwonum(num1,num2){
//     console.log(num1 + num2);    
// }

function addtwonum(num1,num2){
    // let result = num1 + num2
    // return result

    // also way to return result
    return num1+num2
}

const result = addtwonum(3,6)

//console.log("Result: ",result);



function loggedinmessage(username = "Tarun") {  //username = "Tarun" is default value to avoid null/ undefined
    // if (username === undefined) {
    //     console.log("Please enter username");
    //     return
    // }
// ALSO CAN BE RUN AS BELOW

if (!username) {
        console.log("Please enter username");
        return
    }


    return `${username} just logged in`
}

//loggedinmessage("Tarun")// Direct no message in terminal comulsury need to log

//console.log(loggedinmessage());

function calculateCartPrice (val1,val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(100,200,400));

const user ={
    name : "Tarun",
    price : 199
}

function handleObject (anyObject){
console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);

}

//handleObject(user)

handleObject ({
    name : "Rana",
    price : 200
})

const myNewArray=[100,200,600]

function returnSecondValue (getarray){
    return getarray[2]
}

console.log(returnSecondValue(myNewArray));
