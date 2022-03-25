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
