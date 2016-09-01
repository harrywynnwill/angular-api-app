app.service('GitHub', ['$http', function($http){
  var self = this;
  var API_LINK = "http://api.github.com/users/harrywynnwill"
  var REPOS = "/repos"
  var data;

  // self.getData = function(){
  //   return $http.get(API_LINK)
  //   }

  self.getRepos = function(){
    return $http.get('/public/repos.json')
    }

}]);
