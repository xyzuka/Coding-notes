'use strict';

// CLOSURES

// Closures are not explicitly used - it simply happens automatically

// Example of a Closure

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

/* EXECUTION CONTEXT (EC): CALL STACK OF FUNCTIONS BEING RUN
  1. GLOBAL EC: 
    secureBooking = <f>
    booker = <f>

  2. secureBooking() EC: passengerCount = 0

  3. Since a function is returned after, it will be stored in the booker variable in the GLOBAL EC, once the function is returned - its secureBooking EC pops off the call stack and disappears

  4. The call stack will look like this now
  GLOBAL EC:
    secureBooking = <f>
    booker = <f>
*/

// Calling the booker function to see how closures work
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// Closures makes a function remember all the variables that existed in the function's place of creation
// A function will always have access to variable environment of the execution context in which it was created, even after that execution context is gone
//* CLOSURE: The variable environment attached to function, exactly as it was at the time and place the function was created
// Closures have priority OVER the scope chain

//* CLOSURES SUMMARY: BROKEN DOWN
/*
  - A closure is a closed-over 'variable environment' of the execution context 'in which a function was created', even AFTER the execution context is gone
  - A closure gives a function access to all the variables 'of its parent function', even AFTER the parent function has returned. The function keeps a 'reference' to its outer scop, which 'preserves' the scope chain throughout time
  - A closure makes sure that a function does not lose connection to variables that existed at the function's place of creation
  - A closure is like a 'backpack' that a function carries around where ever it goes. This backpack has all the variables that were present in the environment where the function was created
** Note: We do NOT manually create closures, it is created automatically in JavaScript
** Note2: We can not access closed-over variables explicitly. A closure is NOT a tangible JavaScript object
*/

//* Accessing closed off variables with console.dir
console.dir(booker);
