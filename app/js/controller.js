app.controller('gitHubDataController', ['$scope', 'GitHub', 'CodeWars', function($scope, GitHub, CodeWars){

    $scope.user;
    $scope.repos;
    $scope.codeWars;

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

    $scope.labels = function(hash){
      labels = [];
      for(label in $scope.languageCounter()){
        console.log(languageCounter())
        labels.push($scope.languageCounter());
      }
      return labels;
    };



  //  $scope.options = { legend: { display: false } };


    // GitHub.getData().then(function(data){
    //   $scope.user = data;
    // });
    //




    createData = function(hash){
      data = [];
      for(d in hash){
        data.push(d);
      }
      return data;
    }


  }]);
