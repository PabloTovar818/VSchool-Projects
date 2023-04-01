import * as enemy from "./modules/enemies.mjs";
import * as item from "./modules/items.mjs";
import * as player from "./modules/player.mjs";
import * as util from "./modules/utils.mjs";
import * as readline from "./node_modules/readline-sync/lib/readline-sync.js";

//declare vars
let distance = 0;

util.print("Welcome to Colossal Adventure RPG!");
util.print("Enter your character's name:");
player.character.name = readline.question();
util.print(`${player.character.name} prepares for an adventure!`);

while(player.character.isAlive) {
    let userOption = util.displayMenu();
    switch(userOption) {
        case "w":
            //call walk function
            let combatArr = util.walk();
            if (combatArr[0]) {
                util.displayCombatMenu(combatArr[1]);
            };
            distance++;
            break;
        case "c":
            //call camp function
            break;
        case "s":
            //call check status function
            break;
        default:
            util.print(`invalid selection`);
    }
}

util.print(`Thanks for playing! You traveled a total of ${distance} miles!`);