// const coding = ["js","C#","java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     //return item; // foreach will not retuen any value
// } )

// //console.log(values); // for each will not return any value


const mynums = [1,2,3,4,5,6,7,8,9,10]

// let newnums = mynums.filter( (mynums) => mynums > 5)
// console.log(newnums);

// If you are using {} in arrow function you must use 'retun' orther wise blank array will be returned
// let newnums = mynums.filter( (mynums) => { return mynums > 5})
// console.log(newnums);

// const newnumb = []

// mynums.forEach( (num) => {
//     if(num > 5)
//     {
//         newnumb.push(num)
//     }
// })

// console.log(newnumb);


const books = [
    {
        title : 'Book1', Genre : 'fiction', publish : 1998,edition : 2026
    },
    {
        title : 'Book2', Genre : 'non-fiction', publish : 1999,edition : 2026
    },
    {
        title : 'Book3', Genre : 'sci-fi', publish : 1998,edition : 2026
    },
    {
        title : 'Book4', Genre : 'history', publish : 2000,edition : 2026
    },
    {
        title : 'Book5', Genre : 'fiction', publish : 2005,edition : 2026
    },
    {
        title : 'Book6', Genre : 'fiction', publish : 2008,edition : 2026
    },
    {
        title : 'Book7', Genre : 'fiction', publish : 1999,edition : 2026
    },
    {
        title : 'Book8', Genre : 'non-fiction', publish : 1998,edition : 2026
    },
    {
        title : 'Book9', Genre : 'sci-fi', publish : 2000,edition : 2026
    },
    {
        title : 'Book10', Genre : 'history', publish : 2008,edition : 2026
    }
]

//const userbooks= books.filter((bk) => bk.Genre === 'history')

let userbooks = books.filter( (bk) => {
    return bk.publish > 2000 && bk.Genre==='history'
} )
console.log(userbooks);
