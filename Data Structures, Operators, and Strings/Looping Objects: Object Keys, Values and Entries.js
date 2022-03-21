'use strict';

// Looping Objects: Object Keys, Values and Entries

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

// Object Keys - returns an array whose elements are strings corresponding to the enumerable properties
// Assigning the opening hours to a variable with Object.keys 
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openString = `We are open on ${properties.length} days:`;

// Using a for of loop to add to the openString
for (const day of properties) {
	openString += ` ${day},`;
}

console.log(openString) //"We are open on 3 days: thu, fri, sat,"

// Property values - shows the values inside a property
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object - shows both the properties and its values
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// Looping through the entries to use a template literal on both on the destructured objects and properties
for(const [day, {open, close}] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`)
}
