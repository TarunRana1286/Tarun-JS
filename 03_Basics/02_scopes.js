let a =300

if (true) {
    let a = 10
    var b = 20
    const c = 30
    console.log("INNER :", a);
    
}

console.log(a);
//console.log(c);
//console.log(b); // Avoid using var as U can see var can be used outside the scope which should not happn
