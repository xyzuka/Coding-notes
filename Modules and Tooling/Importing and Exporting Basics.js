//////////////////////////////////////////
////////////// EXPORT FILE ///////////////
//////////////////////////////////////////

//*2 - Importing with * will assign all the items inside the file into the declared object (ShoppingCart)

// Exporting Module
console.log(`Exporting Module`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} pieces of ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

//*2
export { totalPrice, totalQuantity as TQ };

//3* DEFAULT EXPORTS - used for exporting one thing per module
//* Example - we can export the value of the above function
// However while exporting it does not take a name since the name will be assigned when the value is imported
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} pieces of ${product} added to cart`);
}

//////////////////////////////////////////
////////////// IMPORT FILE ///////////////
//////////////////////////////////////////

//* NAMED IMPORTS AND EXPORTS

//*1 - You can change the name of imports as well with the as keyword
//*2 - Importing with * will assign all the items inside the file into the declared object (ShoppingCart)

//* IMPORTING MODULE
import {
  addToCart,
  //*1
  totalPrice as price,
  //*2 - (Refer to shoppingCart Module for name change)
  TQ,
} from './shoppingCart.js';

addToCart('pineapples', 5);
//*2 - (Refer to shoppingCart Module for name change)
console.log(price, TQ);

// * IMPORTING ALL EXPORTS OF A MODULE ALL AT ONCE WITH (*)
import * as ShoppingCart from './shoppingCart.js';
console.log(`Importing Module`);

//*2
ShoppingCart.addToCart('apples', 5);
console.log(ShoppingCart.totalPrice);

//*3 (from shoppingCart)
//*3 - add will be the new name for the imported value from the shoppingCart file
import { cart } from './shoppingCart.js';
import add from './shoppingCart.js';
add('pizza', 5);

//*4 - Imported values are not a copy, they are a live connection
console.log(cart); // [{'pineapples', 5}, {'apples', 5}, {'pizza', 5}]
