angular.module( 'view-cart', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'view-cart', {
    parent: 'main',
    url: 'view-cart',
    templateUrl: 'view-cart/view-cart.tpl',
    controller: 'VcCtrl',
    resolve: {
      products: function( CartService ) {
        return CartService.getProductFromCart();
      }
    }
  } );
} ).controller( 'VcCtrl', function( $scope, CartService, products ) {
  $scope.vCtrl = {
    products: products ? products : [],
    totalAmt: 0
  };
  $scope.decreaseQuantityOfProduct = decreaseQuantityOfProduct;
  $scope.increaseQuantityOfProduct = increaseQuantityOfProduct;
  $scope.totalAmount = totalAmount;
  $scope.removeProduct = removeProduct;

  function decreaseQuantityOfProduct( product, index ) {
    if ( product.quantity > 1 ) {
      var updatedProduct = CartService.changeQuantityOfProduct( product, false );
      $scope.vCtrl.products[ index ] = updatedProduct;
      totalAmount();
    } else {
      removeProduct( index );
    }
  }

  function increaseQuantityOfProduct( product, index ) {
    var updatedProduct = CartService.changeQuantityOfProduct( product, true );
    $scope.vCtrl.products[ index ] = updatedProduct;
    totalAmount();
  }
  totalAmount();

  function totalAmount() {
    $scope.vCtrl.totalAmt = CartService.getTotalProductPrice();
  }

  function removeProduct( index ) {
    var flag = confirm( "Due you want to delete this item?" );
    if ( flag ) {
      CartService.deleteProductFromCart( index );
      $scope.vCtrl.products.splice( index, 1 );
      totalAmount();
    }
  }
} );
