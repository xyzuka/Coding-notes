//* ERROR HANDLING WITH try..catch

// The try...catch statement marks a try block and a catch block.
// If the code in the try block throws an exception then the code in the catch block will be executed.

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
  //*a
  try {
    // Geolocation
    const pos = await getPosition();
    console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    //*b
    if (!resGeo.ok) throw new Error(`Problem getting location data!`);

    // Country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    //*b
    if (!response.ok) throw new Error(`Problem getting country`);

    // getting json out of the response
    const data = await response.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 🔥`);
    renderError(`Uh oh! Something went wrong 🔥 ${err.message}`);
  }
};

whereAmI();

//*a We will wrap the entire code in the function in a try block to catch any errors that occur in the try block

//*b */ If the page reloads too quick, there will be too many requests sent to the reverse geocoding API, to resolve this, we will manually create an error in the try block to be caught in the catch block (with the ok property and then throwing a new error)
