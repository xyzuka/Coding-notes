// THE SOME AND EVERY METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Recap of .includes() method
// .includes() will only test for equality and will return a boolean
console.log(movements.includes(-130)); // true
console.log(movements.includes(typeof "string")); // false

// SOME METHOD
// The some method will test based off a condition instead

// Eg. checking if there are any movements above 0 (deposits)
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits); // true

// Eg2. checking if there are any deposits above 5000
const deposits5000 = movements.some((mov) => mov > 5000);
console.log(deposits5000); // false

