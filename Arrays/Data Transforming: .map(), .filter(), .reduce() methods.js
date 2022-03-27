// DATA TRANSFORMATIONS WITH MAP, FILTER, AND REDUCE

///////////////////////////////////////////////////
// MAPS
// 1. Map creates a brand new array based on the original array and a call back function - similar to forEach() but map builds us a brand new array containing the results of applying na operation on all original array elements

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// The elements in movements is in EUR, convert them to USD
const movementsUsd = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

// Converting to USD using a for of loop
const movementsUsdArray = [];
for (const mov of movements) {
  movementsUsdArray.push(mov * eurToUsd);
}
console.log(movementsUsdArray);

// Using .map to gain access to the index and current array
const movementsDes = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDes);

///////////////////////////////////////////////////
// FILTER
// 2. Filter is used to filter for elements in an array which satisfy a certain condition - returns a new array containing the array elements that passed a specific test condition
// This condition is defined by using a call back function

// Eg 1: Filter the deposits from the movements array
const deposits = movements.filter(function (mov) {
  return mov > 0; // only true values are returned
});
console.log(deposits); // [200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals); // [-400, -650, -130]

// Filtering with a for of loop (Pushing into an empty array)
// Note: You cannot chain methods with for of loops
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); // [200, 450, 3000, 70, 1300]

///////////////////////////////////////////////////
// REDUCE
// 3. Reduce is used to reduce all array elements down to one single value, it uses an accumulator and the current value to reduce the array into a single element eg. adding all elements together
// first parameter - accumulator
// second parameter - current number
// third parameter - current index
// fourth parameter - the current array
// ** At the end of the function, you need to define the start of the accumulator ie. 0 below

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return (acc += cur);
}, 0);
console.log(balance); // 3840

// Example as an arrow function
const balance2 = movements.reduce((acc, cur) => (acc += cur), 0);
console.log(balance2); // 3840

// Example above as a for of loop
let balance3 = 0;
for (const mov of movements) balance3 += mov;
console.log(balance2); // 3840

// FINDING MAXIMUM VALUE with reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000

/////////////////////////////////////////////////
// CHAINING ARRAY METHODS

// We can also chain methods all at once
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Example: The movements in the array above are in EUR, convert the deposits only to USD using an exchange rate of 1.1;

const eurToUSD = 1.1;

const totalDepositsUSD = movements
  .filter((mov) => mov > 0) // returning deposits
  .map((mov) => mov * eurToUSD) // returning a new array of converted EUR to USD
  .reduce((acc, mov) => acc + mov, 0); // summing all the deposits

console.log(totalDepositsUSD); // 5522.000000000001

// Note: If you are debugging chained methods, we can console log the array
const totalDepositsUSDError = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr); // [-400, -650, -130] -> we can see the array are the withdrawals, therefore the result of the bug is the previous method logic used
    return mov * eurToUSD;
  }) // console logging the array at this specific point of the function
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSDError); // -1298.0000000000002

