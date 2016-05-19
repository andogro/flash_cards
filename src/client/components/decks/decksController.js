(function () {

  'use strict';

angular.module('myApp')

.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
})

.controller('decksController', function($scope, $routeParams, crudService) {
    console.log('hello');
    $scope.formData = {};
    $scope.userData = {};
    var currId = $routeParams.id;

     crudService.getDeckById(currId)
        .success(function(results) {
            $scope.deckData = results.data;
            console.log("deck it out"+ JSON.stringify($scope.deckData));
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
    });

})();


