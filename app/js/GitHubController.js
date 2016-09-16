app.controller('GitHubController',['$scope', 'GitHub', function($scope, GitHub){


  $scope.repos;
  $scope.data;
  $scope.avatar;
  $scope.repoCount;
  $scope.followers;
  $scope.following;
  $scope.myDataSource = {
                chart: {
                    caption: "GitHub languages breakdown",
                    centerLabel: "$label: $value",
                    theme: "fint",
                    showPercentValues: "1",

                },
                data:[{
                    label: "Ruby",
                    value: "32"
                },
                {
                    label: "Javascript",
                    value: "17"
                },
                {
                    label: "Java",
                    value: "1"
                },
                {
                    label: "C#",
                    value: "1"
                }]
              };


  $scope.propertyName = 'name';
  $scope.reverse = true;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };


  GitHub.getUserInfo().then(function(response){
    $scope.data = response;
    _getAccountInfo(response);
  });

  GitHub.getRepos().then(function(response){
    $scope.repos = response
    _countLanguages(_getLanguageCount(response));
  });

  function _getAccountInfo(response){
    $scope.avatar = response.avatar_url;
    $scope.repoCount = response.public_repos;
    $scope.followers = response.followers;
    $scope.following = response.following;
  }

  function _getLanguageCount(response){
    var language = [];
    for(var repo in response){
      language.push(response[repo].language);
    }
    return language;
  }

  function _countLanguages(array){
    var count = {}
    for (var language in array){
      count[array[language]]=(count[array[language]] || 0) +1
    }
    console.log(count)
    return count
  }

}]);
