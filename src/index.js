import _ from 'lodash';
import './style.scss';

//this is the function that fetches the json with the data you need using the API
const weather = async function weather(cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_API}`, {mode: 'cors'});
  let data = await response.json();
  return data;
};

// adds the event listener on the form button
const search = document.getElementById('formSubmit');
search.addEventListener("click", ()=> {
  formSubmit();
});

// this function will take the data from the json and will display it in the page
async function formSubmit() {
  forecastContainer();
  loader.add();
  var cityWeather = await weather(document.frm1.city.value);
  loader.remove();
  console.log(cityWeather);
};

// this creates the forecast container if it does not exist already
function forecastContainer() {
  var element = document.querySelector('.forecast-container');
  if (typeof(element) == 'undefined' || element == null) { //creates the container if it does not exist
    var element = document.createElement('div');
    element.classList.add('forecast-container');
    document.querySelector('.main').appendChild(element);
  } else { //empties the forecast container so it can get filled with new info between each request
    if (typeof(element) != 'undefined' || element != null) {
      var child = element.lastElementChild;
      if (typeof(child) != 'undefined' || child != null) {
        while (child) {
          element.removeChild(child);
          child = element.lastElementChild;
        };
      };
    };
  };
};

// function previsionContainer() {

// }

// creates a loader animation anad removes it once the api request finishes
const loader = {
  add: () => {
    var loader = document.createElement("div");
    loader.classList.add("loader");
    document.querySelector('.forecast-container').appendChild(loader);
    var div = document.createElement("div");
    div.classList.add("lds-ripple");
    document.querySelector(".loader").appendChild(div);
    var div = document.createElement("div");
    document.querySelector(".lds-ripple").appendChild(div);
    document.querySelector(".lds-ripple").appendChild(div);
  },
  remove: () => {
    var e = document.querySelector(".loader");
    // loop that removes all child noodes
    var child = e.lastElementChild;
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
    e.remove(); //removes node
  }
};



