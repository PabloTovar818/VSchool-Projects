//Use the rest operator to help this function return an array of animals, no matter
//how many animals are passed to it;

// function collectAnimals(...animals) {
//     return animals;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//write a function that returns a food object with the array names as properties.
//Use ES6 shorthand syntax that becomes useful when a variable name is 
//mentioned twice in both the name and value of properties in your object

// function combineFruit(fruit, sweets, vegetables){
//     let foodObject = {
//         fruit,
//         sweets,
//         vegetables
//     };
//     return foodObject;
// };

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
/*=> 
    {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

//use destructuring to use the property names as variables.
//destructure the object in the parameter
// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }));

//use array destructuring to make this code ES6
// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst(["gameboy", "plunger", "pencil", "notebook"]))

//write destructuring code to assign variables that will help us return
//the expected string. Also, change the string to be using template literals
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
// }

// console.log(returnFavorites(favoriteActivities));

//use rest and spread operators to help take any number of arrays and return one array

// function combineAnimals(...arr) {
//     return arr;
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//try to make the following more ES6y
// function product(...numbers) {
//     var [nums] = numbers;
//     console.log(nums);
  
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }
// console.log(product([1,2,3,4,5])) 

//make the following function more ES6y. Use at least both rest and spread
// function unshift(array, rest) {
//     return [...array, rest];
// }

// array = ["a", "b", "c", "d"];
// console.log(unshift(array, "e", "f", "g"));

//write some destructuring code to help this function out
//use the es6 shorthand that helps make the syntax look less redundant 
function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ")
        firstName = name[0];
        lastName = name[1];

        return {firstName, lastName}
})
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]