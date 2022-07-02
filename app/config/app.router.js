angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  "$httpProvider",
  function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "public/home/home.template.html",
    })
    .state('details', {
      url: "/details/:characterId",
      templateUrl: "public/features/charactersDetailsContainer/charactersDetaisContainers.html",
      params: {
        characterId:null
      }
    }),
    $urlRouterProvider.otherwise("/home");
  },
]);
