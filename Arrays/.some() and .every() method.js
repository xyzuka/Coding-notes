// THE SOME AND EVERY METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Recap of .includes() method
// .includes() will only test for equality and will return a boolean
console.log(movements.includes(-130)); // true
console.log(movements.includes(typeof "string")); // false

////////////////////////////////////
////////////////////////////////////
// SOME METHOD
// The some method will test based off a condition instead

// Eg. checking if there are any movements above 0 (deposits)
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits); // true

// Eg2. checking if there are any deposits above 5000
const deposits5000 = movements.some((mov) => mov > 5000);
console.log(deposits5000); // false

////////////////////////////////////
////////////////////////////////////
// EVERY METHOD
// Only returns true if every element in an array satisfies the condition

const deposits = [200, 450, 400, 3000, 650, 130, 70, 1300];

const findWithdraws = deposits.every((mov) => mov < 0);
console.log(findWithdraws); // false

const depositCheck = deposits.every((mov) => mov > 0);
console.log(depositCheck); // true

// SEPARATE CALL BACK
// We can also write a function separately as a variable and pass it as a call back
const depositChecker = (mov) => mov > 0;
console.log(deposits.every(depositChecker)); // true
