'use strict';

// Sets

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // you can pass in object properties into a function argument
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order complete! You ordered ${this.starterMenu[starterIndex]} as a starter, and ${this.mainMenu[mainIndex]} as a main. You will receive your order at ${time} to ${address} `
    ); // "Order complete! You ordered Garlic Bread as a starter, and Risotto as a main. You will receive your order at 10:30 to Mashman Avenue "
  },
};

// Creating new set - you will need to pass in an iterable
// Items in sets have to be unique, so repeated elements are listed once
// Sets will group similar values together
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // [ "Pasta", "Pizza", "Risotto" ]

// Strings are also iterables, which can be passed to a set
// console.log(new Set('Jonas')); //[ "J", "o", "n", "a", "s" ]

// To find the set's length, .size is used
console.log(ordersSet.size); // 3

// Checking if a certain element is in a set with .has
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Deez Nuts')); // false

// Add new elements to a set with .add
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // [ "Pasta", "Pizza", "Risotto", "Garlic Bread"]

// Deleting elements with .delete
ordersSet.delete('Pizza');
console.log(ordersSet); // [ "Pasta", "Risotto", "Garlic Bread" ]

// Retrieving values out of sets
// Sets do not have indexes, you cannot get data out of sets
// To retrieve data out of a set, an array is preferred

// Deleting all elements of a set can be used with .clear
// ordersSet.clear();
// console.log(ordersSet); // []

// Sets can be looped with for of
for (const order of ordersSet) console.log(order); // Pasta, Risotto, Garlic Bread

// ** Main use of sets is to REMOVE DUPLICATES from arrays
// Example: Finding all the different positions for staff
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Create a new set to find the unique values
const staffUnique = new Set(staff);
console.log(staffUnique); // [ "Waiter", "Chef", "Manager" ]

// Converting a set to an array
// Spread operator works on all iterates which includes sets
// ** Example: Creating an array from a set to show the unique positions
const staffArray = [...new Set(staff)];
console.log(staffArray); // [ "Waiter", "Chef", "Manager" ]

// To find the unique positions without creating a new array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

// ** You can also use sets to count the amount of letters in a string
// A string is also an iterable so set can be used on strings
console.log(new Set('Mynameisbrandon').size); // 12
