// CONVERTING AND CHECKING NUMBERS

// Numbers in JS are represented internally in a 64-bit Base 2 format (0 1 binary)
// This leads to the famous 0.1 + 0.2 error in JS

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// CONVERTING STRINGS TO NUMBERS
console.log(Number('23')); // 23
console.log(+'23'); // 23

// PARSING A NUMBER
// Only works if a string starts with a number
console.log(Number.parseInt('300px', 10)); // 300
console.log(Number.parseInt('es6', 10)); // NaN

// PARSING A DECIMAL
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// CHECKING IF NAN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false - even tho it result to infinity -> better to use Number.isFinite

// CHECKING IF A NUMBER
//* Considered best way of checking if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false
