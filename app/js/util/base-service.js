angular.module( 'app' ).factory( 'BaseService', function( $http, Constants ) {
  return {
    create: function( url, data ) {
      return $http.post( Constants.APP_URL + url, data );
    },
    get: function( url ) {
      return $http.get( Constants.APP_URL + url );
    }
  };
} );
