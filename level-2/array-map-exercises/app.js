//1. make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//     let map = arr.map(x => x * 2);
//     return map;
// }
  
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2. take an array of numbers and make them strings
// function stringItUp(arr) {
//     let map = arr.map(x => x.toString());
//     return map;
// }

// console.log(stringItUp([2,5,100]));

//3. capitalie the first letter of each name and make the rest of the
//characters lowercase
// function capitalizeNames(arr) {
//     let map = arr.map(function(x) {
//         let upper = x.charAt(0).toUpperCase();
//         let lower = x.slice(1).toLowerCase();
//         return upper + lower;
//     })
//     return map;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//4. make an array of strings of the names
// function namesOnly(arr){
//     const map = arr.map(x => x.name);
//     return map;
// }
  
// console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
// ]));
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5. make array of strings of names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     const map = arr.map(function(x) {
//         if (x.age >= 18) {
//             return `${x.name} can go to The Matrix`;
//         }
//         else {
//             return `${x.name} is underage!`;
//         }
//     })
//     return map;
// }
  
// console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
// ]));
//   // ["Angelina Jolie can go to The Matrix",
//   // "Eric Jones is under age!!",
//   // "Paris Hilton is under age!!",
//   // "Kayne West is under age!!",
//   // "Bob Ziroll can go to The Matrix"]

//6. make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    let map = arr.map(function(x) {
        return `<h1>${x.name}</h1><h2>${x.age}</h2>`;
    })
    return map;
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]