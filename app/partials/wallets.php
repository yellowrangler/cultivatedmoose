<div class="container">
<div class="row" style="padding-top:0px;" >
	<div class="col-lg-12">
	<div class="section-article">
	<h3 class="bodyFont">Quilted Wallets</h3>
	</div> <!-- end of section-article -->
	</div> <!-- end of col-lg-12-->
</div> <!-- end of row -->

<div class="row" style="padding-top:5px;">
	<div class="col-lg-6">
		<div style="padding-top:30px;" class="row">
		<div class="col-lg-12">
		<product-item-display 
			productimageobj="imgobj">
        </product-item-display>
		</div> <!-- end of col-lg-12 -->
		</div> <!-- end of row -->
	</div> <!-- end of span5 -->

<div class="col-lg-6">
	<form id="walletform">
	<div id="outlineform" style="padding:10px;" class="curveBox">

	<div id="fabricdiv">
	<div style="padding-top:20px;" class="row">
		<div class="col-lg-2" style="padding-left:25px;font-weight:900;font-size:110%;">Fabric</div><!-- end of col-lg-2-->
		<div class="col-lg-7">
		<div id="fabriclist" style="padding:0;margin:0;font-size:10px;"></div>
		</div><!-- end of col-lg-6 -->
		<div class="col-lg-2">
		<button style="height:50px;" type="button" data-ng-click="showModalDialog('fabric')" class="btn btn-info btn-mini" data-toggle="button">Fabric Chart</button>
		</div><!-- end of col-lg-3-->
	</div><!-- end of row -->
	</div><!-- end of fabric-->

	<div id="sizediv" style="padding-top:25px;">
	<div class="row">
		<div class="col-lg-2" style="padding-left:25px;font-weight:900;font-size:110%;" >Size</div><!-- end of col-lg-2-->
		<div class="col-lg-7">
		<select style="font-weight:900;font-size:120%;" id="walletsize">
		<option value="0">No Selection</option>
		<option data-ng-repeat="wallet in wallets" value="{{wallet.value}}">{{wallet.text}} - {{wallet.stringCost}}</option>
		</select>
		</div><!-- end of col-lg-6 -->
		<div class="col-lg-2">
		<button style="height:25px;" type="button" data-ng-click="showModalDialog('walletsize')" class="btn btn-warning btn-mini" data-toggle="button">Size Details</button>
		</div><!-- end of col-lg-3-->
	</div><!-- end of row-->
	</div><!-- end of sizediv-->

	<div id="qtydiv" style="padding-top:25px;">
	<div class="row">
		<div class="col-lg-2" style="padding-left:25px;font-weight:900;font-size:110%;" >Quantity</div><!-- end of col-lg-2-->
		<div class="col-lg-6">
		<input style="width:25px;font-size:80%" id="walletqty" size="4" name="value" />
		</div><!-- end of col-lg-6 -->
	</div><!-- end of row -->
	</div><!-- end of fqty-->

	<div id="costdiv" style="padding-top:25px;">
	<div class="row">
		<div class="col-lg-2" style="padding-left:25px;font-weight:900;font-size:110%;" >Cost</div><!-- end of col-lg-2 -->
		<div id="walletcost" class="col-lg-6">
		</div><!-- end of col-lg-6 -->
	</div><!-- end of row -->
	</div><!-- end of cost -->

	<div id="addtocart" style="padding-top:25px;">
	<div class="row">
		<div style="padding-left:25px;" class="col-lg-5">
		<button type="button" id="addtocartbtn" data-ng-click="addToCart()" class="btn btn-primary" data-toggle="button">Add to Cart</button>
		<!-- note: add button not disabled after have all items -->
		</div><!-- end of col-lg-5-->
	</div><!-- end of row-->
	</div><!-- end of addtocart-->

	<div id="endofform" style="padding-top:15px;"></div><!-- end of endofform-->
	</form>
	<div id="alert_msg"></div>
	</div> <!-- end of curvebox -->
</div> <!-- end of col-lg-7 -->

</div> <!-- end of row -->
</div> <!-- end of container -->

<div style="padding-bottom:40px;"></div>

<!-- dialog code here -->
<div id="dialogproduct" title="" style="display:none;"></div>