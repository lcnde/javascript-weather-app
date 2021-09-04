Website that displays the weather of any city you want.
Uses javascript async code and promises.
Also uses fetch to work with external APIs

The website is built with webpack

# How to use
Create a .env file
```
$ touch .env
```
and add the variables
```
OPENWEATHER_API=yourkey
```
without any spaces or `"`.

Now run 
```
$ npm run build
```
To bundle the code.

If you plan to clone the repository and make changes to it, while you code run
```
$ nom run watch
```
This way the code inside `main.js` will update itself while you work inside `index.js`. 

