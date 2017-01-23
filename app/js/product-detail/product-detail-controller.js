angular.module( 'product-detail', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'product-detail', {
    parent: 'main',
    url: 'pdp/:id',
    templateUrl: 'product-detail/product-detail.tpl',
    controller: 'PdCtrl',
    resolve: {
      product: function( MainService, $stateParams ) {
        return MainService.getProductById( $stateParams.id );
      }
    }
  } );
} ).controller( 'PdCtrl', function( $scope, product, $state, CartService, $timeout ) {
  if ( product.length === 0 ) {
    $state.go( "home" );
  }
  $scope.PdCtrl = {
    product: product[ 0 ],
    showToast: false,
    quantity: 1
  };
  $scope.addProductToCart = addProductToCart;

  function addProductToCart( product ) {
    $scope.PdCtrl.quantity = CartService.setProductToCart( product );
    if ( $scope.PdCtrl.quantity > 0 ) {
      $scope.PdCtrl.showToast = true;
      $timeout( function() {
        $scope.PdCtrl.showToast = false;
      }, 1200 );
    }
  }
} );
