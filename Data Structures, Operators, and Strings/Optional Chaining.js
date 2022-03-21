'use strict';

// Optional Chaining

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

// Checking if a property exists 
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

// To avoid messy if statements, we can use the optional operation
console.log(restaurant.openingHours.mon?.open) // undefined

// console.log(restaurant.openingHours.mon.open) 
// If we did not use ?, we would get an error instead

// We can chain the operational operator
console.log(restaurant.openingHours?.mon?.open);

// Practical example
// Looping through the days array to see if the restaurant is open on the days
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? 'closed'; // ?? 'closed' -> sets the default value if it returns undefined
	console.log(`On ${day}, we open at ${open}`)
}

// We can also check if a method exists before we call it
console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); //["Focaccia","Pasta"]
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'); //'Method does not exist'

// Opetional chaining works on Arrays
// Eg. checking if an array is empty
const users = [
	{name: 'Jonas',
	email: 'hello@gmai.com'
	}
]

console.log(users[0]?.name ?? 'User array empty'); // "Jonas"
