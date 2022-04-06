//* Other Promise Combinators: race, allSettled and any

//*1. Promise.race -> receives an array of promises and it also returns a promise
// THis promise is settled (when a value is available) as soon as one of the input promises settles

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/fiji`),
    getJSON(`https://restcountries.com/v2/name/aus`),
    getJSON(`https://restcountries.com/v2/name/usa`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request too took long!`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/canada`),
  timeout(0.01),
]).then(res => console.log(res[0]).catch(err => console.error(err)));

//*2. Promise.allSettled -> takes in a array of promises and return an array of all the settled promises (no matter if the promises got rejected or not)

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success!'),
]).then(res => console.log(res));

//* In contrast to the Promise.all method, Promise.all will short circuit if there is one rejected promise whereas, Promise.allSettled will return all promises regardless if they got rejected

//*3. Promise.any -> Takes in a array of multiple promises and then return the first fulfilled promise and ignore rejected promises 
//* Will always return a fulfilled promise unless all of the promises are rejected
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success!'),
]).then(res => console.log(res));
