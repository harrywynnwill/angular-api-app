app.controller('gitHubDataController', ['$scope', 'GitHub', 'CodeWars', function($scope, GitHub, CodeWars){

    $scope.user;
    $scope.repos;
    $scope.codeWars;


    // GitHub.getData().then(function(data){
    //   $scope.user = data;
    // });
    //

    GitHub.getRepos().then(function(response){
      $scope.repos = response.data;
    });
    CodeWars.getData().then(function(response){
      $scope.codeWars = response.data;
    });

    $scope.languageCounter = function (repos) {
      var languages = {},lang;
      for (var i = 0, l = repos.length; i < l ; i++){
        lang = repos[i];
        languages[lang.language] = (languages[lang.language]|| 0) + 1;
      }
      return languages
    }


  }]);
