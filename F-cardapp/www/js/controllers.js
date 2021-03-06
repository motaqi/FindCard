angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BrowseCtrl', function($scope){
  $scope.title = "Favorites";
  $scope.cardslist = ["Mehdi","omar","khalid","nourdine"];
  

})



.controller('CardslistCtrl', function($scope,Cardservice) {
     $scope.cardslist = Cardservice.getAll();

 $scope.delete = function(item) {
    $scope.items.splice($scope.cardslist.indexOf(item), 1);
  };
})

.controller('NewcardCtrl', function($scope) {
   
})

.controller('SearchCtrl' ,function(){})


.controller('CarddetailsCtrl', function($scope, $stateParams, Cardservice) {
  var card = $stateParams.card;
  $scope.card = Cardservice.getSelected(card);
  alert(" " +$scope.card);
});
