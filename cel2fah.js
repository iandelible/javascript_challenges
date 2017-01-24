var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celcius: ');
var degreesNum = Number(degrees);
var degreesFahrenheit = degreesNum * 1.8 + 32;
console.log('It is ' + degreesFahrenheit + ' degrees Fahrenheit!');

//opposite

var degreeF = readlineSync.question('Enter degrees in Fahrenheit: ');
var degreesNumber = Number(degreeF);
var degreesCelsius = ((degreeF - 32) / 1.8);
console.log('It is ' + degreesCelsius + ' degrees in Celsius! ')