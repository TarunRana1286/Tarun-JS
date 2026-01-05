//// DATE

let myDate =new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

//let myCreatedDate =new Date(2025,0,23)
//let myCreatedDate =new Date(2025,0,23,5,3)

//let myCreatedDate = new Date("2023-01-24")
let myCreatedDate = new Date("01-15-2025")
//console.log(myCreatedDate.toLocaleString());

let dateTimestamp = Date.now()

// console.log(dateTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate =new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// String Interpollation `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday:"long"
})




