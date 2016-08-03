(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "58f98fa230bebc4429c67f63eb29c0d3";

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/temperature.js":2}]},{},[3]);
