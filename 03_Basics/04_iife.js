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

// Global Execution  ==> this

// Memory Phase //

val1 - undefined
val2 - undefined
addnum - undefined
result1 - undefined
result2 - undefined

// Execution Phase Result 1//

//val1 - 10
//val2 - 20
///addnum - New variable environment + Execution Thread
 
// Memory Phase //

val1 - undefined
val2 - undefined
total - undefined

// Execution Context //

num1 - 10
num2 - 20
total - 30

// AGAIN SAME PROCESS FOR RESULT 2

//global execution process follows the LIFO concept