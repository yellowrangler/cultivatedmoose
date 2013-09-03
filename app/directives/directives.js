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

cultivatedmooseApp.directive('walletItemsDisplay', function () {
    return {
        restrict: 'E',
        scope: {
            itemimage: '='
        },
        templateUrl: 'app/directives/templates/showwallets.html',
        replace: true,
        transclude: false,
        link: function (scope, elements, attrs, controllers) { 
            // var elm = attrs.id;

            scope.$watch('itemimage', function (newval,oldval) {
                itemimage = newval;
            }, true);
            
        }
    }

});