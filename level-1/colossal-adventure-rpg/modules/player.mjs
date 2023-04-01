class Player {
    constructor(name, hp, speed, attack) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.speed = speed;
        this.attack = attack;
        this.isAlive = true;
    }
}

export let character = new Player("", 20, 5, 5);