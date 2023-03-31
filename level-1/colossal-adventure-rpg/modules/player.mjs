class Player {
    constructor(name, hp, speed, attack, defense) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
    }
}

export let character = new Player("", 20, 5, 5, 10);