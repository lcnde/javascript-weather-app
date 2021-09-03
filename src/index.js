import _ from 'lodash';

// using only process.env.OPENWEATHER_API was bundling the real value of the key inside main.js exposing the api key to the public. By putting the key inside a function its value is protected since the value literal does not get exposed inside main.js
function getAPIKey() {
  return process.env.OPENWEATHER_API
};

const weather = async function weather(cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${getAPIKey()}`, {mode: 'cors'});
  let data = await response.json();
  return data;
};

async function formSubmit() {
  var cityWeather = await weather(document.frm1.city.value);
  console.log(cityWeather.name);
};

const search = document.getElementById('formSubmit');
search.addEventListener("click", ()=> {
  formSubmit();
});

