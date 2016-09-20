angular.module('app')


       .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/app/views/gitHub.html",
    })
    .state('github', {
      url: "/gitHub",
      templateUrl: "/app/views/gitHub.html",
    })
    .state('twitter', {
      url: "/twitter",
      templateUrl: "app/views/twitter.html",
    })
    .state('fitbit', {
      url: "/fitbit",
      templateUrl: "/app/views/fitbit.html",
    })
    .state('codewars', {
      url: "/codewars",
      templateUrl: "app/views/codewars.html",
    });
}
