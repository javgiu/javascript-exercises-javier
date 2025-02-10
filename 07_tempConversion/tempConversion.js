const convertToCelsius = function(farenheit) {
  const toCelsius = ( Math.round( (farenheit - 32) * 5 / 9 * 10) ) / 10;
  return toCelsius;
};

const convertToFahrenheit = function(celsius) {
  const toFarenheit = ( Math.round( (celsius * 9 / 5 + 32) * 10 ) ) / 10;
  return toFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
