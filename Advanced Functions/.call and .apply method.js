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
