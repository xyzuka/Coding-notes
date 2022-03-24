'use strict';

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// Used when we only need a function running once

// To turn a function into a single use function, wrap the function in () so JS identifies the function into a variable - and then adding () at the end to run the function
(function () {
  console.log('This will only run once!');
  const isPrivate = 'very private info';
})();

// Also works for arrow functions
(() => console.log('This will ALSO never run'))();

// WHY USE IIFE?

// Because of the scope chain, all data defined in the inside scope is private or 'encapsulated' eg. isPrivate cant be accessed outside

// Note: Variables declared inside a block are private and cannot be accessed outside
{
  const isPrivate = 'very private';
  var notPrivate = 'private stuff in here';
}
// console.log(isPrivate); // undefined
console.log(notPrivate); // private stuff in here (var ignores scope)
