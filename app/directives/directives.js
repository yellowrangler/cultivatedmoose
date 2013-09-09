cultivatedmooseApp.directive('shoppingCartItemsDisplay', function () {
    return {
		restrict: 'E',
        scope: {
            itemsincart: '@'
        },
        templateUrl: 'app/directives/templates/shoppingcartdisplay.html',
        replace: true,
        transclude: false,
        link: function (scope, elements, attrs, controllers) { 
            var elm = attrs.id;
            scope.$watch('itemsincart', function (newval,oldval,srcScope) {
                var shoppingcartdisplay = "";
                if (newval > 0)
                {
                    shoppingcartdisplay = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+newval+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
                }   $("#"+elm).html(shoppingcartdisplay);
            }, true);
        }
    }

});

cultivatedmooseApp.directive('productItemDisplay', function () {
    return {
        restrict: 'E',
        scope: {
            productimageobj: '='
        },
        templateUrl: 'app/directives/templates/showwallets.html',
        replace: true,
        transclude: false,
        link: function (scope, elements, attrs, controllers) { 
            scope.$watch('productimageobj', function (newval,oldval) {
                productimageobj = newval;
                $("#walletdisplay").attr("src", newval.imgWallet);
                $("#productdisplayClosed").attr("src", newval.imgWalletClosed);
                $("#productdisplayClosed").attr("name", newval.id);
                $("#productdisplayOpen").attr("src", newval.imgWalletOpen);
                $("#productdisplayOpen").attr("name", newval.id);

                $('#walletdisplay').click(function() {
                    var imagestr = "<center><img style='height:600px;width:800px;' src='"+this.src+"'></center>";

                    $("#dialogproduct").html(imagestr);

                    $( "#dialogproduct" ).dialog({
                        height: 630,
                        width:830,
                        draggable: true,
                        modal: true
                    });
                });

                $('#productdisplayClosed').click(function() {
                    $("#walletdisplay").attr("src", this.src);
                });

                $('#productdisplayOpen').click(function() {
                    $("#walletdisplay").attr("src", this.src);
                });

            }, true);
            
        }
    }

});