app.service('GitHub', ['$http', function($http){
  var self = this;
  //var API_LINK = "http://api.github.com/users/harrywynnwill"
  var API_LINK = "/public/githubstats.json"
  var API_LINK_REPOS = "public/repos.json"


  self.getUserInfo = function(){
    return $http.get(API_LINK)
    .then(_handleResponseFromApi);
    }

    self.getRepos = function(){
      return $http.get(API_LINK_REPOS)
      .then(_handleResponseFromApi);
      }
  function _handleResponseFromApi (response) {
    return response.data;
  }

}]);
