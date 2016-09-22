app.controller('FitBitController',['$scope', 'FitBitApiService',function($scope, FitBitApiService){

  $scope.fitBitData;


  FitBitApiService.getFitBitData().then(function(response){
    $scope.fitBitData = response;
    console.log(response)
  })



}])
