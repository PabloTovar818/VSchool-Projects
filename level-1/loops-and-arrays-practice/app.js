//1. loop through following array and count how many 'computers' there are. Log final count
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var compCount = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] == "computer") {
        compCount++;
    }
}

console.log(compCount);

//2. loop through following array and log to console "old enough" if person is 18 or older
//log "not old enough" if they are not 18
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    }
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    }
}

//optional
//imagine you have a button that toggles a light on and off. Loop through the following arrays
//of numbers and toggle the button the number of times for each number. 
//The array [2, 3, 2] would toggle 7 times.
//the light is on to start with, log to the console if the light is on or off at the end

var arr = [2,4,3];
// var lightState = true;

// //long version where a toggleLight function runs for every single integer in the array
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i]; j++) {
//         toggleLight();
//     }
// }

// function toggleLight() {
//     if (lightState) {
//         lightState = false;
//     }
//     else {
//         lightState = true;
//     }
// }

// if (lightState) {
//     console.log("The light is on");
// }
// else {
//     console.log("The light is off");
// }

//efficient version where lightState can be determined if the total value of the array
//is either odd or even
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
if (sum % 2 == 0) {
    console.log("The light is on")
}
else {
    console.log("The light is off")
}