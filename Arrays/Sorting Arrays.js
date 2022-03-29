// SORTING ARRAYS - .sort METHOD

////////////////////////////////
// SORTING STRINGS
const owners = ["Jonas", "Adam", "Brendan", "Zach"];
console.log(owners.sort()); // ['Adam', 'Brendan', 'Jonas', 'Zach']
console.log(owners); // ['Adam', 'Brendan', 'Jonas', 'Zach']

//* Note: .sort will MUTATE the original array

////////////////////////////////
// SORTING NUMBERS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]
console.log(movements); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

//* Note 2: .sort will only work on strings, negative will be first, followed by the following 'string'

//* We need to pass a comparing argument as a callback function into the sort method

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////
// ASCENDING SORTING
// argument logic - .sort will sort the numbers based on the returned numbers
// return < 0, a first then b
// return > 0, b first then a

movements2.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements2); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

//* Inverse the returned numbers for DESCENDING ORDER

////////////////////////////////
// SORTING NUMBERS - METHOD 2

// Ascending
const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements3.sort((a, b) => a - b);
console.log(movements3); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending
const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements4.sort((a, b) => b - a);
console.log(movements4); // [3000, 1300, 450, 200, 70, -130, -400, -650]
