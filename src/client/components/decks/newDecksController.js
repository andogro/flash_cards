(function () {

  'use strict';

angular.module('myApp')
.controller('newDecksController', function($scope, $http, $routeParams) {

   $scope.formData = {};

     $scope.submit = function() {     
            console.log($scope.formData);
          $http.post('/deck/new', $scope.formData)
              .success(function(data) {
                  $scope.formData = {};
                  console.log(data);
              })
              .error(function(error) {
                  console.log('Error: ' + JSON.stringify(error));
              });
      };
      
    });

})();


