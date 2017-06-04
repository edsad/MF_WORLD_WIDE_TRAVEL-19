"use strict";

var app = angular.module("TravelBookApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'partials/greetings.html'
    }).
    when('/showall', {
      templateUrl: 'partials/book-list.html',
      controller: 'BookCtrl'
    }).

    otherwise('/');

});

console.log("hello, this crap is working!");