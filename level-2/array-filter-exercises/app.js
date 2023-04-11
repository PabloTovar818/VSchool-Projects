//1. given array of nums, return new array that has only nums greater than or equal to 5
// function fiveAndGreaterOnly(arr) {
//     const result = arr.filter(num => num >= 5);
//     return result;
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//2. Given an array of numbers, return a new array that only includes even numbers
// function evensOnly(arr) {
//     const even = arr.filter(num => num % 2 === 0);
//     return even;
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//3. given an array of strings, return new array that only includes those 
//that are 5 characters or fewer in length

// function fiveCharactersOrFewerOnly(arr) {
//     const result = arr.filter(string => string.length <= 5);
//     return result;
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//4. Given an array of people objects, return new array that has filtered
//out all those who don't belong to the club
// function peopleWhoBelongToTheIlluminati(arr){
//     const inClub = arr.filter(person => person.member);
//     return inClub;
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));

//5. make a filtered list of all the people who are old enough to see The Matrix
//(older than 18)

function ofAge(arr){
    const ofAge = arr.filter(person => person.age >= 18);
    return ofAge;
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));