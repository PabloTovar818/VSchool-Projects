class Enemy {
    constructor(type, hp, speed, attack, defense) {
        this.type = type;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
    }
}

const slime = new Enemy("slime", 10, 5, 2, 2);
const orc = new Enemy("orc", 20, 2, 5, 10);
const goblin = new Enemy("goblin", 10, 15, 5, 7);
const bat = new Enemy("bat", 8, 15, 5, 2);
const wolf = new Enemy("wolf", 16, 12, 10, 5);

export const enemyArray = [slime, orc, goblin, bat, wolf];