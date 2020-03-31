// Adds 7 to one number 
let num = null;

function add7(num) {
    console.log(num + 7);
}

add7(20);


// Multiplies 2 numbers and returns their sum
let total = null;

function multiply(total) {
    let numOne = 50;
    let numTwo = 3;

    total = (numOne * numTwo);

    console.log(total);
}

multiply(total);


// Takes a string and capitalizes the first letter of the string
let string = ' ';

function capitalize(string) {
    let firstLetter = string.toUpperCase().slice(0,1) + string.slice(1);
    console.log(firstLetter);
}

capitalize('abcd');


// Takes a string and capitalizes the last letter of the string

let str = ' ';

function lastLetter(str) {
    let last = str.slice(0, -1) + str.slice(-1).toUpperCase()

    console.log(last);
}

lastLetter('abcde')

