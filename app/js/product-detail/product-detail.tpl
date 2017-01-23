<header ng-include="'header/header.tpl'"></header>
<div class="container mt-75">
  <div class="row">
    <div class="col-md-8">
      <img class="img-responsive" src="http://fakeimg.pl/700x400/282828/eae0d0?text={{PdCtrl.product.name}}&?retina=1" alt=""> </div>
    <div class="col-md-4">
      <h1>{{PdCtrl.product.name}} </h1>
      <h2>{{PdCtrl.product.price | currency : '&#8377;' : 0}}/-</h2>
      <h3>1 Unit</h3>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button ng-click="addProductToCart(PdCtrl.product)" type="button" class="btn btn-primary btn-block">ADD TO CART</button>
      <div ng-if="PdCtrl.showToast" class="alert alert-success" role="alert">
        <strong> {{PdCtrl.quantity}} unit{{PdCtrl.quantity > 1 ? 's' : ''}} of {{PdCtrl.product.name}} </strong> added to your cart. </div>
    </div>
  </div>
</div>
