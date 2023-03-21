//*************************prelims*******************************
//1. write a for loop that prints 0 - 9 to console.
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

//2. write a for loop that prints to the console 9 - 0.
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }

//3. write a for loop that prints these fruits to console
// const fruit = ["banana", "orange", "apple", "kiwi"];

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

//*********************bronze*************************************/
//1. write a for loop that will push the numbers 0 to 9 to an array
// var array = [];
// for (var i = 0; i < 10; i++) {
//     array.push(i);
// }
// console.log(array);

//2. write a for loop that prints to the console only even numbers 0 - 100;
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//3. write a for loop that will push every other fruit to an array
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// const evenFruit = [];
// for (var i = 0; i < fruit.length; i+=2) {
//     evenFruit.push(fruit[i]);
// }
// console.log(evenFruit);

//**********************silver************************************/
//1. write a loop that will print out all the names of the people 
//of the people array
// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]

// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }

//2. write a loop that pushes the names in a names array, and occupations into an
//occupations array
// var names = [];
// var occupations = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }

// console.log(names, occupations);

//3. write a loop that pushes every other name to an array starting with the first person
//in this case "harrison Ford", and every other occupation to another array starting
//with the "Singer"

// var evenNames = [];
// var oddOccupations = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 == 0) {
//         evenNames.push(peopleArray[i].name);
//     }
//     else {
//         oddOccupations.push(peopleArray[i].occupation);
//     }
// }
// console.log(evenNames, oddOccupations);

//***********************************gold*****************************/
//1. create array that mimics a grid like the following using nested for loops
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// var arr = [];
// for (var i = 0; i < 3; i++) {
//     var newArr = [];
//     for (var j = 0; j < 3; j++) {
//         newArr.push(0);
//     }
//     arr.push(newArr);
// }
// console.log(arr);

//2. create array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]
// var arr = [];
// for (var i = 0; i < 3; i++) {
//     var newArr = [];
//     for (var j = 0; j < 3; j++) {
//         newArr.push(i);
//     }
//     arr.push(newArr);
// }
// console.log(arr);
//3. create an array that mimics a grid like the following using nested for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]
// var arr = [];
// for (var i = 0; i < 3; i++) {
//     var newArr = [];
//     for (var j = 0; j < 3; j++) {
//         newArr.push(j);
//     }
//     arr.push(newArr);
// }
// console.log(arr);
//4. given a grid like the previous ones, write a nested for loop that would change
//every number to an x;
// var arr = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         arr[i][j] = "x";
//     }
// }
// console.log(arr);