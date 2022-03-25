'use strict';

// LOOPING ARRAYS: FOR EACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//* Eg. Loop through the values in the array and print whether the user deposited or withdrew from his bank account

// for of loop example
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited: ${movement}`);
  } else {
    console.log(`You withdrew: ${Math.abs(movement)}`);
  }
}
// Note: Math.abs returns the absolute number, without any '-'

// for each method - with conditional ternary operation
console.log('----- FOR EACH -----');
movements.forEach(function (movement) {
  movement > 0
    ? console.log(`You deposited: ${movement}`)
    : console.log(`You withdrew: ${Math.abs(movement)}`);
});

//* ACCESSING THE LOOP INDEX
// for of loop example
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1} - You deposited: ${movement}`);
  } else {
    console.log(`Transaction ${i + 1} - You withdrew: ${Math.abs(movement)}`);
  }
}
// Note: use .entries() to return a new array iterator object

// for each method - .forEach(current element, index, array)
console.log('----- FOR EACH -----');
movements.forEach(function (movement, i, array) {
  movement > 0
    ? console.log(`Transaction ${i + 1} - You deposited: ${movement}`)
    : console.log(`Transaction ${i + 1} - You withdrew: ${Math.abs(movement)}`);
});
// Note: There is no way to stop or break a forEach() loop
