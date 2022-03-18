"use strict";

// Objects Destructuring

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24
		}
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	// you can pass in object properties into a function argument
	orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order complete! You ordered ${this.starterMenu[starterIndex]} as a starter, and ${this.mainMenu[mainIndex]} as a main. You will receive your order at ${time} to ${address} `
		); // "Order complete! You ordered Garlic Bread as a starter, and Risotto as a main. You will receive your order at 10:30 to Mashman Avenue "
	}
};

// You can pass an object to a function as an argument
restaurant.orderDelivery({
	time: "10:30",
	address: "Mashman Avenue",
	starterIndex: 2,
	mainIndex: 2
});

// Extracting variables from an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // displays the respective properties in the restaurant object

// Having different variable names from property names - Specifying new name
const {
	name: restaurantName,
	openingHours: hours,
	categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Giving default values for objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [], ["Focaccia","Bruschetta","Garlic Bread","Caprese Salad"]

// Mutuating variables while destructuring objects
let a = 1;
let b = 9;
const obj = { a: 23, b: 18, c: 14 };
({ a, b } = obj); // wrap the redeclaration in ()
console.log(a, b); // 23, 18

// Nested objects, retrieving properties from an object
// const {fri} = openingHours;
// console.log(fri); // {open: 11, close: 23};
// In order to get the numbers only
const {
	fri: { open, close }
} = openingHours;
console.log(open, close); // 11, 23
