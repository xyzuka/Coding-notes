"use strict";

// Spread Operator
// The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments

const arr = [7, 8, 9];
// How do we add new numbers to the array in the front ??

// Could manually hardcode
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1,2,7,8,9]

// ES6 method using the spread operator (...)
const newArr = [1, 2, ...arr];
console.log(newArr); // [1,2,7,8,9]
// The spread operator "unpacks" the array items, if the ... was not included in newArr, we would have a nested array inside

// Spread is used for passing multiple items in an array
console.log(...newArr); // 1 2 7 8 9

// Practical examples for the spread operator
// Creating a new array in reference to a array inside a object

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

	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
		);
	}
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // ["Pizza","Pasta","Risotto","Gnocci"]

// Spread operators are mainly used to:
// 1. Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ["Pizza","Pasta","Risotto"]

// 2. Merging two arrays together
// Combing the main menu and starter menu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ["Focaccia","Bruschetta","Garlic Bread","Caprese Salad","Pizza","Pasta","Risotto"]

// Spread operator takes ALL elements in an array and does not make new variables - it works on Iterables: arrays, strings, maps (except objects)

// Spread on strings
const str = "Jonas";
const letter = [...str, "", "!."];
console.log(letter); // ["J","o","n","a","s","","!."]

// PRACTICAL EXAMPLE #1
// Building a function that accepts multiple arguements and use the spread operator to pass the arguments

// Added a method into the object -> orderPasta
// Adding individual ingredients
const ingredients = ["Pasta", "Cheese", "Truffle"];
restaurant.orderPasta(...ingredients); // "Here is your delicious pasta with Pasta, Cheese, and Truffle"

// PRACTICAL EXAMPLE #2
// Creating a new restaurant object with all the data from the original object and additional data
const newRestaurant = { ...restaurant, founder: "Brandon, foundedIn: 2022," };
console.log(newRestaurant);

// Copying an object and renaming a property
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Renamed Restaurante";
console.log(restaurantCopy.name); // "Renamed Restaurante"
console.log(restaurant.name); // "Classico Italiano"
