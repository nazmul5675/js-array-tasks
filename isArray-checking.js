// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.. 

let arrayList = [1, 3, 2, 4, 5, 7, 8, 9, 0];
let sun = 'hi';
let bandYear = 1980;
let floatPoint = 5.67;
let added;
let isITtrue = false;

// Now use isArray to check if each variable is an array.
console.log(Array.isArray(arrayList));
console.log(Array.isArray(sun));
console.log(Array.isArray(bandYear));
console.log(Array.isArray(floatPoint));
console.log(Array.isArray(added));
console.log(Array.isArray(isITtrue));

if (Array.isArray(arrayList) === true) {
    console.log('variable is an array');
} else if (Array.isArray(sun) === true) {
    console.log('variable is an array');
} else if (Array.isArray(bandYear) === true) {
    console.log('variable is an array');
} else if (Array.isArray(floatPoint) === true) {
    console.log('variable is an array');
} else if (Array.isArray(added) === true) {
    console.log('variable is an array');
} else if (Array.isArray(arrayList) === true) {
    console.log('variable is an array');
} else {
    console.log('variable is not array');
}

// this problem can solve properly by function 