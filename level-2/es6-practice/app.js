//1. replace all vars with lets and consts. Alter code however necessary
//to make sure this continues to work. John is pet owner and his name should
//be stored differently than the other names

// const Name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", Name)
//     return petObjects
// }

// console.log(runForLoop(["cat", "dog"]));

//ES6 ARROW FUNCTIONS
//1. re-write this .map() using an arrow function
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return {
//             type: 'carrot',
//             name: carrot
//         }
//     })
// }

// console.log(mapVegetables(carrots));

//2. re-write this .filter()'s callback function using an arrow function
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly);
// }

// console.log(filterForFriendly(people));

//3. re-write the following functions to be arrow functions:
// (a, b) => a + b;
// (a, b) => a * b;

//4. write a pritnString function that takes firstName, lastName, and age as parameters
//and returns a string like the following:
// 'Hi Kat Stark, how does it feel to be 40?'
// firstName should default to 'Jane', lastName should default to 'Doe'
//age should default to 100

// function printString(firstName = 'Jane', lastName = 'Doe', age = 100) {
//     console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
// };

// printString("Kat", "Stark", 40);

//Use the shorthand syntax to make the following filter take up one line
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// function filterForDogs(arr) {
//     return arr.filter(animal => animal.type === "dog");
// }
// console.log(filterForDogs(animals));

//Using template literals, write a function that takes 'location' and 'name' parameters
//and outputs a message formatted like this:
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

function printPhrase(location, name) {
    console.log(`Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
}

printPhrase("Hawaii", "Janice");
