// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('Cardservice',function(){
    
    var cardslist = ["Mehdi","khalid","Omar","Jalal","Abedelamtif","Nouradine"];

  return{
    getAll:function(){
       return cardslist;
    },
    getSelected:function(cardname){
      for (var i = 0; i < cardslist.length; i++) {
        if (angular.equals(cardslist[i], cardname)) {
          return cardslist[i];
        }
      }
      return null;
    }
  }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: 'BrowseCtrl'
      }
    }
  })
    .state('app.cardslist', {
      url: "/cardslist",
      views: {
        'menuContent': {
          templateUrl: "templates/cardslist.html",
          controller: 'CardslistCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/cardslist/:card",
    views: {
      'menuContent': {
        templateUrl: "templates/carddetails.html",
        controller: 'CarddetailsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cardslist');
});
