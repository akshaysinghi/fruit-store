angular.module( 'header', [] ).controller( 'HeaderCtrl', function( $scope, CartService ) {
  initalize();
  $scope.$on( 'updateCartCounter', function( event ) {
    initalize();
  } );

  function initalize() {
    $scope.headerCtrl = {
      cartItems: CartService.getProductFromCart(),
      totalPrice: CartService.getTotalProductPrice(),
    };
  }
} );
