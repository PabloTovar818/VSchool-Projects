//using provided peopleArray, write function that :
//1. returns a list of everyone older than 18 which is:
        //1a. sorted alphabetically by last name, and where
        //1b. each name and age is embedded in a string that looks like an HTML <li> element
/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

function sortedOfAge(arr) {
    const sorted = arr.sort((a, b) => a.age - b.age);
    const toList = sorted.reduce((final, arr) => {
        final.push(`<li>${arr.firstName} ${arr.lastName} is ${arr.age}</li>`)
        return final;
    }, [])
    return toList;
}

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

console.log(sortedOfAge(peopleArray));