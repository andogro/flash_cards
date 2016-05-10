(function () {

  'use strict';

angular.module('myApp')
.controller('singleDeckController', function($scope, $http, $routeParams) {

    $scope.formData = {};
    $scope.userData = {};
    var currId = $routeParams.id;

    // Get user by ID
    $http.get('/singledeck/'+currId)
        .success(function(results) {
            $scope.deckData = results.data;
            console.log("singleDeckController"+ JSON.stringify($scope.deckData));
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
    });

})();


