'use strict';

// FUNCTIONS RETURNING FUNCTIONS (CLOSURES)
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

// greeterHey is the returned function inside greet
// This is due to Closures

greeterHey('Jonas'); // Hey Jonas
greeterHey('Brandon'); // Hey Brandon

// we can also call the greet function with two arguments in separate brackets
greet('Howdy')('Brandon'); // Howdy Brandon

// This method of writing functions is useful for Functional Programming

// RETURNING FUNCTIONS WITH ARROW FUNCTIONS
// More difficult to read
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Amy'); // Hi Amy
