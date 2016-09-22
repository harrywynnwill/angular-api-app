app.controller('TwilioController', function($scope, Twilio) {
  $scope.submit = function () {
    Twilio.create('Messages', {
        From: '+441438305025',
        To: '+447901970100',
        Body: 'This is a test! yay!'
    })
    .success(function (data, status, headers, config) {
        // Success - do something
    })
    .error(function (data, status, headers, config) {
        // Failure - do something
    });
  };
});
