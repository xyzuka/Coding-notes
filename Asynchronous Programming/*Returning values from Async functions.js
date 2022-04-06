// //* Returning values from Async functions

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}"/>
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    if (!resGeo.ok) throw new Error(`Problem getting location data!`);

    // Country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error(`Problem getting country`);

    const data = await response.json();
    renderCountry(data[0]);

    //*1.
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 🔥`);
    renderError(`Uh oh! Something went wrong 🔥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
//*1a.
// const city = whereAmI();
// console.log(city);

//*5.
//*2.
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   //*4.
//   .finally(() => console.log(`3: Finished getting location`));

//*5. above rewritten
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log(`3: Finished getting location`);
})();

//*1. What if you wanted to get data out of the function?
//*1a. We would store that returned value in a variable when calling the function - but since a async function will always return a promise, a promise will be the returned
//*2. To get the data we want (knowing that the returned value is a promise), we can use the then method to get the returned value of the promise
//*3. Handling errors -> If there are any errors, the code will not return since it will skip to the catch block
//*4. To have a piece of code always run at the end, use the finally method
//*5. Combining both the async and await method with the then method is considered bad practice, we can convert the returned value as an async function with IIFE holding a try and catch block 
