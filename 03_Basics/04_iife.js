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
