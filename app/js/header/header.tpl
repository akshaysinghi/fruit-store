<!-- Navigation -->
<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header"> <a class="navbar-brand" ui-sref="home" href="#">Fruit Store</a> </div>
    <div ng-if="headerCtrl.cartItems.length > 0" class="nav navbar-nav navbar-right">
      <button ui-sref="view-cart" type="button" class="btn btn-default navbar-btn">My Cart : {{headerCtrl.totalPrice | currency : '&#8377;' : 0}}
        <span class="badge text-primary">{{headerCtrl.cartItems.length}} item{{headerCtrl.cartItems.length > 1 ? 's' : ''}}</span>
      </button>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <!-- /.navbar-collapse -->
  </div>
  <!-- /.container -->
</nav>
