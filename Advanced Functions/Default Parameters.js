'use strict';

// DEFAULT PARAMETERS

const bookings = [];

// Setting up default parameters
//** You can also use other previously declared parameters to calculate eg. price
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //** Traditional method of setting default parameters (ES5)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // Object { flightNum: "LH123", numPassengers: 1, price: 199 }

// Overriding defaults can be done by hard-coding parameters
createBooking('LH123', 100, 199); // { flightNum: "LH123", numPassengers: 100, price: 199 }

// Using another variable to calculate price
createBooking('LH123', 88); // Object { flightNum: "LH123", numPassengers: 88, price: 17512 }

//**  To skip parameters, just set as undefined
createBooking('LH123', undefined, 1000); // Object { flightNum: "LH123", numPassengers: 1, price: 1000 }
