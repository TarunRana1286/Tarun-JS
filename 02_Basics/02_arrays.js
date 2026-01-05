const marvel = ["Ironman","Thor","Captain"]

const dc = ["Batman","Flash","Superman"]

//marvel.push(dc);

// console.log("A" ,marvel);

//marvel.concat(dc)

// console.log("B", marvel);


//const newhero = marvel.concat(dc)
//console.log(newhero);

const allheros=[...marvel, ...dc]

//console.log(allheros);


const anotherarray = [1,2,3, [4,5,8],4,5,9,[4,9,[6,7,[8,2]]]]

const newanother=anotherarray.flat(Infinity)

//console.log(newanother);

console.log(Array.isArray("Tarun"))
console.log(Array.from("Tarun"));
console.log(Array.from({name : "Tarun"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
