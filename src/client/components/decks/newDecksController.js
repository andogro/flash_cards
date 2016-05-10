(function () {

  'use strict';

angular.module('myApp')
.controller('newDecksController', function($scope, $http, $routeParams) {

    $scope.formData = {};
    $scope.userData = {};
    var currId = $routeParams.id;

     $scope.submit = function() {
        


        if ($scope.) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };


    // Create a new Deck
    $http.get('/deck/new')
        .success(function(results) {
            $scope.deckData = results.data;
            console.log("new deck data if any"+ JSON.stringify($scope.deckData));
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
    });

})();


