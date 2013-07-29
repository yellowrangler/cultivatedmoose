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
<form>
    <div style="padding-top:40px;padding-left:35px;">
    <table>
    <tr style="height:45px;">
    	<td align="right"><strong>Name</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px" type="text" id="fullname" placeholder="Enter your Full name">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Address</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address1" placeholder="Enter your Shipping Address">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>&nbsp;</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address2" placeholder="Enter your Shipping Address">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>City</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="city" placeholder="Enter your Shipping City">
    	</td>
    </tr>
	<tr style="height:45px;">
    	<td align="right"><strong>State</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input style="width:200px;" type="text" id="city" placeholder="Enter your State">
    	</td>

    	<td style="width:50px;">&nbsp;</td>

    	<td align="right"><strong>Zip</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input style="width:100px;" type="text" id="zip" placeholder="Enter your ZIP">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Phone</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="phone" placeholder="Enter your phone nbr">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Country</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="country" placeholder="Enter your Shippng Country if not USA">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>eMail</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="email" placeholder="Enter your eMail address">
    	</td>
    </tr>
    </table>  
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
	<td align="left" id="totalmercendise">{{purchasetotal}}</td>
</tr>
<tr style="height:30px;">
	<td align="right">Shipping Cost:</td>
	<td align="left" style=" border-bottom: 1px solid maroon; " id="totalshipping">{{shippingcost}}</td>
</tr>
<tr style="height:30px;">
	<td align="right">Total Payment Required:</td>
	<td align="left" id="paymentrequired">{{paymentrequired}}</td>
</tr>
</table>
</div>

<div style="padding-top:75px;padding-bottom:10px;">
<center>
	<a href="#/paypal" type="button" class="btn btn-info btn-small">Procede to PayPal</a>
</center>	
</div>

</div> <!-- end of pannel -->

</div><!-- end of col-lg-4 -->
</div><!-- end of row left side of chekout -->

</div> <!-- end of container -->
<div style="padding-bottom:40px;"></div>
