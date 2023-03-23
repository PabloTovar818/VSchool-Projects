var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function print() {
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
}

function arrayMethods() {
    vegetables.pop();
    print();
    fruit.shift();
    print();
    var index = fruit.indexOf("orange");
    fruit.push(index);
    print();
    var length = vegetables.length;
    vegetables.push(length);
    print();
    var food = fruit.concat(vegetables);
    console.log("food: ", food);
    food.splice(4, 2);
    console.log("food: ", food);
    food.reverse();
    console.log("food: ", food);
    food.join("");
    console.log("food: " + food);
}

arrayMethods();