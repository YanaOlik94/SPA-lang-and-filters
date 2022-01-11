var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .when('/physics', {
        templateUrl: 'physics.html'
      })
      .otherwise({redirectTo:'/'});

});
  
  app.controller('homeCtrl', function ($scope) {
    console.log('HomeCtrl'); 
  });

//Modal 
app.controller('mainCtrl', function($scope) {

  $scope.dialog = function() {
    $scope.popUpDialogContent = 'Желаете оставить отзыв?';
    $scope.showPopUpDialog = true;
    $scope.name = '';
    $scope.email = '';
    $scope.myText = '50';
  };
});

app.directive('popUpDialog', function(){
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'modal.html',
    controller: function($scope) {
      $scope.showPopUpDialog = false;
      $scope.closePopUpDialog = function() {
      $scope.showPopUpDialog = false;
      };
      $scope.popUpDialogApprove = function() {
      $scope.showPopUpDialog = false;
      };
    }
  };
});



  



