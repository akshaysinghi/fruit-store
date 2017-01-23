angular.module( 'app' ).factory( 'CartService', function( Constants, localStorageService, $rootScope ) {
  var initailize = [];
  return {
    setProductToCart: function( product ) {
      var cartProducts = localStorageService.get( Constants.CART_KEY );
      var flag = false;
      var quantity = 1;
      angular.forEach( cartProducts, function( value, key ) {
        if ( value.id === product.id ) {
          value.quantity += 1;
          value.totalPrice = value.totalPrice + product.price;
          flag = true;
          quantity = value.quantity;
        }
      } );
      if ( !flag ) {
        product.totalPrice = product.price;
        cartProducts.push( product );
      }
      localStorageService.set( Constants.CART_KEY, cartProducts );
      $rootScope.$broadcast( 'updateCartCounter' );
      return quantity;
    },
    getProductFromCart: function() {
      var cartItems = localStorageService.get( Constants.CART_KEY );
      if ( !cartItems ) {
        cartItems = [];
        localStorageService.set( Constants.CART_KEY, cartItems );
      }
      return cartItems;
    },
    getTotalProductPrice: function() {
      var cartItems = localStorageService.get( Constants.CART_KEY );
      var price = 0;
      if ( !cartItems ) {
        cartItems = [];
        localStorageService.set( Constants.CART_KEY, cartItems );
      }
      angular.forEach( cartItems, function( value, key ) {
        price = price + value.totalPrice;
      } );
      return price;
    },
    changeQuantityOfProduct: function( product, increaseCount ) {
      var cartProducts = localStorageService.get( Constants.CART_KEY );
      var updatedProduct = {};
      angular.forEach( cartProducts, function( value, key ) {
        if ( value.id === product.id ) {
          if ( increaseCount ) {
            value.quantity += 1;
            value.totalPrice = value.totalPrice + product.price;
            updatedProduct = value;
          } else {
            value.quantity -= 1;
            value.totalPrice = value.totalPrice - product.price;
            updatedProduct = value;
          }
        }
      } );
      localStorageService.set( Constants.CART_KEY, cartProducts );
      $rootScope.$broadcast( 'updateCartCounter' );
      return updatedProduct;
    },
    deleteProductFromCart: function( index ) {
      var cartProducts = localStorageService.get( Constants.CART_KEY );
      cartProducts.splice( index, 1 );
      localStorageService.set( Constants.CART_KEY, cartProducts );
      $rootScope.$broadcast( 'updateCartCounter' );
      return cartProducts;
    }
  };
} );
