import * as enemy from "./enemies.mjs";
import * as item from "./items.mjs";
import * as player from "./player.mjs";
import readline from "../node_modules/readline-sync/lib/readline-sync.js";

export let distance = 0;
//print
export function print(str) {
    console.log(str);
}

//main menu
export function displayMenu() {
    print(`Select an option: \n'w' to walk\n'c' to camp\n'i' for item submenu`);
    let userOption = readline.question();
    switch(userOption) {
        case "w":
            //call walk function
            let combatArr = walk();
            if (combatArr[0]) {
                displayCombatMenu(combatArr[1]);
            };
            distance++;
            break;
        case "c":
            //call camp function
            break;
        case "s":
            //call check status function
            break;
        case "i":
            //call item menu function
        default:
            print(`invalid selection`);
    }
}

//walk function
function walk() {
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

//combat menu function ****remember this is where combat starts so create new enemy object here
export function displayCombatMenu(target) {
    //create new enemy instance with passed enemy properties
    let currentEnemy = new enemy.Enemy(target.type, target.hp, target.speed, target.minAttack, target.maxAttack);
    let run = false;
    while ((player.character.hp > 0 && currentEnemy.hp > 0) && run == false) {
        print(`${player.character.name} hp: ${player.character.hp}`);
        print(`${currentEnemy.type} hp: ${currentEnemy.hp}`);
        print(`'f' to fight!\n'r' to run!`);
        let userOption = readline.question();
        switch(userOption) {
            case 'f':
                //call battle function
                battle(currentEnemy);
                break;
            case 'r':
                run = runChance(currentEnemy);
                break;
            default:
                print(`invalid option`);
        }
    }
}

function battle(enemy) {
    let playerDamage = getAttackDamage(player.character.minAttack, player.character.maxAttack);
    let enemyDamage = getAttackDamage(enemy.minAttack, enemy.maxAttack);
    if (player.character.speed > enemy.speed) {                      
        print(`${player.character.name} attacks ${enemy.type} for ${playerDamage}`);
        enemy.hp -= playerDamage;                         //implement min max attack
        if (checkIfAlive(enemy)) {                                                              //check if enemy is dead after being hit
            print(`${enemy.type} attacks ${player.character.name} for ${enemyDamage}`);
            player.character.hp -= enemyDamage;
            if (!checkIfAlive(player.character)) {
                print(`${player.character.name} was slain by ${enemy.type}!`);
                player.character.isAlive = false;
            }
        }
        else {
            print(`${player.character.name} defeated ${enemy.type}!`);
        }
    }
    else {
        print(`${enemy.type} attacks ${player.character.name} for ${enemyDamage}`);
        player.character.hp -= enemyDamage;
        if (checkIfAlive(player.character)) {
            print(`${player.character.name} attacks ${enemy.type} for ${playerDamage}`);
            enemy.hp -= playerDamage;
            if (!checkIfAlive(enemy)) {
                print(`${player.character.name} defeated ${enemy.type}!`);
            }
        }
        else {
            print(`${player.character.name} was slain by ${enemy.type}!`);
            player.character.isAlive = false;
        }
    }
}

function checkIfAlive(target) {
    if (target.hp > 0) {
        return true;
    }
    else {
        return false;
    }
}

function getAttackDamage(targetMinAttack, targetMaxAttack) {
    let min = Math.ceil(targetMinAttack);
    let max = Math. floor(targetMaxAttack);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function runChance(enemy) {
    let chance = Math.random() * 100;
    if (chance <= 50) {
        print(`${player.character.name} ran from ${enemy.type}!`)
        return true;
    }
    else {
        print(`${player.character.name} couldn't escape!!`)
        let enemyDamage = getAttackDamage(enemy.minAttack, enemy.maxAttack);
        print(`${enemy.type} attacks ${player.character.name} for ${enemyDamage}!`)
        player.character.hp -= enemyDamage;
        if (!checkIfAlive(player.character)) {
            print(`${player.character.name} was slain by ${enemy.type}!`);
            player.character.isAlive = false;
        }
        return false;
    }
}