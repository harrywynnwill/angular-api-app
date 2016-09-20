angular.module('app')


       .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/app/public/views/github.html",
    })
    .state('github', {
      url: "/gitHub",
      templateUrl: "/app/public/views/github.html",
    })
    .state('twitter', {
      url: "/twitter",
      templateUrl: "app/public/views/twitter.html",
    })
    .state('fitbit', {
      url: "/fitbit",
      templateUrl: "app/public/views/fitbit.html",
    })
    .state('codewars', {
      url: "/codewars",
      templateUrl: "app/public/views/codewars.html",
    });
}
