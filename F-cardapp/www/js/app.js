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
    

    var cardslist = [
      {
        name:"said raslan",
        titre:"Doctor",
        img:"http://s.wat.tv/image/parmi-fondements-gens-sunnah_6fg0v_2tc59y.jpg",
        city:"Monoufia",
        country:"Egypt",
        description:"He was born in the village of Subk Al Ahad, Ashmun, Munofiaa (Egypt)"
      },
      {
        name:"Salhe alfawzane",
        titre:"Doctor",
        img:"http://vid.alarabiya.net/images/2014/03/18/2a94fefd-2080-47c9-b2ba-dc82fc9adafa/2a94fefd-2080-47c9-b2ba-dc82fc9adafa_16x9_600x338.jpg",
        city:"Alriad",
        country:"Saoudi arabic",
        description:"According to his official biography at fatwa-online.com, Fawzan is from the family of Fawzan "
      },
      {
        name:"falahe ismail",
        titre:"Doctor",
        city:"Kuwait",
        country:"Kuwait",
        img:"http://i.ytimg.com/vi/iAX_oHVjLac/0.jpg",
        description:"The Shaykh began seeking legislative knowledge after having worked as an instructor of the English language. "
      }
    ];

  return{
    getAll:function(){
       return cardslist;
    },
    getSelected:function(cardname){
      for (var i = 0; i < cardslist.length; i++) {
        if (angular.equals(cardslist[i].name, cardname)) {
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

    .state('app.new-card', {
      url: "/new-card",
      views: {
        'menuContent': {
          templateUrl: "templates/new-card.html",
          controller: 'NewcardCtrl'
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
