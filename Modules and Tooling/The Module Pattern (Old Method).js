//////////////////////////////////////////
//////////////////////////////////////////
//* THE MODULE PATTERN

// The Module Pattern was the traditional method of implementing modules in JS

//* Modules used to be stored within an IFEE to be returned and accessed immediately

//*1: All of the items inside this function is private, so to make them accessible we would return an object of the items we would like to be accessed

//*2: To obtain the returned values, we can store the IFEE into a variable

//*2
const ShoppingCart = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} pieces of ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} pieces of ${product} ordered from supplier`);
  };

  //*1
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

//* We can now call the returned items inside the module pattern based off the variable we assigned
ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 3);
console.log(ShoppingCart);

//* Why are we able to change the returned values inside a function that is only run once? Because of Closures, the function is able to access all the variables that were present when it was created
