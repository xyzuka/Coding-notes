'use strict';

// WORKING WITH STRINGS - .slice() method
const airline = 'Fiji Airways';
const plane = 'A320';

// FINDING LETTER BASED OFF POSITION
console.log(plane[0]); // A
console.log('Test'[1]); // e

// index of shows the first occurrence, and last shows the last
console.log(airline.indexOf('i')); // 1
console.log(airline.lastIndexOf('i')); // 6
// indexOf also works with words (case sensitive)
console.log(airline.indexOf('Airways')); // 5

// FINDING LENGTH OF STRING
console.log(airline.length); // 12

// EXTRACTING STRINGS with the .slice() method
// First argument is the start position, second is end position
console.log(airline.slice(5)); // Airways
console.log(airline.slice(5, 8)); // Air

// EXTRACTING STRINGS WITHOUT KNOWING ITS INDEX
// Useful for not hard-coding values
// Eg. Extracting the first string with .indexOf()
console.log(airline.slice(0, airline.indexOf(' '))); // Fiji
// Eg2. Extracting the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Airways (+1 is to avoid the space)

// Example: Write a function that receives an airplane seat, and logs to the console whether it is a middle seat or not
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('Middle seat')
    : console.log('Other seat');
};
checkMiddleSeat('11B'); // Middle seat
checkMiddleSeat('23A'); // Other seat
checkMiddleSeat('68E'); // Middle seat
