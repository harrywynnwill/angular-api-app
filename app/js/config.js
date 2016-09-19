angular.module('app')


       .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/_gitHub.html",
    })
    .state('github', {
      url: "/gitHub",
      templateUrl: "partials/_gitHub.html",
    })
    .state('twitter', {
      url: "/twitter",
      templateUrl: "partials/_twitter.html",
    })
    .state('fitbit', {
      url: "/fitbit",
      templateUrl: "partials/_fitbit.html",
    })
    .state('codewars', {
      url: "/codewars",
      templateUrl: "partials/_codewars.html",
    });
}
