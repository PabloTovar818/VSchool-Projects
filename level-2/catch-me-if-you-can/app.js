//1a. write a function that returns sum of two nums
//Throw an error if either argument is not data type number
//1b. call sum function inside a try block, return error if caught
// function sum(x, y){
// try {
//     if (!Number.isInteger(x) || !Number.isInteger(y)) {
//         throw new Error("Not a Number");
//     }
//     return x + y;
// }
// catch(err) {
//     return err;
// }
// }

// console.log(sum("9", 4));

//2a. given user object, write a function called login that 
//takes a username and password as parameters.
//throw an error if either of them don't match. Otherwise, log 
//to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){

    try {
        if (username === user.username && password === user.password) {
            return "login successful!";
        }
        else {
            throw new Error("login failed");
        }
    }
    catch(err) {
        return err;
    }
}

console.log(login("sam", "123abc"));
console.log(login("san", "123abc"));
