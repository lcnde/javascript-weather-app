import _ from 'lodash';

var key = ""

(async () => {
  return key = fetch(`${process.env.OPENWEATHER_API}`)
})();

const keyelement = document.createElement("p")
keyelement.innerHTML = `${key}`

const test = document.querySelector('.test');

test.appendChild(keyelement);
