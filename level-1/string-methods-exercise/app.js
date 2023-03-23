function capAndLow(string) {
    var string1 = string.toUpperCase();
    var string2 = string.toLowerCase();
    return string1.concat(string2);
}

function findMiddleIndex(string) {
    var index = Math.floor(string.length/2);
    return index;
}

function findFirstHalf(string) {
    var index = findMiddleIndex(string);
    return string.slice(0, index);
}

function capFirstHalfLowerSecondHalf(string) {
    var index = findMiddleIndex(string);
    var firstHalf = findFirstHalf(string);
    var secondHalf = string.slice(index);
    return firstHalf.toUpperCase().concat(secondHalf.toLowerCase());
}

console.log(capAndLow("helLO"));
console.log(findMiddleIndex("Hello World"));
console.log(findFirstHalf("Hello World"));
console.log(capFirstHalfLowerSecondHalf("HelLO woRld"));