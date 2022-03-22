'use strict';

// HOW PASSING ARGUMENTS WORK: VALUE VS. REFERENCE

const flight = 'LH234';
const brandon = {
  name: 'Brandon Yee',
  passport: '2344135',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  passenger.passport === '2344135'
    ? alert('Check in')
    : alert('Wrong passport!');
};

//** PASSING A VALUE: flight is a passed in primitive value from the variable above, ignoring the flightNum re-declaration inside the function

//** brandon was changed since the reference to the object was passed and then updated inside the function
checkIn(flight, brandon);
console.log(flight);
console.log(brandon);

// Example 2 - Changing a property inside a referenced object
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1);
};

newPassport(brandon);
console.log(brandon);
checkIn(flight, brandon); // The function above will re-declare the passport number of brandon
