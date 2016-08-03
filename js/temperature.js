function Temperature () {
}

Temperature.prototype.convertTemp = function(tempKelvin) {
  var response = [];
  var celsius = (tempKelvin - 273.15).toFixed(2);
  var fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
  response.push(celsius, fahrenheit);
  return response;
};

exports.temperatureModule = Temperature;
