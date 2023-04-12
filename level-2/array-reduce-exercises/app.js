//1. turn an array of numbers into a total of all the numbers
// function total(arr) {
//     const result = arr.reduce(function(final, num) {
//         final += num;
//         return final;
//     })
//     return result;
// }

// console.log(total([1,2,3])); // 6

//2. turn an array of numbers into a long string of all numbers
// function stringConcat(arr) {
//     const concat = arr.reduce(function(final, num) {
//         final += num.toString();
//         return final;
//     })
//     return concat;
// }

// console.log(stringConcat([1,2,3])); // "123"


//3. turn array of voter objects into count of how many people voted
// function totalVotes(arr) {
//     const voted = arr.reduce(function(final, object) {
//         if (object.voted) {
//             final++;
//         }
//         return final;
//     }, 0)
//     return voted;
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

//4. given array of all wishlist items, figure out how much it would cost to buy 
//everything at once

// function shoppingSpree(arr) {
//     const total = arr.reduce(function(final, obj) {
//         final += obj.price;
//         return final;
//     }, 0)
//     return total;
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

//5. given array of arrays, flatten them into a single array
// function flatten(arr) {
//     const newArray = arr.reduce(function(final, array) {
//         const x = final.concat(array);
//         return x;
//     }, [])
//     return newArray;
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6. given array of potential voters, return object representing the result of the vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {

   const voterStats = arr.reduce(function(final, array) {
    if (array.age >= 18 && array.age <= 25) {
        final.numYoungPeople++;
        if (array.voted) {
            final.numYoungVotes++;
        }
        return final;
    }
    else if (array.age >= 26 && array.age <= 35) {
        final.numMidPeople++;
        if (array.voted) {
            final.numMidVotes++;
        }
        return final;
    }
    else {
        final.numOldPeople++;
        if (array.voted) {
            final.numOldVotes++;
        }
    }
    return final;
   }, {numYoungPeople: 0, numYoungVotes: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
   return voterStats;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
