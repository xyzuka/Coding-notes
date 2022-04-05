//* BUILDING A SIMPLE PROMISE

// Simulating a lottery win: A fulfilled promise is to win the lottery, whereas a rejected promise is to lose

// 1. Creating a Promise (takes one argument which is the executor function - which then takes in the resolve and rejection arguments)
const lotteryPromise = new Promise(function (resolve, reject) {
  // 3. Adding a timer to simulate a lottery timer
  console.log('Lottery draw will be announced in 2 seconds 🔮');
  setTimeout(function () {
    // If the lottery wins, then the resolve function will be called (to fulfil the promise)
    if (Math.random() >= 0.5) {
      resolve('You WIN! 💸');
    } else {
      // 4. Instead of passing a object we can create a error
      reject(new Error('You lost your money! 😢'));
    }
  }, 2000);
});

// 2. Consuming the promise we created (with then method to return the promise)
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying -> converting a callback based asynchronous behaviour to promise based
// Eg. Promisifying the setTimeout function and create a wait function
// We will create and return a promise inside this function to encapsulate the asynchronous operation even further
const wait = function (seconds) {
  // No need for reject argument since the timer will never fail
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Consuming this promise will wait for two seconds and then it will resolve (Note: The resolved call back function will not receive any value since it is just a console log)
wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`));
