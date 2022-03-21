'use strict';

// Enhanced Object Literals

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// Creating a new object from openingHours inside restaurant
const openingHours = {
		// 3. Object literal method -> referencing an array outside
		[weekdays[3]]: {
			open: 12,
			close: 22
		},
		[weekdays[4]]: {
			open: 11,
			close: 23
		},
	// You can also compute property names!
		[`day-${4+1}`]: {
			open: 0, // Open 24 hours
			close: 24
		},
};

// Restoring the openingHours with enhanced object literals
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// 1st object literal method -> Just add , infront to restore
	openingHours,
	
	// ES6 functions inside objects -> Just remove the :, and function for easier syntax
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery(starterIndex, mainIndex, time, address) {
		console.log(
			`Order complete! You ordered ${this.starterMenu[starterIndex]} as a starter, and ${this.mainMenu[mainIndex]} as a main. You will receive your order at ${time} to ${address} `
		); // "Order complete! You ordered Garlic Bread as a starter, and Risotto as a main. You will receive your order at 10:30 to Mashman Avenue "
	}
};

console.log(restaurant);
