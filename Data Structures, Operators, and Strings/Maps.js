'use strict';

// Maps

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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// Maps Introduction
// Maps are data structures which we can use to map values to keys
// Difference between Maps and Sets; the keys can have any type of data. Sets only take strings, whereas maps can take in objects and arrays

// Creating a restaurant map
const rest = new Map();

// To fill up the map, use the .set method
rest.set('name', 'Classico Italiano');
// .set method also returns the updated map
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // Map(3) { name → "Classico Italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal" }

// You can chain the .set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// Reading data from a map with the .get method
console.log(rest.get('open')); // 11
console.log(rest.get(true)); // We are open

// Example: Using map booleans for logic
// Unreadable practice, use sparingly
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open (Because the logic is true)

// Checking if a map contains a certain key, use .has method
console.log(rest.has('categories')); // true
console.log(rest.has('pizza')); // false

// Deleting elements from map, use .delete method
rest.delete('name');
console.log(rest);

// Checking size of property, use .size method
console.log(rest.size); // 7

// Clear all items from map, use .clear() method
// rest.clear();
// console.log(rest); // Map(0);

// *** You can use arrays or objects as map keys
// Due to the HEAP engine, you need to assign the array before using it
const arr = [1, 2];
rest.set(arr, 'testArrayKey');
console.log(rest); // Array [ 1, 2 ] → "testArrayKey"

// To get the data based on that array
console.log(rest.get(arr)); // testArrayKey

// DOM elements can be used as key objects
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); //  <h1> → "Heading"
