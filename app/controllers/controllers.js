// define controllers for app
var controllers = {};
controllers.cultivatedmooseController = function ($scope, $http, $location, cultivatedmooseApp, shoppingcartService) {

    init();
    function init() {
    	$scope.itemsinshoppingcart = shoppingcartService.numberOfShoppingCartItems();
        if ($scope.itemsinshoppingcart > 0)
        {
            var str = "<a style='text-decoration:none;color:green;font-size:10px;' href='#/shoppingcart'>Shopping Cart Items "+$scope.itemsinshoppingcart+"</a>";
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
            var str = "<a style='text-decoration:none;color:green;font-size:10px;' href='#/shoppingcart'>Shopping Cart Items "+$scope.itemsinshoppingcart+"</a>";
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
            var str = "<a style='text-decoration:none;color:green;font-size:10px;' href='#/shoppingcart'>Shopping Cart Items "+$scope.itemsinshoppingcart+"</a>";
            $("#shoppingcartitems").html(str);
        }
        else
        {
            $("#shoppingcartitems").html("");
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
            var str = "<a style='text-decoration:none;color:green;font-size:10px;' href='#/shoppingcart'>Shopping Cart Items "+$scope.itemsinshoppingcart+"</a>";
            $("#shoppingcartitems").html(str);

            $scope.shoppingCartItems = shoppingcartService.getShoppingCartItems();
        }
        else
        {
            $("#shoppingcartitems").html("");
        }

        var merchindisecost = shoppingcartService.getShoppingCartTotalCostNbr();
        $scope.purchasetotal = "$ "+merchindisecost.toFixed(2);

        var shippingcost = shoppingcartService.getShoppingCartShippingCostNbr();
        $scope.shippingcost = "$ "+shippingcost.toFixed(2);

        var grandtotalcost = merchindisecost + shippingcost;
        $scope.paymentrequired = "$ "+grandtotalcost.toFixed(2);

        $("#cartpayment").click(function () {
            var serializedData = $("#shipping").serialize();

            $.ajax({
                type: "POST",
                url: "app/ajax/customerInvoice.php",
                data: serializedData,
                success: function(msg) {
                    //
                    // after we save aand validate we send pappal
                    // whatever it needs
                    //
                    alert(msg); 
                }
            });
        });
	} // end of init
}

cultivatedmooseApp.controller(controllers); 
