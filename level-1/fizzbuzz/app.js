//program prints number 1 to 100 on new line
//for each multiple of 3, print "Fizz" instead of number
//for each multiple of 5, print "Buzz" instead of number
//for numbers that are multiples of 3 and 5 print "FizzBuzz" instead of number

//1. create number array with values 1 - 100
let numArr = [];
for (var i = 0; i < 100; i++) {
    numArr[i] = i + 1;
}

//1a. create fizz, buzz, fizzbuzz count variables
let fizzCount = 0, buzzCount = 0, fizzbuzzCount = 0;

//2. create check multiples function
function checkMultiples(nums) {
    for (var i = 0; i < 100; i++) {
        var fizz = nums[i] % 3;
        var buzz = nums[i] % 5;
        if(fizz == 0 && buzz != 0) {
            console.log("fizz");
            fizzCount++;
        }
        else if(buzz == 0 && fizz != 0) {
            console.log("buzz");
            buzzCount++;
        }
        else if (fizz == 0 && buzz == 0) {
            console.log("fizzbuzz");
            fizzbuzzCount++;
        }
        else {
            console.log(nums[i]);
        }
    }
}

function displayCounts(fizz, buzz, fizzbuzz) {
    console.log(`fizz: ${fizz} \nbuzz: ${buzz} \nfizzbuzz: ${fizzbuzz}`);
}

checkMultiples(numArr);
displayCounts(fizzCount, buzzCount, fizzbuzzCount);