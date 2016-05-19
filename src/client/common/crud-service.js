(function () {

  'use strict';

  angular.module('myApp')
  .service('crudService', crudService);
  crudService.$inject = ['$http'];

    function crudService($http) {
      console.log('here i am');
     return {
      getDeckById: function(currId) {
        return $http.get('/decks/'+currId)
        },
      addDeck: function(data) {
        return $http.post('/deck/new', data)
       },
      getUserDeck: function(currId) {
        return $http.get('/singledeck/'+currId)
      }    
    }
  }
})();