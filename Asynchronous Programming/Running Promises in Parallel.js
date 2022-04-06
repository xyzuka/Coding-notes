//* Running Promises in Parallel

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

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

// Running promises in parallel are used for running promises when the order does not matter - eg. getting data from three countries regardless of the order

const get3Countries = async function (c1, c2, c3) {
  //*1.
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    //*2.
    //*3.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    //*4.
    const cities = data.map(data => data[0].capital);
    console.log(cities);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('fiji', 'usa', 'australia');

//*1. With async functions, we will always need to wrap our code in try and catch blocks
//*2. To save loading time, we can have all promises load at the same time (using Promise.all() combinator)
//*2a. The Promise.all() combinator takes in a array of promises and returns a new promise, which will run all the promises in the array at the same time
//*3. Handling the new promise can be done with the then method
//*4. To get the data out of the array, we will loop through the data, and take out the data we want (use map method to return a new array)

//* Note: if one promise rejects, the whole promise array will be rejected
