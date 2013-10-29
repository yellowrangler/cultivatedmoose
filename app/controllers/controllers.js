// define controllers for app
var controllers = {};
controllers.cultivatedmooseParentController = function ($scope, $http, $location, cultivatedmooseApp, shoppingcartService) {

    init();
    function init() {
        $scope.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();
	};
}

controllers.cultivatedmooseController = function ($scope, $http, $location, cultivatedmooseApp, shoppingcartService) {

    init();
    function init() {
        
    };
}

controllers.productController = function ($scope, $http, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {
        $scope.$parent.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();

        $( "#walletqty" ).spinner({
            stop: function( event, ui ) {
                var costStr = productService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
                $("#walletcost").html(costStr);   
            }
        });

        $scope.fabrics = productService.getFabrics();
        $scope.wallets = productService.getWallets();

        $scope.imgobj = productService.getWalletImageSrc(2);

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

            $scope.imgobj = productService.getWalletImageSrc($("#walletsize").val());
            $scope.$apply();
            
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

            $("#dialogproduct").html(fabricModalStr);

            $( "#dialogproduct" ).dialog({
                height: 455,
                title:"Fabric Chart",
                width:860,
                draggable: true,
                open:function () {
                    var closeBtn = $('.ui-dialog-titlebar-close');
                    closeBtn.append('<span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">close</span>');
                },
                modal: true
            });

            $('[name="fabricdisplay"]').click(function() {
                var strArray = this.id.split("-");
                var idx = strArray[1] - 1;
                $('#fabriclist').ddslick('select', {index: idx });
                $("#dialogproduct").dialog("destroy");
            });
        }
        else if (item == 'walletsize')
        {
            var walletSizeModalStr = productService.createWalletSizeModalStr();

            $("#dialogproduct").html(walletSizeModalStr);

            $( "#dialogproduct" ).dialog({
                height: 300,
                title:"Wallet Sizes",
                width:800,
                draggable: true,
                open:function () {
                    var closeBtn = $('.ui-dialog-titlebar-close');
                    closeBtn.append('<span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">close</span>');
                },
                modal: true
            });

            $('[name="walletsizedisplay"]').click(function() {
                $("#walletsize").val(this.id).change();
                $("#dialogproduct").dialog("destroy");
            });
        }
    };

}

controllers.shoppingCartController = function ($scope, $http, $route, $location, cultivatedmooseApp, productService, shoppingcartService) {

    init();
    function init() {
        $scope.$parent.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();

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
        $scope.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();

        //
        // setup calss tips for all tooltips
        //
        $(".tips").tooltip();

        $scope.shoppingCartItems = shoppingcartService.getShoppingCartItems();

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
            cultivatedmooseApp.addShoppingCartItem(serializedData)
                .success( function(msgArray) {
                    //
                    // after we save and validate we send pappal
                    // whatever it needs
                    //
                    if (msgArray.status == "ok")
                    {
                        $("#paypal_amount").val(paypalcost);
                        $("#paypal_itemname").val(paypalitemname);
                        $("#papal_return").val("http://turksandcaicos/cultivatedmoose/#/confirmation/"+msgArray.orderid);
                        $("#paypal_cancel").val("http://turksandcaicos/cultivatedmoose/#/cancel/"+msgArray.orderid);
                        $("#paypal_customerid").val(msgArray.customerid);

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
                        alert(msgArray.text); 
                    }
                })

                .error( function(data) {
                    $scope.messages.msg = "Failed ajax to add items";
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

        cultivatedmooseApp.updateShoppingCartConfirmation(orderidStr)
                .success( function(msgArray) {
                    //
                    // after we save and validate we send paypal
                    // whatever it needs
                    //
                    shoppingcartService.removeAllItemsFromShoppingCart();
                    $scope.$parent.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();
                    // $("#shoppingcartitems").html("");

                    //
                    // after we save and validate we send pappal
                    // whatever it needs
                    //
                    if (msgArray.status == "ok")
                    {
                        $("#confiramationmsg").html(msgArray.html);
                    }
                    else
                    {
                        $("#confiramationmsg").html(msgArray.html);
                    }
                })

                 .error( function(data) {
                    $scope.messages.msg = "Failed ajax to update confirmation";
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

        cultivatedmooseApp.updateShoppingCartCancel(orderidStr)
                .success( function(msgArray) {
                    //
                    // after we save and validate we send paypal
                    // whatever it needs
                    //
                    shoppingcartService.removeAllItemsFromShoppingCart();
                    $scope.$parent.shoppingcartitemnbr = shoppingcartService.numberOfShoppingCartItems();
                    // $("#shoppingcartitems").html("");

                    //
                    // after we save and validate we send pappal
                    // whatever it needs
                    //
                    if (msgArray.status == "ok")
                    {
                        $("#cancelmsg").html(msgArray.html);
                    }
                    else
                    {
                        $("#cancelmsg").html(msgArray.html);
                    }
                })

                 .error( function(data) {
                    $scope.messages.msg = "Failed ajax to update cancel";
                });


    } // end of init
}

cultivatedmooseApp.controller(controllers); 
