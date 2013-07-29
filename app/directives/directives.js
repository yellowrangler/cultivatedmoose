cultivatedmooseApp.directive('shoppingCartItemNbr', function () {
    return {
		link: function(scope, element, attrs) {
            if($scope.itemsinshoppingcart > 0) {
                // remove '<div ng-if...></div>'
                var str = "Items in Shopping Cart: "+$scope.itemsinshoppingcart;
                element.replaceWith(str)
            } else {
                element.replaceWith(' ')
            }
        }
    }

});