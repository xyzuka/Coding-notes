//* AJAX CALLING (Modern Method) - Using Promises
// Recap -> Old Method

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// Modern Method - use fetch() and store into a variable
const newRequest = fetch('https://restcountries.com/v2/name/usa');
console.log(newRequest); // Promise {<pending>}

//* A promise is an object that is used as a placeholder for the future result of an asynchronous operation (it is simply a container for a future value eg. Response from AJAX call)

// Used to prevent call-back hell shown in the previous AJAX calling example (relying on events adn callbacks passed into asynchronous functions to handle asynchronous results)

// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations to escape callback hell

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

const getCountryData = function (country) {
  // Fetch function returns a promise, the response of the promise is handled with the then method
  fetch(`https://restcountries.com/v2/name/${country}`)
    // To read the data, we call the json method on the response object (also since json also returns a promise, we need to return the json method)
    .then(response => response.json())
    // The resolved value from the json method will be the data itself, which we can then render the country on the DOM
    .then(data => renderCountry(data[0]));
};
getCountryData('usa');
