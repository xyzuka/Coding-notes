'use strict';

// Maps - Iteration

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

// Maps Iteration
// Creating a map can be done similar to an object
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);

// We can convert objects to maps
// Eg.
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Practical Example 1:

// Printing out the quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// Getting question from user
const answer = Number(prompt('Answer?'));
console.log(answer);

// Logic to determine if correct or incorrect with boolean
console.log(question.get(question.get('correct') === answer));
// Because 'correct' === answer it will be question.get(true), returning 'Correct'

// Converting maps back to an array
// Build a new array and unpack the map with ...
const mapArray = [...question];
