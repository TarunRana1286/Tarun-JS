const mynums =[1,2,3,4]

// const mytotals = mynums.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval ${curval}`);
    
//     return acc + curval
// },  3)

const mytotals = mynums.reduce( (acc,curval) => acc + curval, 3)

//console.log(mytotals);

const shoppingCart = [
    {
        itemName : "Js Cource",
        price : 600,
    },
    {
        itemName : "Java Cource",
        price : 1600,
    },
    {
        itemName : "JQuery Cource",
        price : 900,
    },
    {
        itemName : "C# Cource",
        price : 1600,
    }
]

const pricetoPay = shoppingCart.reduce ( (acc , item) => acc + item.price,  0)

console.log(pricetoPay);

