import * as item from "./items.mjs";

class Player {
    constructor(name, hp, speed) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.speed = speed;
        this.attack = 5;
        this.minAttack = this.attack - 3;
        this.maxAttack = this.attack + 3;
        this.isAlive = true;
        this.inventory = [item.potion];
    }
}

export let character = new Player("", 20, 5);