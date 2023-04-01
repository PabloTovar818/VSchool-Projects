import * as enemy from "./enemies.mjs";
import * as item from "./items.mjs";
import * as player from "./player.mjs";
import readline from "../node_modules/readline-sync/lib/readline-sync.js";

let distance = 0;
//print
export function print(str) {
    console.log(str);
}

//main menu
export function displayMenu() {
    print(`Select an option: \n'w' to walk\n'c' to camp`);
    let userOption = readline.question();
    return userOption;
}

//walk function
export function walk() {
    print(`${player.character.name} is walking...`);
    let encounter = encounterChance();
    return encounter;
}

//encounter chance funtion
function encounterChance() {
    let chance = Math.round((Math.random() * 100));
    let encounterArr = [];
    if (chance >= 0 && chance < 35) {
        //no enemy
        print(`No enemies encountered`);
        encounterArr = [false];
        return encounterArr;
    }
    else if (chance >= 36 && chance < 55) {
        //spawn slime
        print(`A ${enemy.enemyArray[0].type} appears!`);
        encounterArr = [true, enemy.enemyArray[0]];
        return encounterArr;
    }
    else if (chance >= 56 && chance < 69) {
        //spawn bat
        print(`A ${enemy.enemyArray[1].type} appears!`);
        encounterArr = [true, enemy.enemyArray[1]];
        return encounterArr;
    }
    else if (chance >= 70 && chance < 82) {
        //spawn goblin
        print(`A ${enemy.enemyArray[2].type} appears!`);
        encounterArr = [true, enemy.enemyArray[2]];
        return encounterArr;
    }
    else if (chance >= 83 && chance < 92) {
        //spawn wolf
        print(`A ${enemy.enemyArray[3].type} appears!`);
        encounterArr = [true, enemy.enemyArray[3]];
        return encounterArr;
    }
    else if (chance >= 93 && chance <= 100) {
        //spawn orc
        print(`An ${enemy.enemyArray[4].type} appears!`);
        encounterArr = [true, enemy.enemyArray[4]];
        return encounterArr;
    }
    else {
        print(`No enemies encountered`);
        encounterArr = [false];
        return encounterArr;
    }
}

//combat menu function
export function displayCombatMenu(enemy) {
    while (player.character.hp > 0 && enemy.hp > 0) {
        print(`${player.character.name} hp: ${player.character.hp}`);
        print(`${enemy.type} hp: ${enemy.hp}`);
        print(`'f' to fight!\n'r' to run!`);
        let userOption = readline.question();
        switch(userOption) {
            case 'f':
                //call fight function
                battle(enemy);
                break;
            case 'r':
                //call run function
                break;
            default:
                print(`invalid option`);
        }
    }
}

function battle(enemy) {
    if (player.character.speed > enemy.speed) {
        print(`${player.character.name} attacks ${enemy.type}`);
        enemy.hp -= player.character.attack;
        if (enemy.hp > 0) {
            print(`${enemy.type} attacks ${player.character.name}`);
            player.character.hp -= enemy.attack;
        }
        else {
            print(`${player.character.name} defeated ${enemy.type}!`);
        }
    }
    else {
        print(`${enemy.type} attacks ${player.character.name}`);
        player.character.hp -= enemy.attack;
        if (player.character.hp > 0) {
            print(`${player.character.name} attacks ${enemy.type}`);
            enemy.hp -= player.character.attack;
        }
        else {
            print(`${player.character.name} was slain by ${enemy.type}!`);
            player.character.isAlive = false;
        }
    }
}