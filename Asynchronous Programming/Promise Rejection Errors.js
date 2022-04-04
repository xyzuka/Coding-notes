////////////////////////////////////////
//* HANDLING PROMISE REJECTIONS

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const btn = document.querySelector('.btn-country');

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    //* Handling promise rejection -> pass a second argument in the call back function after response.json(); this will "catch" the error
    .then(
      response => response.json()
      //   err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    //   err => alert(err)
    //* Adding a second argument to catch errors is not recommended since it is repetitive if there are multiple promises nested -> use the .catch() method at the end will solve this
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong: 💥💥💥 ${err}`);
    })
    //* .finally() will always run regardless of rejection or not
    .finally(() => (countriesContainer.style.opacity = 1));
};

// Using a button to simulate a promise rejection (when internet stops)
btn.addEventListener('click', function () {
  getCountryData('usa');
});
