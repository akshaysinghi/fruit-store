angular.module( 'home', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    parent: 'main',
    url: 'store',
    templateUrl: 'home/home.tpl',
    controller: 'HomeCtrl',
    resolve: {
      products: function( MainService ) {
        return MainService.getProducts();
      }
    }
  } );
} ).controller( 'HomeCtrl', function( $scope, products ) {
  $scope.hCtrl = {
    products: products ? products : []
  };
} );
