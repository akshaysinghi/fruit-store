  angular.module( 'app' ).factory( 'MainService', function( $http, $q, BaseService ) {
    return {
      getProducts: function() {
        var defer = $q.defer();
        var url = 'products';
        BaseService.get( url ).success( function( response ) {
          defer.resolve( response );
        } ).error( function( response ) {
          defer.resolve( response );
        } );
        return defer.promise;
      },
      getProductById: function( id ) {
        var defer = $q.defer();
        var url = 'products?id=' + id;
        BaseService.get( url ).success( function( response ) {
          defer.resolve( response );
        } ).error( function( response ) {
          defer.resolve( response );
        } );
        return defer.promise;
      }
    };
  } );