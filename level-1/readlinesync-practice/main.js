var readlineSync = require("readline-sync");
var name = readlineSync.question("what is your name: ");
console.log("Your name is " + name);