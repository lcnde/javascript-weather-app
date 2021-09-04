import _ from 'lodash';
import './style.scss';

//this is the function that fetches the json with the data you need using the API
const weather = async function weather(cityName) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.OPENWEATHER_API}`, {mode: 'cors'});
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
  previsionContainer(cityWeather.name);
  degreesContainer(cityWeather.main.temp);
  iconContainer(cityWeather.weather[0].id)
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

function previsionContainer(location) {
  var e = document.createElement('div');
  e.classList.add('prevision-container');
  document.querySelector('.forecast-container').appendChild(e);
  var e = document.createElement('h3');
  e.textContent = `${location}`;
  document.querySelector('.prevision-container').appendChild(e);
};

function degreesContainer(degrees) {
  var e = document.createElement('div');
  e.classList.add('degrees-container');
  document.querySelector('.forecast-container').appendChild(e);
  var e = document.createElement('h1');
  var rounded = Math.round(degrees);
  e.textContent = `${rounded}`;
  document.querySelector('.degrees-container').appendChild(e);
  var e = document.createElement('p');
  e.textContent = '°';
  document.querySelector('.degrees-container').appendChild(e);
};

function iconContainer(weather) {
  var e = document.createElement('div');
  e.classList.add('icon-container');
  document.querySelector('.forecast-container').appendChild(e);

  if (weather >= 200 && weather <= 232 || weather >= 300 && weather <= 321 || weather >= 500 && weather <= 531 || weather >= 701 && weather <= 781) {
    soggyIcon();
  } else if (weather >= 600 && weather <= 622) {
    chillyIcon();
  } else if (weather == 800) {
    sunnyIcon();
  } else if (weather >= 801 && weather <= 804) {
    perfectIcon();
  };
};

function soggyIcon() {
  var a = document.createElement('div');
  a.setAttribute('icon', 'stormy');
  a.setAttribute('data-label', 'Soggy');
  document.querySelector('.icon-container').appendChild(a);
  var b = document.createElement('span');
  b.classList.add('cloud');
  a.appendChild(b);
  var c = document.createElement('ul');
  b.appendChild(c);
  var d = document.createElement('li');
  c.appendChild(d);
  c.appendChild(d);
  c.appendChild(d);
  c.appendChild(d);
  c.appendChild(d);
};

function sunnyIcon() {
  var a = document.createElement('div');
  a.setAttribute('icon', 'sunny');
  a.setAttribute('data-label', 'Sunny');
  document.querySelector('.icon-container').appendChild(a);
  var b = document.createElement('span');
  b.classList.add('sun');
  a.appendChild(b);
};

function perfectIcon() {
  var a = document.createElement('div');
  a.setAttribute('icon', 'cloudy');
  a.setAttribute('data-label', 'Perfect');
  document.querySelector('.icon-container').appendChild(a);
  var b = document.createElement('span');
  b.classList.add('cloud');
  a.appendChild(b);
  a.appendChild(b);
};

function chillyIcon() {
  var a = document.createElement('div');
  a.setAttribute('icon', 'snowy');
  a.setAttribute('data-label', 'Chilly');
  document.querySelector('.icon-container').appendChild(a);
  var b = document.createElement('span');
  b.classList.add('snowman');
  a.appendChild(b);
  var c = document.createElement('ul');
  b.appendChild(c);
  var d = document.createElement('li');
  for (var step = 0; step < 13; step++) {
    c.appendChild(d);
  };
};

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



