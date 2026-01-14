const coding = ["js","C#","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })


// Using Arrow function
// coding.forEach( (item) =>{
//     console.log(item);
// })


// with reference calling
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr) =>{
console.log(item,index,arr);
})