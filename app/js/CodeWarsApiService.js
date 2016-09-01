app.service('CodeWars', ['$http', function($http) {
  self = this;
  var API_LINK = "/public/harrywynnwill.json"


  self.getData = function(){
    return $http.get(API_LINK)
    }


}]);
