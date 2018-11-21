'use strict';

angular.module('myApp.autocomplete-form', ['ngRoute', 'myApp.autocomplete-list'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/autocomplete-form', {
      templateUrl: 'views/autocomplete-form/autocomplete-form.html',
      controller: 'AutocompleteFormCtrl'
    });
  }])

  .controller('AutocompleteFormCtrl', ['$scope', function ($scope) {
    $scope.someName = '';    
  }]);