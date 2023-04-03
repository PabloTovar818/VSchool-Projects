export class Enemy {
    constructor(type, hp, speed, minAttack, maxAttack) {
        this.type = type;
        this.hp = hp;
        this.speed = speed;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
    }
}

const slime = new Enemy("slime", 10, 4, 0, 2);
const orc = new Enemy("orc", 20, 2, 5, 8);
const goblin = new Enemy("goblin", 10, 15, 1, 5);
const bat = new Enemy("bat", 8, 8, 2, 4);
const wolf = new Enemy("wolf", 16, 12, 2, 10);

export const enemyArray = [slime, bat, goblin, wolf, orc];