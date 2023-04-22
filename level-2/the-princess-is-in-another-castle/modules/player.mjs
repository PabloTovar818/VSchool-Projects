export class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "Big";
        this.hasStar = false;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.hasStar) {
            console.log(`Your star protected you and has faded away!`);
            this.hasStar = false;
        }
        else {
            console.log(`${this.name} got hit!`)
            if (this.status === "Powered Up") {
                this.status = "Big";
            }
            else if (this.status === "Big") {
                this.status = "Small";
            }
            else {
                this.status = "Dead"
            }
        }
    }

    gotPowerUp() {
        console.log(`${this.name} got a power up!`)
        if (this.status === "Powered Up") {
            //do nothing
        }
        else if (this.status === "Big") {
            this.status = "Powered Up";
        }
        else {
            this.status = "Big";
        }
    }

    gotCoin() {
        console.log(`${this.name} got a coin!`)
        this.totalCoins++;
    }

    gotStar() {
        console.log(`${this.name} got a star!`)
        this.hasStar = true;
    }

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`);
        console.log(`\n`)
    }
}