//write a function that takes an array of numbers and returns largest without using math.max()
// let nums = [];

// for (var i = 0; i < 5; i++) {
//     let random = Math.floor(((Math.random() * 100)/Math.random()));;
//     nums.push(random);
// }

// function returnLargest(nums) {
//     let x = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (x < nums[i]) {
//             x = nums[i];
//         }
//     }
//     return x;
// }

//console.log(`Values: ${nums}\nLargest: ${returnLargest(nums)}`);

//write a function that takes array of words and a char and returns each word with that char
// function lettersWithStrings(arr) {
//     let char = arr[arr.length - 1];
//     let newArr = [];
//     arr.pop();
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].includes(char)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(`${lettersWithStrings(["hello", "world", "older", "h"])}`);
//write a function that takes a num1 and num2 and returns whether num1 is divisible by num2
function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isDivisible(16, 4));