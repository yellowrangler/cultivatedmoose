<div class="container">
<div class="row" style="padding-top:10px;" >
<div class="col-lg-9">
<div class="section-article">
<h2 class="bodyFont">Shopping Cart</h2>
</div> <!-- end of section-article -->
</div> <!-- end of col-lg-9-->
<div class="col-lg-3">
<a href="#/checkout" class="btn btn-info btn-small">Procede to Checkout</a>
</div> <!-- end of col-lg-3-->
</div> <!-- end of row -->

<div class="row" style="padding-top:15px;">
	<div class="col-lg-2"><strong>Image</strong></div>
	<div class="col-lg-2"><strong>Item</strong></div>
	<div class="col-lg-2"><strong>Color</strong></div>
	<div class="col-lg-2"><strong>Size</strong></div>
	<div class="col-lg-2"><strong>Quantity</strong></div>
	<div class="col-lg-2"><strong>Cost</strong></div>
</div><!-- end of row -->

<div class="row" id="{{shoppingCartItem.sku}}" style="padding-top:15px;" data-ng-repeat="shoppingCartItem in shoppingCartItems" >
	<div class="col-lg-2"><img style="height:40px;width:40px;" data-ng-src="{{shoppingCartItem.imageurl}}"></div>
	<div class="col-lg-2">
		{{shoppingCartItem.item}}
		<br />
		<span style="font-size:9px;color:grey;cursor:pointer;" data-ng-click="deleteShoppingcartItem(shoppingCartItem.sku)">Remove</span>
	</div>
	<div class="col-lg-2">{{shoppingCartItem.color}}</div>
	<div class="col-lg-2">{{shoppingCartItem.size}}</div>
	<div class="col-lg-2">{{shoppingCartItem.qty}}</div>
	<div class="col-lg-2">{{shoppingCartItem.totalcost}}</div>
</div> <!-- end of row -->

<div class="row" id="totalcost" style="padding-top:15px;">
	<div class="col-offset-9 col-lg-3">Total Cost: {{shoppingcarttotalcostStr}}</div>
</div> <!-- end of row -->

<div class="row" style="padding-top:30px;" >
	<div class="col-offset-9 col-lg-3">
	<a href="#/checkout" class="btn btn-info btn-small">Procede to Checkout</a>
	</div> <!-- end of col-lg-3-->
</div> <!-- end of row -->

</div> <!-- end of container -->
<div style="padding-bottom:40px;"></div>

<!-- dialog code here -->