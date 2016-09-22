
// require('dotenv').config()
var app = angular.module('app', ['chart.js', 'ng-fusioncharts', 'ui.router', 'mcwebb.twilio']);

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

app.config(function (TwilioProvider) {
    TwilioProvider.setCredentials({
        accountSid: 'AC6e9aa41dc9b52269f000cfedba11868d',
        authToken: '2962db4f97bf0d00f3d7824f4b5992a6'
    });
});
