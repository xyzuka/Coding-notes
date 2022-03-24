'use strict';

// SIMPLE ARRAY METHODS
/* Methods covered here:
    1. .slice()
    2. .splice()
    3. .reverse()
    4. .concat()
    5. .join()
*/

// Simple test array
let arr = ['a', 'b', 'c', 'd', 'e'];

//* Method 1: .slice(begin, end);
// Takes a 'slice' of an array at the defined starting and end position
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']

// To create a swallow copy, we do not give any parameters
//* Used to chain methods together
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// Similar to using the spread operator
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

//* Method 2: .splice(begin, elements to delete)
// Mutates the array by extracting items in the array
console.log(arr.splice(2, 2)); // ['c', 'd']
console.log(arr); // ['a', 'b', 'e']
//* Uses include extracting the last element from a array
console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b]
// .splice() will mutate the original array

//* Method 3: .reverse()
// Returns an array reversed, also mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

//* Method 4: arr1.concat(arr2)
// Concatenates the two defined arrays
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// Similar as spread operator
console.log([...arr, ...arr2]); //  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//* Method 5: .join()
console.log(letters.join(' !! ')); // a !! b !! c !! d !! e !! f !! g !! h !! i !! j
