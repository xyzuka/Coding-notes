'use strict';

// WORKING WITH STRINGS

const airline = 'Fiji Airways';

//** converting string case
console.log(airline.toLowerCase()); // fiji airways
console.log(airline.toUpperCase()); // FIJI AIRWAYS
console.log('string'.toUpperCase()); // STRING

// Eg1. Fixing capitalization in name
const passenger = 'jOnAs';
// Convert everything to lower case
const passengerLower = passenger.toLowerCase();
// Take first letter and capitalize, add the other lower case letters starting from position 1
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Eg2. Create a function that takes any passenger name and capitalizes only the first letter
const capitalizer = function (name) {
  const lowerName = name.toLowerCase();
  const nameCorrect = lowerName[0].toUpperCase() + lowerName.slice(1);
  console.log(nameCorrect);
};
capitalizer('JAcoB'); // Jacob

// Eg3. Comparing emails capitalization
const email = 'hello@gmail.com';
const loginEmail = 'Hello@Gmail.Com \n';

const lowerEmail = loginEmail.toLowerCase();
// Removing \n with .trim()
const trimmedEmail = lowerEmail.trim();

// Doing all the steps in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // "hello@gmail.com"

//** REPLACING PARTS OF STRINGS
// Replacing single items
const priceFJD = '$100.50';
const priceEUR = priceFJD.replace('$', '£');
console.log(priceEUR); // £100.50

// Replacing words
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// Replace door with gate
const newAnnouncement = announcement.replaceAll('door', 'gate');
console.log(newAnnouncement); // All passengers come to boarding gate 23. Boarding gate 23!

//** REGULAR EXPRESSIONS - Simple example
// Adding /g stands for global
const secondAnnouncement = announcement.replace(/door/g, 'gate');
console.log(secondAnnouncement); // All passengers come to boarding gate 23. Boarding gate 23!

//** BOOLEANS

const plane = 'Airbus 320new';
console.log(plane.includes('new')); // true
console.log(plane.includes('boeing')); // false

console.log(plane.startsWith('A3')); // true
console.log(plane.startsWith('A3B')); // false

// Eg. Check if the plane is apart of the new Airbus family
plane.includes('Airbus') && plane.includes('new')
  ? console.log('It is apart of the Airbus family!')
  : console.log('It is not apart of the Airbus family');

// PRACTICE EXERCISE
// Check if passengers bags are allowed on the plane

const checkBaggage = function (items) {
  // Always convert user input to lowercase to make comparison easier
  const baggage = items.toLowerCase();
  console.log(`You declared the following items: ${baggage}`);
  baggage.includes('knife') || baggage.includes('gun')
    ? console.log(
        'You are carrying dangerous items onto the plane, you are not allowed onboard'
      )
    : console.log('You may board the plane');
};

checkBaggage('I have some food, a laptop, and a knife');
checkBaggage('I have a Laptop, camera, and some Clothes');
checkBaggage('I got a gun for self defence, and some other clothes');
