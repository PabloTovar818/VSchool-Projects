
//1a. require readline sync
const readline = require("readline-sync");

//1b. welcome user to escape room game
console.log("Welcome to the escape room game! Try to find the exit without dying!");

//global variables
var trapped = true;
var dead = false;
var hasKey = false;

//start game
while(trapped) {
    console.log("Press '1' to find a key");
    console.log("Press '2' to open the door");
    let option1 = readline.question();
    userAction(option1);
}

if (dead) {
    console.log("You have died! Try again!");
}
else {
    console.log("You escaped! Thanks for playing!");
}

//**************************functions*******************/
function userAction(option) {
    switch(option) {
        case "1":
            if (hasKey) {
                console.log("You already have the key.");
            }
            else {
                console.log("You have located the key!")
                hasKey = true;
            }
            break;
        case "2":
            console.log("You have opened the door!");
            console.log("You see a hole.");
            console.log("Press '1' to put your hand in the hole.");
            console.log("Press '2' to turn back");
            let option2 = readline.question();
            switch(option2) {
                case "1":
                    if(hasKey) {
                        console.log("You used the key to open the door!")
                        trapped = false;
                    }
                    else {
                        console.log("You placed your hand in the hole");
                        console.log("You've been pricked by a poisoned needle!")
                        trapped = false;
                        dead = true;
                    }
                    console.log()
                    break;
                case "2":
                    console.log("You close the door.")
                    break;
                default:
                    console.log("invalid action")
                    break;
            }
            break;
        default:
            console.log("invalid action");
            break;
    }
}