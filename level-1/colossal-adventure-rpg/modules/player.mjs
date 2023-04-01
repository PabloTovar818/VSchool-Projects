class Player {
    constructor(name, hp, speed, attack) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.speed = speed;
        this.minAttack = attack - 3;
        this.maxAttack = attack + 3;
        this.isAlive = true;
        this.inventory = [];
    }
}

export let character = new Player("", 20, 5, 5);