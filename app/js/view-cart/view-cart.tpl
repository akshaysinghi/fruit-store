<header ng-include="'header/header.tpl'"></header>
<div class="container mt-75">
  <div ng-if="vCtrl.products.length > 0" class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">Item</th>
          <th class="text-center">Product Name</th>
          <th class="text-center">Price</th>
          <th class="text-center">Quantity</th>
          <th class="text-center">Sub Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="product in vCtrl.products">
          <td class="col-xs-2">
            <span class="cartImage">
              <img class="img-responsive" src="http://fakeimg.pl/700x400/282828/eae0d0?text={{product.name}}&?retina=1" alt="image"> </span>
          </td>
          <td class="col-xs-2 pt-45 text-center">{{product.name}}</td>
          <td class="col-xs-2 pt-45 text-center">{{product.price | currency : '&#8377;' : 0}}</td>
          <td class="col-xs-2 pt-45 text-center"> <a href="" ng-click="decreaseQuantityOfProduct(product, $index)" class="badge">-</a> {{product.quantity}} <a ng-click="increaseQuantityOfProduct(product, $index)" href="" class="badge">+</a> </td>
          <td class="col-xs-2 pt-45 text-center">{{product.totalPrice | currency : '&#8377;' : 0}}</td>
          <td class="col-xs-1 pt-45 text-center"> <a ng-click="removeProduct($index)" href="">X</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div ng-if="vCtrl.products.length > 0" class="row">
    <div class="col-xs-12">
      <button class="btn btn-primary btn-block">CHECKOUT {{vCtrl.totalAmt | currency : '&#8377;' : 0}}</button>
    </div>
  </div>
  <div ng-if="vCtrl.products.length === 0">
    <h3>No products in your cart! <a href="" ui-sref="home">Start shopping</a> </h3>
  </div>
</div>
