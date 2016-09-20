
// require('dotenv').config()
var app = angular.module('app', ['chart.js', 'ng-fusioncharts', 'ui.router']);

app.config(function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
  });
  // Configure all doughnut charts
  ChartJsProvider.setOptions('doughnut', {
    cutoutPercentage: 60
  });
  ChartJsProvider.setOptions('bubble', {
    tooltips: { enabled: false }
  });
});
