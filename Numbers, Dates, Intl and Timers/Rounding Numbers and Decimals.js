// MATH ROUNDING

// SQUARE ROOT
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// CUBIC ROOT
console.log(8 ** (1 / 3)); // 2

// FIND MAXIMUM VALUE
//* Math.max also does type conversion but does not parse
console.log(Math.max(5, 18, 23, 11, 2, 1)); // 22
console.log(Math.max(5, 18, '55', 11, 2, 1)); // 55
console.log(Math.max(5, 18, '55px', 11, 2, 1)); // NaN

// FIND MIN VALUE
console.log(Math.min(5, 18, 23, 11, 2, 1)); // 1
console.log(Math.min(5, 18, '55', 11, 2, 1)); // 1
console.log(Math.min(5, 18, '55px', 11, 2, 1)); // NaN

// PI CIRCLE
console.log(Math.PI); // 3.141592653589793

// GET A RANDOM NUMBER (between 1-6)
console.log(Math.trunc(Math.random() * 6) + 1);

// GENERATE RANDOM INTEGER BETWEEN TWO NUMBERS
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(100, 200));

// ROUNDING INTEGERS
//* All these methods do type conversion
console.log(Math.trunc(23.3)); // 23 (Removes decimal)

console.log(Math.round(23.6)); // 24 (Rounds off to nearest num)
console.log(Math.round(23.1)); // 23 (Rounds off to nearest num)

console.log(Math.ceil(23.6)); // 24 (Rounds up the number)
console.log(Math.ceil(23.1)); // 24

console.log(Math.floor(23.6)); // 23 (Rounds down to nearest num)
console.log(Math.floor(23.1)); // 23

//* Math.floor is better than .trunc since it handles negative rounding better

// ROUNDING DECIMALS
//* You need to wrap the decimal in ()
console.log((2.7).toFixed(0)); // '3'
console.log((2.345).toFixed(2)); // '2.35' (Round off to two decimal places)
console.log(+(2.345).toFixed(2)); // 2.35 (Convert to number with +)
