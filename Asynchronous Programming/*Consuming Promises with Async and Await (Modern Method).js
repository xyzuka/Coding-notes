//* CONSUMING PROMISES WITH ASYNC/AWAIT (Modern Method)
// Recreating the where am I function built previously

//* 1. Adding async in front will turn the function into a asynchronous function (a function that will keep running while performing the code that is inside of it, once done it will automatically return a promise)

//* 2. Instead a async function, it can have many await statements followed by a promise with the fetch statement
// The await statement will stop the function until the promise has been fulfilled (in this case, when the data has been fetched)

//* Once the promise has been resolved, the value of the whole await statement is going to be the resolved value of the promise (which can be stored in a variable)

//* The async and await method completely removes the need for consuming and resolving promises with the then method manually

//* Note: Async and Await is just synthetic sugar of consuming promises

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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  console.log(pos);
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse Geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data
  const response = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  // getting json out of the response
  const data = await response.json();
  renderCountry(data[0]);
};

whereAmI();
console.log('first');

// Traditional method of fulfilling a promise with the then method
// fetch(`https://restcountries.com/v2/name/${country}`).then(response => console.log(response))

// Modern method with async await
// const response = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
