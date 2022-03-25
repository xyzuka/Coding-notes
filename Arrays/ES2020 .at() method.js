'use strict';

// ES2020 AT METHOD

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

//* Use example - when finding the last element of an array
// Traditional methods
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
// Using .at() gives a shorter syntax
console.log(arr.at(-1)); // 64

// If you want to get the last element of an array - use the .at() method, also works with method chaining

//* The .at() method also works on strings
console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s
