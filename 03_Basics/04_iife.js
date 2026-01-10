// Immedietly Invoked Function Expression

// When you declare function like below u dont need to call function "IIFE" as its in iife effect

// To avoid global scope's pollution as well as Immediate function call
(function chai (){
    //Names IIFE
    console.log(`Tarun Rana`);
    
})();

// If you do not use semicolon (;) for iife function it would not know where to stop
( () =>{
    console.log(`Rana Tarun`);
} 
)();


( (lastname) =>{
    // Parameter or unnamed iife
    console.log(`Rana Tarun ${lastname}`);
} 
)('Parso')


// After this JS Execution Concept

// {} Global EC eg. (this)


let val1=10
let val2=20

function addnum(val1,val2){

    let total= val1 + val2
    return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(10,5)