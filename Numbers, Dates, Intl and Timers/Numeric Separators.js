// NUMERIC SEPARATORS

// Used for large numbers
// Used to help other developers understand large numbers

const planetDiameter = 287_460_000_000;
console.log(planetDiameter); // 287460000000
// Engine will ignore the _

const price = 345_99;
console.log(price); // 34599

const transferFee = 15_00;
const transferFee2 = 1_500;
console.log(transferFee, transferFee2); // 1500 1500

//* You cannot place it between a decimal and number
//* You cannot place it in the front or back of a number

//* Does not work on strings
console.log(Number('230_000')); // NaN

//* Does not work with parseInt
console.log(parseInt('230_000')); // 230
