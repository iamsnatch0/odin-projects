// Exercise 11 - tempConversion
// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:


const convertToCelsius = function(a) {
   let resultsA = (a - 32) * 5/9
   let rounded = Math.round(resultsA * 10) / 10

   return rounded
};

const convertToFahrenheit = function(b) {
  let resultsB = (b * 9/5) + 32
  let rounded = Math.round(resultsB * 10) / 10

  return rounded
  
};

console.log(convertToCelsius(32)); //fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0));  // celsius to fahrenheit, should return 32
