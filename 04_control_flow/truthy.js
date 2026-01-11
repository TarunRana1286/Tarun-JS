const userEmail = "tarun@user.com"

if(userEmail){
    console.log("Got User Email");
    
}
else{
    console.log("Dont't Have Email");
    
}

// Falsy Values //

//false, 0, -0, BigInt 0n, null, undefined, NaN,""

// Truthy Values
 //"0", 'Fasle', [], {}, function(){}," "

 const email= []
 if(email.length ===0){
    console.log("Array Is Empty");
 }

 const emptyObject = {}
 if(Object.keys(emptyObject).length ===0){
    console.log("Empty Object");
    
 }


 //nullish coaleascing operator (??) :null  undefined

 let val1;
 //val1 = 5 ?? 10
 //val1 = null ?? 10

 val1 = undefined ?? 10

 console.log(val1);

 // Terniry Operator //

 //condition ? true : false

 const icedteaprice = 100
 icedteaprice >= 80 ? console.log("More than 80") : console.log("Less than 80");
 
 
 
