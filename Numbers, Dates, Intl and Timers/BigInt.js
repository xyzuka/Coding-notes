// WORKING WITH BIGINT

// Numbers are represented internally in the JS Engine as 64 bits, meaning that there are exactly 64 ones or zeros to represent any give number
// Of these 64 bits, only 53 are used to store the digits themselves, the rest are used for storing the decimal point and the sign

// Because of this, there is a limit of how big numbers can be
// To calculate this number we can do this
console.log(2 ** 53 - 1); // 9007199254740991
// It is stored in the Number namespace
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//* Any integer above this number cannot be represented accurately

// Databases will often deal with numbers larger than this, so in ES2020 the new primitive BigInt was introduced
// BigInt stores large numbers without any limit
console.log(34134231341241241241234); // 3.4134231341241242e+22
console.log(34134231341241241241234n); // 34134231341241241241234n
console.log(BigInt(34134231341241241241234)); // 34134231341241242484736n

// OPERATIONS WITH BIG INT
// BigInt also works with normal operations
console.log(10000n + 10000n); // 20000n
console.log(11234213412341241324n * 123123414312n); // 1383194712437117949459227429088n

//* Note - BigInt does not work with regular numbers -> will need to convert the number with BigInt
const huge = 34134213412412312312n;
const num = 2;
console.log(huge * BigInt(num)); // 68268426824824624624n

// DIVIDING WITH BIGINT
//* When dividing with BigInt, it will remove all decimal places
console.log(11n / 3n); // 3n
console.log(11 / 3); // 3.6666666666666665
