module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/node_modules/chart.js/dist/Chart.js',
        'node_modules/angular-chart.js/dist/angular-chart.min.js',
        'app/js/app.js',
        'app/js/*.js',
        'test/unit/**/*.js'
      ],

      autoWatch : true,

      frameworks: ['jasmine'],

      browsers : ['Chrome'],

      plugins : [
              'karma-chrome-launcher',
              'karma-jasmine',
              "karma-spec-reporter"
      ],
      reporters: ["spec"],
        specReporter: {
        maxLogLines: 5,
        suppressErrorSummary: true,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: true,
        showSpecTiming: false
      },
    });
};
