'use strict';

// FUNCTIONS ACCEPTING CALL-BACK FUNCTIONS (HIGHER-ORDER FUNCTIONS)

// Example: Functions that perform string transformations
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best language!', upperFirstWord);
// Original string: JavaScript is the best language!
// Transformed string: JAVASCRIPT is the best language!
// Transformed by: upperFirstWord

transformer('JavaScript is the best language!', oneWord);
// Original string: JavaScript is the best language!
// javascriptisthebestlanguage!
// Transformed by: oneWord

// Example2: Another form of higher-order functions is addEventListener -> these are called call backs
// This is used to reuse functions to avoid duplicate code
// It also allows us to create a specific use for a single function rather than having a large function with multiple items 
const hi5 = function () {
  console.log('Hi-5!!');
};

document.body.addEventListener('click', hi5);
// hi5 is being passed into addEventListener

// Example3: Functions can also be passed into array methods
['Jonas', 'Brandon', 'Amy'].forEach(hi5);
