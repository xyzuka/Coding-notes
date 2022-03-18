"use strict";

// Logical Assignment Operators (||=)

const Rest1 = {
	name: "Capri",
	numGuests: 20
};

const Rest2 = {
	name: "La Pieeza",
	owner: "Brantini Martini"
};

// Setting default number of guests for objects that do not have the property
// USING THE OR ASSIGNMENT OPERATOR
// Rest1.numGuests = Rest1.numGuests || 10;
// Rest2.numGuests = Rest2.numGuests || 10; // Rest2.numGuests is undefined/false, so 10 will be assigned

// USING THE LOGICAL ASSIGNMENT OPERATOR
Rest1.numGuests ||= 10;
Rest2.numGuests ||= 10; // Rest2.numGuests is undefined/false, so 10 will be assigned

console.log(Rest1);
console.log(Rest2); // Since Rest2 did not have numGuests, it will take the default value;

const Rest3 = {
	name: "Logi",
	numGuests: 0
};

// Rest3.numGuests = 10; // because numGuests is 0, it will be considered falsy will need to use ??=
// console.log(Rest3)

Rest3.numGuests ??= 10;
console.log(Rest3);

// PRACTICAL EXAMPLE OF Nullish Operators (&&) - null or undefined
// Replace the Rest2 object's owners property as 'UNKNOWN'
// Rest2.owner = Rest2.owner && 'UNKNOWN';
// console.log(Rest2); // Since && returns the first falsy value, UNKNOWN is returned as the owner

// Rest1.owner = Rest1.owner && 'UNKNOWN';
// console.log(Rest1); // Since Rest1.owner does not exist (falsy), the && operator will short circuit at undefined

// Writing the above example with Logical AND operator &&= (Returns first falsy value)

Rest1.owner &&= "UNKNOWN";
Rest2.owner &&= "UNKNOWN";

console.log(Rest1); // Since Rest1.owner does not exist (falsy), the && operator will short circuit at undefined
console.log(Rest2); // Since && returns the first falsy value, UNKNOWN is returned as the owner
