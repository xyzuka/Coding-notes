'use strict';

// CLOSURES - EXAMPLES

//* EXAMPLE 1 - Reassigning a variable
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// Reassigning f function to
const h = function () {
  const b = 111;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 11
console.dir(f); // a = 23;

// Reassigning f
h();
f(); // 222
console.dir(f); // b = 111;

// The function f will not lose connection to the variables in the place it was created (or in this case, reassigned)

/************************/

//* EXAMPLE 2 - Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// closures also have priority over the global chain, hence 1000 being ignored
const perGroup = 1000;
boardPassengers(180, 3);

// setTimeout was able to get access to n and wait due to closures
