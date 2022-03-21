'use strict';

// Rest Pattern and Parameters

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

// The rest pattern uses the same syntax as the spread operator ...
// The spread operator is used to build new arrays or pass multiple values into a function
// The rest pattern however, to collect multiple elements and condense them into an array - the opposite of the spread operator

// ******************** USING THE REST OPERATOR FOR DESTRUCTURING

// Recap of spread - spread is used on the right side of the assignment operator
const arr = [1, 2, ...[3, 4]];

// Rest syntax - is used on the left side of the assignment operator
// The rest operator will take the remaining elements and compresses it into a new array called others
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2, Array(3)[(3, 4, 5)];

// Example: Create an array of variables, storing pizza and risotto from the restaurant object, and the rest of the food to be stored in otherFood
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// the rest of the menu is stored into otherFood
console.log(pizza, risotto, otherFood); // Pizza, Risotto, Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// *** the rest operator should be used last in the array
// *** there can only be one rest operator in a destructuring element

// *** the rest operator also works on Objects
// Example: create an object with only the weekdays from the restaurant object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // Object { open: 0, close: 24 }; Object { thu: {…}, fri: {…} }

// ******************** USING THE REST OPERATOR FOR FUNCTIONS
// Rest parameters; using the rest syntax in functions
// Example 1: Passing multiple arguments a function
const add = function (...numbers) {
  let sum = 0;
  // Since the rest operator will return an array, we can loop through the array to find the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3); // 5
add(1, 2, 3, 4, 5); // 15
add(5, 6, 7, 8, 6, 3, 2); // 37

// Example 2: Calling a function from the variable below
const x = [67, 1, 1];
add(...x); // 69

// Using the rest parameter with the restaurant object
restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach'); // Mushrooms, Array(3) [ "Onion", "Olives", "Spinach" ]
// The remaining ingredients are stored in an array called otherIngredients

// We can also define one argument, we will get an empty array since only one argument was defined
restaurant.orderPizza('mushrooms'); // mushrooms; Array []

// RECAP:
// Spread syntax - expands an array
// Rest syntax - compresses into array
