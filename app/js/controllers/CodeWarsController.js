app.controller('CodeWarsController', ['$scope', 'CodeWarsApiService', function($scope, CodeWarsApiService){

    $scope.user;
    $scope.repos;
    $scope.codeWars;
    $scope.score;
    $scope.lang;
    $scope.username;
    $scope.clan;
    $scope.honor;
    $scope.leaderboardPosition;


    CodeWarsApiService.getData().then(function(response){
      _populateData(response.ranks.languages);
      _getUserInfo(response);
    });

    function _populateData(response){
      var score = [];
      var language = [];
      for (var languages in response){
        language.push(languages);
        score.push(response[languages].score);
      }
      $scope.lang = language;
      $scope.score = score;
    }
    function _getUserInfo(response){
      $scope.username = response.username;
      $scope.clan = response.clan;
      $scope.honor = response.honor;
      $scope.leaderboardPosition = response.leaderboardPosition;
    }



    // $scope.languageCounter = function (repos) {
    //   var languages = {},lang;
    //   for (var i = 0, l = repos.length; i < l ; i++){
    //     lang = repos[i];
    //     languages[lang.language] = (languages[lang.language]|| 0) + 1;
    //   }
    //   return languages
    // }
    //
    // $scope.labels = function(hash){
    //   labels = [];
    //   for(label in $scope.languageCounter()){
    //     console.log(languageCounter())
    //     labels.push($scope.languageCounter());
    //   }
    //   return labels;
    // };


    //$scope.labels = $scope.codeWars.name;
    // $scope.data = $scope.codeWars.score;




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
