"use strict";

// Short circuit evaluation
// If the first value is a truthy value, it will immediately return the first value
console.log(3 || "Jonas"); // 3
console.log(" " || "Jonas"); // Jonas, " " is falsy
console.log(true || 0); // true
console.log(undefined || null); // null, undefined is a falsy value
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello will show since it is the first truthy value

// Practical example
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

// Given the object restaurant, we can check if the property numGuests exists, if it does, set a default value as 10;
// Checking if newGuests exists
const guests1 = restaurant.newGuests ? restaurant.numGuests : 10; // since numGuests DOES NOT exist, 10 will be on the console log
console.log(guests1);

// Short ciruiting the OR operator
// short circuits the FIRST TRUTHY value
console.log(`------ OR OPERATOR ------`);
restaurant.newGuests = 23;
const guests2 = restaurant.newGuests || 10;
console.log(guests2); // 23 because, newGuests exists

// Short circuiting the AND operator
console.log(`------ AND OPERATOR ------`);
// Works in the opposite way of the OR operator - short circuits the FIRST FALSY value
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // 'Jonas'
console.log("Hello" && 23 && null && "Jonas"); // Null; is a falsy value

// Checking if a method in an object exists
if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach");
} else {
	console.log("Method does not exist");
}
