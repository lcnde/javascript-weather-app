import _ from 'lodash';
import './style.scss';

const weather = async function weather(cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_API}`, {mode: 'cors'});
  let data = await response.json();
  return data;
};

async function formSubmit() {
  // put here the function that loads the gif with the loading screen
  var cityWeather = await weather(document.frm1.city.value);
  console.log(cityWeather);
};

const search = document.getElementById('formSubmit');
search.addEventListener("click", ()=> {
  formSubmit();
});

