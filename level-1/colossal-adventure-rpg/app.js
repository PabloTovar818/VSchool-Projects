import * as enemy from "./modules/enemies.mjs";
import * as item from "./modules/items.mjs";
import * as player from "./modules/player.mjs";
import * as util from "./modules/utils.mjs";
import * as readline from "./node_modules/readline-sync/lib/readline-sync.js";

util.print("Welcome to Colossal Adventure RPG!");
util.print("Enter your character's name:");
player.character.name = readline.question();
util.print(`${player.character.name} prepares for an adventure!`);

util.displayMenu();