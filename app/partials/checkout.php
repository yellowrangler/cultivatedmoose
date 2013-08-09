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
    	<td align="right"><strong>First Name</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px" type="text" id="firstname" name="firstname" placeholder="Enter your Full name" required>
    	</td>
    </tr>
    <tr style="height:45px;">
        <td align="right"><strong>Last Name</strong></td>
        <td align="left" style="padding-left:10px;" colspan=4>
            <input style="width:400px" type="text" id="lastname" name="lastname" placeholder="Enter your Full name" required>
        </td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Address</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address1" name="address1" placeholder="Enter your Shipping Address" required>
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
	    	<input style="width:400px;" type="text" id="city" name="city" placeholder="Enter your Shipping City" required>
    	</td>
    </tr>
	<tr style="height:45px;">
    	<td align="right"><strong>State</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<select name="state" id="state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
    	</td>

    	<td style="width:50px;">&nbsp;</td>

    	<td align="right"><strong>Zip</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input style="width:100px;" type="text" id="zip" name="zip" placeholder="Enter your ZIP" required>
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Phone</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:40px;" type="text" id="phonea" name="phonea" required> &nbsp;
            <input style="width:40px;" type="text" id="phoneb" name="phoneb" required> &nbsp;
            <input style="width:60px;" type="text" id="phonec" name="phonec" required> 
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
	    	<input style="width:400px;" type="email " id="email" name="email" placeholder="Enter your eMail address" required>
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
<form id="paypal" name="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
<!-- <form id="paypal" name="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post"> -->
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="elcutler-facilitator@wildblue.net">
<input type="hidden" name="item_name" id="paypal_itemname"  value="madmooseitems">
<input type="hidden" name="item_number" id="paypal_customerid"  value="">
<input type="hidden" name="return" id="papal_return" value="" >
<input type="hidden" name="cancel_return"  id="paypal_cancel" value="" >
<input type="hidden" name="image_url" value="http://turksandcaicos/cultivatedmoose/img/cultivatedmooseorange-paypal-banner.png" >
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="amount" id="paypal_amount" value="">
<input type="hidden" name="first_name" id="paypal_first_name" value="">
<input type="hidden" name="last_name" id="paypal_last_name" value="">
<input type="hidden" name="address1" id="paypal_address1" value="">
<input type="hidden" name="address2" id="paypal_address2" value="">
<input type="hidden" name="city" id="paypal_city" value="">
<input type="hidden" name="state" id="paypal_state" value="">
<input type="hidden" name="zip" id="paypal_zip" value="">
<input type="hidden" name="night_phone_a" id="paypal_night_phone_a" value="">
<input type="hidden" name="night_phone_b" id="paypal_night_phone_b" value="">
<input type="hidden" name="night_phone_c" id="paypal_night_phone_c" value="">
<input type="hidden" name="email" id="paypal_email" value="">
<button id="cartpayment" type="button" class="btn btn-info btn-small">Procede to PayPal</button>
</center>	
</div>

</div> <!-- end of pannel -->

</div><!-- end of col-lg-4 -->
</div><!-- end of row left side of chekout -->

</div> <!-- end of container -->
<div style="padding-bottom:40px;"></div>
