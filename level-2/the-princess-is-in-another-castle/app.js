import { Player } from "./modules/player.mjs"

let player = new Player("Mario");

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
    if (player.status != "Dead") {
        let roll = getRandomInt(3, 0);
            if (roll === 0) {
                player.gotHit();
            }
            else if (roll === 1) {
                player.gotPowerUp();
            }
            else if (roll === 2) {
                player.gotCoin();
            }
            else if (roll === 3) {
                player.gotStar();
            }
    
            player.print();
    }
    else {
        clearInterval(gameStart)
        console.log(`${player.name} died! High Score: ${player.totalCoins}`);
    }
}

let gameStart = setInterval(play, 1000);