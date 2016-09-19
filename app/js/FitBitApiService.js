angular.module('app')
  .service('FitBitApiService', ['$http', function($http) {
    self = this;
    var API_LINK = "/public/fitbit.json"


    // self.getFitBitData = function(){
    //   return $http.get('https://api.fitbit.com/1/user/-/profile.json', {
    //     headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NDRMTVYiLCJhdWQiOiIyMjdaM1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNDc0ODkxMjY3LCJpYXQiOjE0NzQyODY0Njd9.ITqs0y1gmv88bVnT2Q4XmYYYqpGHOxrNuTkxS7ajQYc'}
    //   }).then(_handleResponseFromApi);
    // }

    self.getFitBitData = function(){
      return $http.get(API_LINK).
      then(_handleResponseFromApi);
    };


    function _handleResponseFromApi (response) {
      return response.data.data.user;

    }



  }]);
