(function () {

  'use strict';

  angular.module('myApp')
    .config(appConfig)
    .run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider',];
  routeChange.$inject = ['$rootScope', '$location', '$window'];


  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../components/views/home.html',
      // restricted: false,
      // preventLoggedIn: true
    })
    .when('/users', {
      templateUrl: '../components/users/usersindex.html',
      controller: 'usersController'
      // restricted: false,
      // preventLoggedIn: false
    })
    .when('/decks/:id',{
      templateUrl: '../components/decks/deckindex.html',
      controller: 'decksController'
      // restricted: false,
      // preventLoggedIn: false
    })
    .when('/deck/new',{
      templateUrl: '../components/decks/addnewdeck.html',
      controller: 'newDecksController'
      // restricted: false,
      // preventLoggedIn: false
    })
    .when('/singledeck/:id',{
      templateUrl: '../components/decks/singledeck.html',
      controller: 'singleDeckController'
      // restricted: false,
      // preventLoggedIn: false
    })
    .otherwise({ redirectTo : '/login'});
    // .when('/login', {
    //   templateUrl: '../components/auth/login.html',
    //   controller: 'loginController',
    //   restricted: false,
    //   preventLoggedIn: true
    // })
    // .when('/members', {
    //   templateUrl: '../components/members/members.html',
    //   controller: 'membersController',
    //   restricted: true,
    //   preventLoggedIn: false
    // })
    // .when('/edit', {
    //   templateUrl: '../components/members/edit.html',
    //   controller: 'registerController',
    //   restricted: true,
    //   preventLoggedIn: false
    // })
    // .when('/logout', {
    //   restricted: false,
    //   preventLoggedIn: false,
    //   resolve: {
    //     test: function(authService, $rootScope, $location) {
    //       authService.logout($rootScope.user);
    //       $location.path('/');
    //     }
    //   }
    // })
    // .otherwise({redirectTo: '/login'});
    // $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {;
        $location.path('/members');
      }
    });
  }

})();