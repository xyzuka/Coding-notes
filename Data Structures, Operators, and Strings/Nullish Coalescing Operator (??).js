"use strict";

// Nullish Coalescing Operator (??)
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
	}
};

restaurant.newGuests = 0;
const guests2 = restaurant.newGuests || 10;
console.log(guests2); // 10, is returned becasue 0 is a falsy value ... to fix this, use ??

// Introduced in ES2020 - the Nullish Coalescing Operator (??)
// Works similarly as the OR operator BUT works with Nullish values
// Nullish values:  null and undefined, NOT 0 or ''
const guestCorrect = restaurant.newGuests ?? 10;
console.log(guestCorrect); // 0
