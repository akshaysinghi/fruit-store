angular.module( 'app', [ 'ui.router', 'main', 'constants', 'header', 'LocalStorageModule' ] ).config( function(
  $locationProvider, $urlRouterProvider, $httpProvider ) {
  $urlRouterProvider.otherwise( '/store' );
} ).run( function() {} );
