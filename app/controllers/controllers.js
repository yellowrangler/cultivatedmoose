// define controllers for app
var controllers = {};
controllers.cultivatedmooseController = function ($scope, $http, $location, cultivatedmooseApp, shoppingcartService) {

    init();
    function init() {
    	$scope.itemsinshoppingcart = shoppingcartService.numberOfShoppingCartItems();
        if ($scope.itemsinshoppingcart > 0)
        {
            var str = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+$scope.itemsinshoppingcart+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
            $("#shoppingcartitems").html(str);
        }
        else
        {
            $("#shoppingcartitems").html("");
        }
	};
}

controllers.productController = function ($scope, $http, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {
        $scope.itemsinshoppingcart = shoppingcartService.numberOfShoppingCartItems();
        if ($scope.itemsinshoppingcart > 0)
        {
            var str = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+$scope.itemsinshoppingcart+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
            $("#shoppingcartitems").html(str);
        }
        else
        {
            $("#shoppingcartitems").html("");
        }
               

        $( "#walletqty" ).spinner({
            stop: function( event, ui ) {
                var costStr = productService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
                $("#walletcost").html(costStr);   
            }
        });

        $scope.fabrics = productService.getFabrics();
        $scope.wallets = productService.getWallets();

        $('[name="walletimage"]').click(function() {
             var newImageSrc = productService.getWalletImageSrc(this.id);
             $("#walletdisplay").attr("src", newImageSrc);
        });

        $('#fabriclist').ddslick({
            data:$scope.fabrics,
            width:225,
            selectText: "Select your wallet fabric",
            imagePosition:"left",
            onSelected: function(selectedData){
            }   
        });

        $("#walletsize").change(function () {
            var costStr = productService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
            $("#walletcost").html(costStr);   

            var newImageSrc = productService.getWalletImageSrc($("#walletsize").val());
             $("#walletdisplay").attr("src", newImageSrc);
        });

        $("#walletqty").change(function () {
            var costStr = productService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
            $("#walletcost").html(costStr);   
        });

    };


    $scope.addToCart = function() {
        var i = 0;
        var product = 1;

        var err = validateWalletForm();
        if (err)
            return false;

        var ddData = $('#fabriclist').data('ddslick');
        var walletfabricid = ddData.selectedData ? ddData.selectedData.value : "";
        var walletsize = $("#walletsize").val() *1;
        var walletqty = $("#walletqty").val();

        var sku = productService.createSKU(product, walletfabricid, walletsize);

        var walletsizedetail = productService.getWalletItem(walletsize);
        var walletcolordetail = productService.getWalletFabricItem(walletfabricid);
        var wallettotalcost = productService.calculateItemCost(walletsize,walletqty);
        var walletitem = "Quilted Wallet";

        var msg = shoppingcartService.addToShoppingCart(sku, walletitem, walletsizedetail.text, walletsizedetail.stringCost, walletcolordetail.description, walletcolordetail.imageSrc, walletcolordetail.imageLargeSrc, walletqty, wallettotalcost);

        if (msg != "")
        {
            alert(msg);
        }
        else
        {
            $location.path("/shoppingcart");
        }

    }

    $scope.showModalDialog = function (item) {
        if (item == 'fabric')
        {
            var fabricModalStr = productService.createFabricModalStr();

            $("#dialogfabric").html(fabricModalStr);

            $( "#dialogfabric" ).dialog({
                height: 455,
                width:860,
                draggable: true,
                modal: true
            });

            $('[name="fabricdisplay"]').click(function() {
                var strArray = this.id.split("-");
                var idx = strArray[1] - 1;
                $('#fabriclist').ddslick('select', {index: idx });
                $("#dialogfabric").dialog("destroy");
            });
        }
    };

}

controllers.shoppingCartController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {
        $scope.itemsinshoppingcart = shoppingcartService.numberOfShoppingCartItems();
        if ($scope.itemsinshoppingcart > 0)
        {
            var str = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+$scope.itemsinshoppingcart+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
            $("#shoppingcartitems").html(str);
        }
        else
        {
            $("#shoppingcartitems").html("");
            $location.path("/");
        }

        $scope.shoppingCartItems = shoppingcartService.getShoppingCartItems();
        $scope.shoppingcarttotalcostStr = shoppingcartService.getShoppingCartTotalCostStr();
    	
	};

    $scope.deleteShoppingcartItem = function (sku) {
        shoppingcartService.removeFromShoppingCart(sku);
        $route.reload();
    };

    $scope.showModalLargeImageDialog = function (imagename) {
        var imagestr = "<center><img style='height:300px;width:300px;' src='"+imagename+"'></center>";

        $("#fabricimagelarge").html(imagestr);

        $( "#fabricimagelarge" ).dialog({
            height: 330,
            width:330,
            draggable: true,
            modal: true
        });
    };
}

