// FLAT AND FLATMAP METHODS

//////////////////////////////////
// FLAT METHOD

// Used for "flattening" arrays, brings out elements inside of a nested array

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrFlat = arr.flat();
console.log(arrFlat); // [1, 2, 3, 4, 5, 6, 7, 8]

// For deep nested arrays - .flat() only goes one level as a default
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]

// We can specify the depth by specifying it
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Practical example: Calculate the balance of ALL accounts stored

const account1 = {
  owner: "Brandon Yee",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/* Steps:
    1. Create a new variable to store all the movement arrays using .map
    2. We will then have nested arrays, use the flat method to bring out the elements 
    3. Calculate the sum of the balance
*/

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements); // All the movements in nested arrays
const allMovements = accountMovements.flat();
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840

// We can use chaining as well
const balance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(balance); // 17840

//////////////////////////////////
// FLATMAP METHOD

// Combined both the flat and map method together
// Returns a new array formed by the given call back function and then flattening the result by ONLY one level

// In the example above:
const balance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(balance2); // 17840
