'use strict';

var websiteSorter = angular.module('websiteSorter', ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });


      $routeProvider
          .when("/", {
            templateUrl:"index.html",
            controller:"HomeCtrl"
          })
          .otherwise({redirectTo:"/"});

    });

