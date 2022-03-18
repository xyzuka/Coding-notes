// Array Destructing
	// Breaking arrays into variables 
'use strict';

// ** Destructuring arrays
const arr = [2, 3, 4];
// declaring three variables
const [a, b, c] = arr;
console.log(a, b, c); // 2 3 4

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	
	// adding method to order food
	order: function(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	}
};

// Destructing array from restaraunt
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // "Italian" "Pizzeria"

// Skipping elements 
const [one, , three] = restaurant.categories;
console.log(one, three); // "Italian" "Vegetarian"

// Switching variables 
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // "Pizzeria" "Italian"

// Switching with structuring - reassigning without reassigning temporary variables
[main, secondary] = [secondary, main]
console.log(main, secondary); // "Pizzeria" "Italian"

// Ordering with the array method based off index position
// Creating two variables from a array method call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //"Garlic Bread","Pizza"

// Nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2, [5,6]
// destructuring nested array
const [z, , [zz, zzz]] = nested;
console.log(z, zz, zzz); // 2, 5, 6

// Destructuring undefined elements - Default vlaues
const [p, q, r] = [8, 6];
console.log(p, q, r); // 8, 6, undefined
// Assigning a default value
const [qq, qqq, rq = 'default'] = [8, 6];
console.log(qq, qqq, rq); // 8, 6, 'default'; the undefined gets the assigned default value
