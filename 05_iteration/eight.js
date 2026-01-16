const mynums =[1,2,3,4]

const mytotals = mynums.reduce(function (acc, curval) {
    console.log(`acc : ${acc} and curval ${curval}`);
    
    return acc + curval
},  3)

console.log(mytotals);
