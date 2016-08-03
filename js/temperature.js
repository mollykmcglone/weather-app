function Temperature () {
}

Temperature.prototype.convertToCelsius = function(tempKelvin) {
  var celsius = (tempKelvin - 273.15).toFixed(2);
  return celsius;
};

Temperature.prototype.convertToFahrenheit = function(tempKelvin) {
  var celsius = (tempKelvin - 273.15).toFixed(2);
  var fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
  return fahrenheit;
};

exports.temperatureModule = Temperature;
