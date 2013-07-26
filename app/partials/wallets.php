<div style="padding-left:75px;" class="container-fluid">
<div class="row-fluid" style="padding-top:130px;" >
<div class="span12">
<div class="section-article">
<h2>Quilted Wallets</h2>
</div> <!-- end of section-article -->
</div> <!-- end of span12-->
</div> <!-- end of row-fluid -->

<div class="row-fluid" style="padding-top:15px;">
<div class="span5">
<div id="outlinewallets" class="curveBox">
<div class="row-fluid">
<div class="span12">
<center>
<img id="walletdisplay" style="height:250px;"  src="img/wallet.png">
</center>
</div> <!-- end of span12 -->
</div> <!-- end of row -->
<div id="walletimageselect" class="row-fluid" style="padding-top:20px;">
</div> <!-- end of row -->
</div> <!-- end of span5 -->
</div> <!-- end of outlinewallets -->

<div class="span7">
<form id="walletform">
<div id="outlineform" class="curveBox">

<div id="fabricdiv">
<div class="row-fluid">
<div class="offset1 span2" style="font-weight:900;font-size:120%;">Fabric</div><!-- end of span2-->
<div class="span6">
<div id="fabriclist" style="padding:0;margin:0;font-size:10px;"></div>
</div><!-- end of span6-->
<div class="span3">
<button type="button" data-ng-click="showModalDialog('fabric')" class="btn btn-info btn-mini" data-toggle="button">Fabric Chart</button>
</div><!-- end of span3-->
</div><!-- end of row-fluid-->
</div><!-- end of fabric-->


<div id="sizediv" style="padding-top:25px;">
<div class="row-fluid">
<div class="offset1 span2" style="font-weight:900;font-size:120%;" >Size</div><!-- end of span2-->
<div class="span6">
<select id="walletsize">
<option value="0">No Selection</option>
<option data-ng-repeat="wallet in wallets" value="{{wallet.id}}">{{wallet.text}}</option>
</select>
</div><!-- end of span6-->
</div><!-- end of row-fluid-->
</div><!-- end of fabric-->

<div id="qtydiv" style="padding-top:25px;">
<div class="row-fluid">
<div class="offset1 span2" style="font-weight:900;font-size:120%;" >Quantity</div><!-- end of span2-->
<div class="span6">
<input style="width:25px;" id="walletqty" size="4" name="value" />
</div><!-- end of span6-->
</div><!-- end of row-fluid-->
</div><!-- end of fqty-->

<div id="costdiv" style="padding-top:25px;">
<div class="row-fluid">
<div class="offset1 span2" style="font-weight:900;font-size:120%;" >Cost</div><!-- end of span2-->
<div id="walletcost" class="span6">
</div><!-- end of span6-->
</div><!-- end of row-fluid-->
</div><!-- end of cost-->

<div id="addtocart" style="padding-top:75px;">
<div class="row-fluid">
<div class="offset1 span5">
<button type="button" id="addtocartbtn" data-ng-click="addToCart()" class="btn btn-primary" data-toggle="button">Add to Cart</button>
<!-- note: add button not disabled after have all items -->
</div><!-- end of span2-->
</div><!-- end of row-fluid-->
</div><!-- end of addtocart-->

<div id="endofform" style="padding-top:25px;"></div><!-- end of endofform-->
</form>
</div> <!-- end of curvebox -->
</div> <!-- end of span7 -->

</div> <!-- end of row-fluid -->
</div> <!-- end of container -->
<div style="padding-bottom:6200px;"></div>

<!-- dialog code here -->
<div id="dialogfabric" title="Fabric Chart"></div>

