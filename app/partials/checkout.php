<div class="container">
<div class="row" style="padding-top:10px;">
<div class="col-lg-12">
<div class="section-article">
<h2 class="bodyFont">Checkout</h2>
</div> <!-- end of section-article -->
</div> <!-- end of col-lg-12-->
</div> <!-- end of row -->

<div class="row">
<div class="col-lg-7">
<panel>
<form id="shipping" method="post">
    <div style="padding-top:40px;padding-left:35px;">
    <table>
    <tr style="height:45px;">
    	<td align="right"><strong>Name</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px" type="text" id="fullname" name="fullname" placeholder="Enter your Full name">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Address</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address1" name="address1" placeholder="Enter your Shipping Address">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>&nbsp;</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address2" name="address2" placeholder="Enter your Shipping Address">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>City</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="city" name="city" placeholder="Enter your Shipping City">
    	</td>
    </tr>
	<tr style="height:45px;">
    	<td align="right"><strong>State</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input style="width:200px;" type="text" id="state" name="state" placeholder="Enter your State">
    	</td>

    	<td style="width:50px;">&nbsp;</td>

    	<td align="right"><strong>Zip</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input style="width:100px;" type="text" id="zip" name="zip" placeholder="Enter your ZIP">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Phone</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="phone" name="phone" placeholder="Enter your phone nbr">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Country</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="country" name="country" placeholder="Enter your Shippng Country if not USA">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>eMail</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="email" name="email" placeholder="Enter your eMail address">
    	</td>
    </tr>
    </table>  
</div>

<!-- Hidden Fields -->
<div data-ng-repeat="item in shoppingCartItems" class="hidden-fields">
    <input type="hidden" name="sku[]" value="{{item.sku}}" >  
    <input type="hidden" name="item[]" value="{{item.item}}" >  
    <input type="hidden" name="costper[]" value="{{item.costper}}" >  
    <input type="hidden" name="color[]" value="{{item.color}}" >           
    <input type="hidden" name="imageurl[]" value="{{item.imageurl}}" >  
    <input type="hidden" name="imagelargeurl[]" value="{{item.imagelargeurl}}" >           
    <input type="hidden" name="qty[]" value="{{item.qty}}" >  
    <input type="hidden" name="totalcost[]" value="{{item.totalcost}}" >           
</div>
<div class="hidden-fields">
    <input type="hidden" name="purchasetotal" value="{{purchasetotal}}" >  
    <input type="hidden" name="shippingcost" value="{{shippingcost}}" >  
    <input type="hidden" name="paymentrequired" value="{{paymentrequired}}" >       
</div>
</form>
</panel>
</div><!-- end of col-lg-8 -->

<div style="padding-top:40px;" class="col-lg-5">
<div class="panel">

<div style="pading:20px; font-size:12px;">
<table>
<tr style="height:30px;">
	<td align="right">Cost of Merchadise:</td>
	<td align="left" id="purchasetotal">{{purchasetotal}}</td>
</tr>
<tr style="height:30px;">
	<td align="right">Shipping Cost:</td>
	<td align="left" style=" border-bottom: 1px solid maroon; " id="shippingcost">{{shippingcost}}</td>
</tr>
<tr style="height:30px;">
	<td align="right">Total Payment Required:</td>
	<td align="left" id="paymentrequired">{{paymentrequired}}</td>
</tr>
</table>
</div>

<div style="padding-top:75px;padding-bottom:10px;">
<center>
	<button id="cartpayment" class="btn btn-info btn-small">Procede to PayPal</button>
</center>	
</div>

</div> <!-- end of pannel -->

</div><!-- end of col-lg-4 -->
</div><!-- end of row left side of chekout -->

</div> <!-- end of container -->
<div style="padding-bottom:40px;"></div>
