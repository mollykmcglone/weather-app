var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#humidityLocation').click(function() {
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(response);
    }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
    });
  });
});

var Temperature = require('./../js/temperature.js').temperatureModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#tempCelsius').click(function() {
    var city = $('#location').val();
    var ourTemperature = new Temperature();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        $('.showCelsius').text("The temperature in " + city + " is " + ourTemperature.convertToCelsius(response.main.temp) + " degrees Celsius. ");
      }).fail(function(error) {
        $('.showCelsius').text(error.responseJSON.message);
    });
  });

  $('#tempFahrenheit').click(function() {
    var city = $('#location').val();
    var ourTemperature = new Temperature();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        $('.showFahrenheit').text("The temperature in " + city + " is " + ourTemperature.convertToFahrenheit(response.main.temp) + " degrees Fahrenheit.");
      }).fail(function(error) {
        $('.showFahrenheit').text(error.responseJSON.message);
    });
  });
});
