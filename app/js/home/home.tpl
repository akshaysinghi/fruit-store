<div class="container mt-75">
  <!-- Projects Row -->
  <div class="row">
    <div class="col-lg-6">
      <div class="input-group">
        <input type="text" class="form-control" ng-model="search" placeholder="Search for Products">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Go!</button>
        </span>
      </div>
      <!-- /input-group -->
    </div>
    <!-- /.col-lg-6 -->
  </div>
  <!-- /.row -->
  <div class="row mt-25">
    <div class="col-md-4" ng-repeat="product in hCtrl.products | filter:search">
      <a href="#" ui-sref="product-detail ({id : product.id})">
        <img class="img-responsive" src="http://fakeimg.pl/700x400/282828/eae0d0?text={{product.name}}&?retina=1" alt=""> </a>
      <h3 class="mb-20"> <a href="#" ui-sref="product-detail ({id : product.id})">{{product.price | currency : '&#8377;' : 0}}</a>
        <small> per unit.</small>
      </h3>
      <p></p>
    </div>
    <div ng-show="(hCtrl.products | filter:search).length == 0">No results</div>
  </div>
  <!-- /.row -->
</div>
