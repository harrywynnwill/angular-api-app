app.service('GitHub', ['$http', function($http){
  var self = this;
  //var API_LINK = "http://api.github.com/users/harrywynnwill"
  var API_LINK = "/public/repos.json"
  var REPOS = "/repos"


  self.getData = function(){
    return $http.get(API_LINK)
    .then(_handleResponseFromApi);
    }

  function _handleResponseFromApi (response) {
    return response.data;
  }

}]);
