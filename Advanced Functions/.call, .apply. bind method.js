'use strict';

// CALL AND APPLY METHODS

//* Setting this keyword manually with the CALL METHOD
const fijiairways = {
  airline: 'Fiji Airways',
  iataCode: 'FJ',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

fijiairways.book('420', 'Brandon Yee'); // Brandon Yee booked a seat on Fiji Airways flight FJ420
fijiairways.book('120', 'Jacob Lee'); // Jacob Lee booked a seat on Fiji Airways flight FJ120

// Fiji Airways has had a new plane, taking separate bookings
const pacificair = {
  airline: 'Pacific Air',
  iataCode: 'PA',
  bookings: [],
};

// To reuse the book method, we can store it inside a variable
const book = fijiairways.book;

// Does NOT work - will show as undefined
// book('555', 'Amy Newland');

// Using the .call method will help manually set the this keyword
// The .call method, first argument is what we want the this keyword to point to, followed by the other arguments
//* The call method will call the book method first, with the this keyword set to pacificair
book.call(pacificair, '233', 'Amy Newland'); // Amy Newland booked a seat on undefined flight PA233

console.log(fijiairways); // Brandon and Jacob stored in here
console.log(pacificair); // Amy stored in here

book.call(fijiairways, '111', 'Susan Lee'); // Susan Lee booked a seat on Fiji Airways flight FJ111

//* APPLY METHOD
// Does the exact thing as the .call method, except the method does not receive the other arguments after the this argument - instead taking an array
// Not used often in Modern JS
const flightDataSusan = ['222', 'Christine Lai'];
book.apply(pacificair, flightDataSusan); // Christine Lai booked a seat on Pacific Air flight PA222

// Arrays can be used with the call method by using the spread operator
book.call(fijiairways, ...flightDataSusan); // Christine Lai booked a seat on Fiji Airways flight FJ222

/***************************************************/

//* BIND METHOD
// Bind does not immediately call the function -> it returns a new function where the this keyword is bound

// Will not call the book function - where the this keyword will always be set to pacificair
// Useful for when calling a function multiple times
const bookPA = book.bind(pacificair);
bookPA('230', 'Steven Hang'); // Steven Hang booked a seat on Pacific Air flight PA230

// We can set property values by providing it as an argument
const bookPA23 = book.bind(pacificair, '23');
// book(flightNum, name) - since flight num is already provided, we just supply the name
bookPA23('John Kennedy'); // John Kennedy booked a seat on Pacific Air flight PA23 script.js:11:13

/***************************************************/

// Example - WITH EVENT LISTENERS
fijiairways.planes = 300;
fijiairways.buyPlane = function () {
  // For event handler functions, the this keyword always points to the element on which that handler is attached to
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// So we need to manually define the this keyword
document
  .querySelector('.buy')
  .addEventListener('click', fijiairways.buyPlane.bind(fijiairways));

/***************************************************/

// Example - PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// Presetting the rate with partial application
const addVAT = addTax.bind(null, 0.3);
console.log(addVAT(200)); // 260

// Example - Rewrite addVAT as a function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.4);
console.log(addVAT2(100)); // 140
console.log(addVAT2(220)); // 308
