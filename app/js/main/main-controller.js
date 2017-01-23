angular.module( 'main', [ 'home', 'product-detail', 'view-cart' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'main', {
    url: '/',
    templateUrl: 'main/main.tpl',
    controller: 'MainCtrl'
  } );
} ).controller( 'MainCtrl', function( $scope ) {} );
