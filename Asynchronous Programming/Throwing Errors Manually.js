////////////////////////////////////////
//* THROWING ERRORS MANUALLY

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const btn = document.querySelector('.btn-country');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbor = data[0].borders[0];
//       const neighbor = 'sadasda';
//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     //   err => alert(err)
//     //* Adding a second argument to catch errors is not recommended since it is repetitive if there are multiple promises nested -> use the .catch() method at the end will solve this
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥 💥  ${err.message}. Try again!`);
//     })
//     //* .finally() will always run regardless of rejection or not
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// Refactored with helper functions

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders;
      
      //* Display error messages to the user if there is no neighboring country
      if (!neighbor) throw new Error('No neighbor found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥 💥  ${err.message}. Try again!`);
    })
    //* .finally() will always run regardless of rejection or not
    .finally(() => (countriesContainer.style.opacity = 1));
};

// Using a button to simulate a promise rejection (when internet stops)
btn.addEventListener('click', function () {
  getCountryData('usa');
});

getCountryData('australia');
