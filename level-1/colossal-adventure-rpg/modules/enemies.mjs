class Enemy {
    constructor(type, hp, speed, attack) {
        this.type = type;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.isAlive = true;
    }
}

const slime = new Enemy("slime", 10, 4, 2);
const orc = new Enemy("orc", 20, 2, 5);
const goblin = new Enemy("goblin", 10, 15, 5);
const bat = new Enemy("bat", 8, 15, 5);
const wolf = new Enemy("wolf", 16, 12, 10);

export const enemyArray = [slime, bat, goblin, wolf, orc];