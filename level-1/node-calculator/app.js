//calculator functions:
//take two ints from user
//take operation from user
//perform operation and display to user

//import readline-sync from node modules
var readlineSync = require("readline-sync");

//welcome
console.log("Welcome to Node Calculator");

//take user ints (parseInt converts readline string into integer)
var num1 = parseInt(readlineSync.question("Please enter your first number: "));
var num2 = parseInt(readlineSync.question("Please enter your second number: "));

//determine operation to perform
var operator = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");
console.log(calculate(num1, num2, operator));

//perform operation
function calculate(first, second, operation) {
    var result;
    switch(operation) {
        case "add":
            result = first + second;
            break;
        case "sub":
            result = first - second;
            break;
        case "mul":
            result = first * second;
            break;
        case "div":
            result = first / second;
            break;
        default:
             return "Not a valid operation. Closing calculator";
    }
    if (isNaN(result)) {
        return "error"
    }
    else {
        return "The result is " + result;
    }
}