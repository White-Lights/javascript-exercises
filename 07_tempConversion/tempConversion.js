const convertToCelsius = function(degrees) {
  let degreesCels = (degrees - 32) * (5/9);
  degreesCels = (Math.round(degreesCels * 10)/10)
  return degreesCels;
};

const convertToFahrenheit = function(degrees) {
  let degreesFahr = (degrees * (9/5) + 32);
  degreesFahr = (Math.round(degreesFahr * 10)/10)
  return degreesFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
