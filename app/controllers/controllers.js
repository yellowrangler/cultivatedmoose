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

        var walletsImageStr = productService.createWalletImageSelectStr();
        $("#walletimageselect").html(walletsImageStr);

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

controllers.purchaseController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

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

        // $("#paypal").submit(function (e) {
        //     e.preventDefault(); 
        // });

        var merchindisecost = shoppingcartService.getShoppingCartTotalCostNbr();
        $scope.purchasetotal = "$ "+merchindisecost.toFixed(2);

        var shippingcost = shoppingcartService.getShoppingCartShippingCostNbr();
        $scope.shippingcost = "$ "+shippingcost.toFixed(2);

        var grandtotalcost = merchindisecost + shippingcost;
        $scope.paymentrequired = "$ "+grandtotalcost.toFixed(2);

        var paypalcost = grandtotalcost.toFixed(2);
        $("#paypalamount").val(paypalcost);

        var paypalitemname = "Mad Moose Items";
        $("#paypalaitemname").val(paypalitemname);

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
                    
                    // after we save aand validate we send pappal
                    // whatever it needs
                    //
                    var msg = JSON.parse(msgArray);
                    if (msg["status"] == "ok")
                    {
                        $("#papalreturn").val("http://turksandcaicos/cultivatedmoose/#/confirmation/"+msg["orderid"]);
                        $("#customerid").val(msg["customerid"]);

                        $("#paypal").submit();
                    }
                    else
                    {
                        alert(msg["text"]); 
                    }
                    
                    var i = 0;
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
                    
                    // after we save aand validate we send pappal
                    // whatever it needs
                    //
                    var msg = JSON.parse(msgArray);
                    if (msg["status"] == "ok")
                    {
                        shoppingcartService.removeAllItemsFromShoppingCart();
                        $("#confiramationmsg").html(msg["html"]);
                    }
                    else
                    {
                        $("#confiramationmsg").html(msg["html"]);
                    }

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
                }
            });


        var i = 0;
    } // end of init
}

controllers.purchaseCancelController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

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


        var i = 0;
    } // end of init
}

cultivatedmooseApp.controller(controllers); 
