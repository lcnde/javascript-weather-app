import _ from 'lodash';

var apiKey = process.env.OPENWEATHER_API;

const weather = async function weather(cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, {mode: 'cors'});
  let data = await response.json();
  return data;
};

async function formSubmit() {
  var cityWeather = await weather(document.frm1.city.value);
  console.log(cityWeather);
};

const search = document.getElementById('formSubmit');
search.addEventListener("click", ()=> {
  formSubmit();
});


