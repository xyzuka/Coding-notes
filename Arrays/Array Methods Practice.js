// ARRAY METHODS PRACTICE

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

// Ex 1: Calculate the total amount deposited in the bank from all accounts

const bankDepositsSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositsSum); // 25180

// Ex 2: Count the amount of deposits in the bank with at least $1000

// Method 1
const numDeposits1000 = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((sum) => sum >= 1000).length;

// Method 2
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // 6

// console.log(numDeposits1000); // 6

// Ex 3: Create an object that contains the sum of deposits and withdrawals with the reduce method
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); // 25180 -7340
//* Note: The object defined in the call back function is sum/the accumulator
//* Note: Since there is a function body, we need to explicitly return the accumulator

// Ex 4: Create a function to convert a string to title case
// Example - convert "this is a nice title" to "This Is a Nice Title"

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title")); // This Is a Nice Title
console.log(convertTitleCase("this is a LONG title but BUT too LONG")); // This Is a Long Title but but Too Long
console.log(convertTitleCase("and this is ANOTHER WORD")); // // And This Is Another Word
