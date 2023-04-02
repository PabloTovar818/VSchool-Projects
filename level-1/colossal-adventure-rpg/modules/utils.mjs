import * as enemy from "./enemies.mjs";
import * as item from "./items.mjs";
import * as player from "./player.mjs";
import readline from "../node_modules/readline-sync/lib/readline-sync.js";

export let distance = 0;
//print
export function print(str) {
    console.log(str);
}

export function printLinebreak() {
    console.log(`**********************************`);
}

//main menu
export function displayMenu() {
    printLinebreak();
    print(`Select an option: \n'w' to walk\n'c' to camp\n's' for status\n'i' for item submenu`);
    let userOption = readline.question();
    printLinebreak();
    switch(userOption) {
        case "w":
            //run itemdropchance first
            itemDropChance();
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
            checkStatus();
            break;
        case "i":
            displayInventoryMenu();
            break;
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
        print(`'f' to fight!\n'r' to run!\n'i' for item submenu`);
        let userOption = readline.question();
        switch(userOption) {
            case 'f':
                battle(currentEnemy);
                break;
            case 'r':
                run = runChance(currentEnemy);
                break;
            case 'i':
                displayInventoryMenu();
                break;
            default:
                print(`invalid option`);
        }
    }
}

function battle(enemy) {
    printLinebreak();
    let playerDamage = getAttackDamage(player.character.minAttack, player.character.maxAttack);
    let enemyDamage = getAttackDamage(enemy.minAttack, enemy.maxAttack);
    if (player.character.speed > enemy.speed) {                      
        print(`${player.character.name} attacks ${enemy.type} for ${playerDamage}`);
        enemy.hp -= playerDamage;                         
        if (checkIfAlive(enemy)) {
            print(`${enemy.type} attacks ${player.character.name} for ${enemyDamage}`);
            player.character.hp -= enemyDamage;
            if (!checkIfAlive(player.character)) {
                print(`${player.character.name} was slain by ${enemy.type}!`);
                player.character.isAlive = false;
            }
        }
        else {
            print(`${player.character.name} defeated ${enemy.type}!`);
            itemDropChance();
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
                itemDropChance();
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

function displayInventoryMenu() {
    printLinebreak();
    if (player.character.inventory.length == 0) {
        print(`no items in inventory`);
    }
    else {
        print(`current inventory status:`);
        //display items only if they are in inventory
        if (player.character.inventory.includes(item.potion)) {
            print(`'p' for potion`);
        }
        if (player.character.inventory.includes(item.attackJem)) {
            print(`'a' for attack jem`);
        }
        if (player.character.inventory.includes(item.speedJem)) {
            print(`'s' for speed jem`);
        }
        if (player.character.inventory.includes(item.hpJem)) {
            print(`'h' for hp jem`);
        }
        print(`'x' to exit`);
        let userOption = readline.question();
        switch(userOption) {
            case 'p':
                if (player.character.inventory.includes(item.potion)) {
                    let index = player.character.inventory.indexOf(item.potion);
                    print(`${player.character.name} used ${player.character.inventory[index].type}`);
                    if (player.character.hp == player.character.maxHp) {
                        print(`hp already at max`);
                    }
                    else if (player.character.hp >= (player.character.maxHp - 10)) {
                        player.character.hp = player.character.maxHp;
                        player.character.inventory.splice(index, 1);
                    }
                    else {
                        player.character.hp += player.character.inventory[index].value;
                        player.character.inventory.splice(index, 1);
                    }
                }
                else {
                    print(`no potion in inventory`);
                }
            case 'a':
                if (player.character.inventory.includes(item.attackJem)) {
                    let index = player.character.inventory.indexOf(item.attackJem);
                    print(`${player.character.name} used attack jem boosting max attack`);
                    player.character.attack += player.character.inventory[index].value;
                    player.character.inventory.splice(index, 1);
                }
                else {
                    print(`no attack jem in inventory`);
                }
            case 's':
                if (player.character.inventory.includes(item.speedJem)) {
                    let index = player.character.inventory.indexOf(item.speedJem);
                    print(`${player.character.name} used speed jem boosting max speed`);
                    player.character.speed += player.character.inventory[index].value;
                    player.character.inventory.splice(index, 1);
                }
                else {
                    print(`no speed jem in inventory`);
                }
            case 'h':
                if (player.character.inventory.includes(item.hpJem)) {
                    let index = player.character.inventory.indexOf(item.hpJem);
                    print(`${player.character.name} used hp jem boosting max hp`);
                    player.character.maxHp += player.character.inventory[index].value;
                    player.character.inventory.splice(index, 1);
                }
                else {
                    print(`no hp jem in inventory`);
                }
            case 'x':
                return;
            default:
                print(`invalid option`);
        }
    }
}

function itemDropChance() {
    let chance = Math.round((Math.random() * 100));
    if (chance >= 0 && chance < 50) {
        //no item
    }
    else if (chance >= 50 && chance < 75) {
        //drop potion
        print(`${player.character.name} found ${item.itemArray[0].type}`);
        player.character.inventory.push(item.itemArray[0]);
    }
    else if (chance >= 75 && chance < 80) {
        //drop attack jem
        print(`${player.character.name} found ${item.itemArray[1].type}`);
        player.character.inventory.push(item.itemArray[1]);
    }
    else if (chance >= 80 && chance < 85) {
        //drop speed jem
        print(`${player.character.name} found ${item.itemArray[2].type}`);
        player.character.inventory.push(item.itemArray[2]);
    }
    else if (chance >= 85 && chance < 90) {
        //drop hp jem
        print(`${player.character.name} found ${item.itemArray[3].type}`);
        player.character.inventory.push(item.itemArray[3]);
    }
    else if (chance >= 90 && chance <= 100) {
        //drop tent
        print(`${player.character.name} found ${item.itemArray[4].type}`);
        player.character.inventory.push(item.itemArray[4]);
    }
}

function checkStatus() {
    print(`${player.character.name} stats`);
    print(`Current HP: ${player.character.hp}`);
    print(`Max Hp: ${player.character.maxHp}`);
    print(`Attack: ${player.character.attack}`);
    print(`Speed: ${player.character.speed}`);
    print(`Inventory:`);
    if (player.character.inventory.length == 0) {
        print(`no items in inventory`);
    }
    else {
        for (var i = 0; i < player.character.inventory.length; i++) {
            print(`${i + 1}: ${player.character.inventory[i].type}`);
        }
    }
}