var gulp = require( 'gulp' );
var webserver = require( 'gulp-webserver' );
var jsonServer = require( 'json-server' );
var server = jsonServer.create();
var router = jsonServer.router( 'db.json' );
var middlewares = jsonServer.defaults();
server.use( middlewares );
server.use( router );
server.listen( 3000, function() {
  console.log( '********************************' );
  console.log( ' JSON Server is running on 3000' );
  console.log( '********************************' );
} );
gulp.task( 'default', [ 'webserver' ], function() {} );
gulp.task( 'webserver', [], function() {
  gulp.src( 'build/' ).pipe( webserver( {
    livereload: true,
    directoryListing: false,
    open: true,
    port: 3002,
    fallback: 'index.html'
  } ) );
} );