controllers.checkoutController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {     
        $scope.itemsinshoppingcart = shoppingcartService.numberOfShoppingCartItems();
        if ($scope.itemsinshoppingcart > 0)
        {
            var str = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+$scope.itemsinshoppingcart+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
            $("#shoppingcartitems").html(str);

            $scope.shoppingCartItems = shoppingcartService.getShoppingCartItems();
        }
        else
        {
            $("#shoppingcartitems").html("");
        }

        //
        // setup calss tips for all tooltips
        //
        $(".tips").tooltip();

        //
        // restrict phone input
        //
        $("#phone").keypress(function(e) {
            if (e.keyCode < 47 || e.keyCode > 57)
            {
                e.preventDefault();

                return false;
            }

            var test = this.value;
            if (test.length == 3 || test.length == 7)
                this.value = test + "-";
        });

        var merchindisecost = shoppingcartService.getShoppingCartTotalCostNbr();
        $scope.purchasetotal = "$ "+merchindisecost.toFixed(2);

        var shippingcost = shoppingcartService.getShoppingCartShippingCostNbr();
        $scope.shippingcost = "$ "+shippingcost.toFixed(2);

        var grandtotalcost = merchindisecost + shippingcost;
        $scope.paymentrequired = "$ "+grandtotalcost.toFixed(2);

        var paypalcost = grandtotalcost.toFixed(2);
        var paypalitemname = "Mad Moose Items";

        $("#cartpayment").click(function () {
            var err = validateShippingForm();
            if (err)
                return false;

            var serializedData = $("#shipping").serialize();

            $.ajax({
                type: "POST",
                url: "app/ajax/customerInvoice.php",
                data: serializedData,
                success: function(msgArray) {
                    //
                    // after we save and validate we send pappal
                    // whatever it needs
                    //
                    var msg = JSON.parse(msgArray);
                    if (msg["status"] == "ok")
                    {
                        $("#paypal_amount").val(paypalcost);
                        $("#paypal_itemname").val(paypalitemname);
                        $("#papal_return").val("http://turksandcaicos/cultivatedmoose/#/confirmation/"+msg["orderid"]);
                        $("#paypal_cancel").val("http://turksandcaicos/cultivatedmoose/#/cancel/"+msg["orderid"]);
                        $("#paypal_customerid").val(msg["customerid"]);

                        $("#paypal_first_name").val($("#firstname").val());
                        $("#paypal_last_name").val($("#lastname").val());
                        $("#paypal_address1").val($("#address1").val());
                        $("#paypal_address2").val($("#address2").val());
                        $("#paypal_city").val($("#city").val());
                        $("#paypal_state").val($("#state").val());
                        $("#paypal_zip").val($("#zip").val());

                        var phone_array = $("#phone").val().split("-");
                        $("#paypal_night_phone_a").val(phone_array[0]);
                        $("#paypal_night_phone_b").val(phone_array[1]);
                        $("#paypal_night_phone_c").val(phone_array[2]);

                        $("#paypal_email").val($("#email").val());

                        $("#paypal").submit();
                    }
                    else
                    {
                        alert(msg["text"]); 
                    }
                }
            });

            return false
        });
	} // end of init
}

controllers.purchaseConfirmationController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {   
        //
        // remove cart items, email all around
        //
        var paramArray = window.location.hash.split("/");
        var orderid = paramArray[2];
        var orderidStr = "orderid="+orderid;
        $.ajax({
                type: "POST",
                url: "app/ajax/confirmPurchase.php",
                data: orderidStr,
                success: function(msgArray) {
                    //
                    // after we save and validate we send paypal
                    // whatever it needs
                    //
                    shoppingcartService.removeAllItemsFromShoppingCart();
                    $("#shoppingcartitems").html("");

                    var msg = JSON.parse(msgArray);
                    if (msg["status"] == "ok")
                    {
                        $("#confiramationmsg").html(msg["html"]);
                    }
                    else
                    {
                        $("#confiramationmsg").html(msg["html"]);
                    }
                }
            });

    } // end of init
}

controllers.purchaseCancelController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {     
        //
        // remove cart items, email all around
        //
        var paramArray = window.location.hash.split("/");
        var orderid = paramArray[2];
        var orderidStr = "orderid="+orderid;
        $.ajax({
                type: "POST",
                url: "app/ajax/cancelPurchase.php",
                data: orderidStr,
                success: function(msgArray) {
                    //
                    // after we save and validate we send paypal
                    // whatever it needs
                    //
                    shoppingcartService.removeAllItemsFromShoppingCart();
                    $("#shoppingcartitems").html("");

                    var msg = JSON.parse(msgArray);
                    if (msg["status"] == "ok")
                    {
                        $("#cancelmsg").html(msg["html"]);
                    }
                    else
                    {
                        $("#cancelmsg").html(msg["html"]);
                    }
                }
            });


    } // end of init
}

cultivatedmooseApp.controller(controllers); 
