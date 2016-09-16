app.service('CodeWars', ['$http', function($http, CodewarsFactory) {
  self = this;
  var API_LINK = "/public/harrywynnwill.json"
  //var API_LINK = "https://www.codewars.com/api/v1/users/harrywynnwill"


  self.getData = function(){
    return $http.get(API_LINK).
    then(_handleResponseFromApi);
  };

  function _handleResponseFromApi (response) {
    return response.data;
  }


}]);
