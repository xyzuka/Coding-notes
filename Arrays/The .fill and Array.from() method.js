// PROGRAMMATICALLY CREATING AND FILLING ARRAYS - .fill() and Array.from()

// Creating arrays manually when we know the data
console.log([1, 2, 3, 4, 5, 6, 7]); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

// Programmatically creating an array
const emptyArray = new Array(7);
console.log(emptyArray); // Array(7) [ <7 empty slots> ]

//* Note: JavaScript will return empty slots in an array if one number is defined as a argument

////////////////////////////////////////////////////////
// THE FILL METHOD

// The fill method will fill up an array with the specified argument
// console.log(emptyArray.fill(1)); // [ 1, 1, 1, 1, 1, 1, 1 ]

//* Note: The fill method will mutate the original array
// console.log(emptyArray); // [ 1, 1, 1, 1, 1, 1, 1 ]

//* Note: We can specify the starting and ending position to fill
// Eg. fill starting from index 3 and end at index 5
console.log(emptyArray.fill(1, 3, 5)); // Array(7) [ <3 empty slots>, 1, 1, <2 empty slots> ]

//* Fill also works on regular arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.fill(23, 2, 6)); // Array(7) [ 1, 2, 23, 23, 23, 23, 7 ]

////////////////////////////////////////////////////////
// THE Array.from() METHOD

// Array.from() is a method which creates a new, shallow-copied array
// We can specify the length of the new array

const newArr = Array.from({ length: 5 }, () => 1);
console.log(newArr); // Array(5) [ 1, 1, 1, 1, 1 ]

// Ex: Recreating the original array
const arrCopy = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arrCopy); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
//* When are not using a parameter, we use _ to specify it is a throwaway variable

// Array.from also works on querySelectorAll -> since it returns a node list similar to an Array
// Eg. Bankist app example: We'd like to calculate the balance of the account by selecting the UI nodes

//* Note: We would need to have a eventListener to pick up all the movement amounts to calculate the balance

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent)
  ).reduce((acc, mov) => acc + mov, 0);
  console.log(movementsUI); // 3840
});
