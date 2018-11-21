'use strict';

angular.module('myApp.autocomplete-list', [])

  .directive('autocompleteList', ['$http', function ($http) {
    return {
      restrict: 'E',
      templateUrl: 'directives/autocomplete-list/autocomplete-list.html',      
      link: function (scope, elem, attrs) {
        scope.$watch(attrs['startsWith'], function (newValue) {
          if (newValue) {            
            $http.get(`/api/names?startsWith=${newValue}`)
              .then(function success(response) {
                scope.fitNames = response.data;
              }, function error(response) {
                scope.error = response.statusText;
              });
          }
          else {
            scope.fitNames = [];
          }
        });
      }
    }
  }]);