// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

//* FIRST-CLASS FUNCTIONS
/*
- JavaScript treats functions as first-class citizens -> meaning functions are simply values
- Functions are just another "type" of object
*/

// Example: Functions can be stored in variables or properties
const x = function () {};
const y = {
  value: 1,
  inc: function () {
    this.value++;
  },
};

// Example: Functions can be passed to OTHER functions as values
const greet = () => console.log('Hello!');
btnClose.addEventListener('click', greet)

// Example: Call methods on functions
counter.inc.bind(someOtherObject);

// Functions can also be returned FROM functions

//* HIGHER-ORDER FUNCTIONS
// With first-class functions, we are able to use higher-order functions
// A higher-order function is a function that RECEIVES another function as an argument, that RETURNS a new function, or both

// Example: Function that receives another function
const greet = () => console.log('Hello!');
btnClose.addEventListener('click', greet)
// addEventListener is the higher-class function
// greet is the first-class function 

// Example: Function that returns a new function
function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}
// count is the higher-class function
// function() is the returned function
// This method of functions is more advanced
