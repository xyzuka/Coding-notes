'use strict';

//** SPLITTING STRINGS

// Eg. Splitting a string based off the divider sign +
console.log('a+very+nice+string'.split('+')); // Array(4) [ "a", "very", "nice", "string" ]
// Using .split() will store the new elements into an array

// Eg2. Splitting a string based off spacing into an array
console.log('Brandon Yee'.split(' ')); // Array(2) [ "Brandon", "Yee" ]

// You can then store split elements into variables
const [firstName, lastName] = 'Brandon Yee'.split(' ');
console.log(firstName); // Brandon
console.log(lastName); // Yee

// Eg3. Make the last name upper case, and add a Mr. in the front
console.log(`Mr. ${firstName} ${lastName.toUpperCase()}`);
// Method 2 - using the .join() method
// .join() combines all items in an iterable and joins them into a string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Brandon YEE

// Eg4. Write a function to capitalize multiple names
const capitalizeName = function (name) {
  // convert to lower case into an array
  const names = name.split(' ');

  // Place the new names into an array to loop through
  const namesUpper = [];

  // use for of loop to loop through array, pushing each new name into namesUpper and joining them with .join()
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('brandon soon king yee'); // Brandon Soon King Yee

//** PADDING A STRING

const message = 'Go to gate 23!';
// .padStart() - adds a specified character until it reaches the mentioned length
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23! (length should be 25)
console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++

// Practical example of Padding
// Eg. Hiding credit card numbers
const maskCreditCard = function (number) {
  // converting to number to string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(432157633901)); // ********3901
console.log(maskCreditCard(27347733139128903)); // *************8904

//** .repeat() method
// Allows us to repeat the same string multiple times
const message2 = 'Bad weather... All departures are delayed! ';
console.log(message2.repeat(5));
// Repeats the string 5 times

// Eg. creating a function with the repeat string method
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5); // There are 5 planes in line ✈️✈️✈️✈️✈️
planesInLine(2); // There are 2 planes in line ✈️✈️
