// define factories
cultivatedmooseApp.factory('cultivatedmooseApp', function($http) {
    var factory = {};

	factory.getShoppingCartItems = function() {
        
    };

    factory.getShoppingCartItem = function(sku) {
        
    };

    factory.addShoppingCartItem = function(data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/customerInvoice.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    factory.updateShoppingCartConfirmation = function(data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/confirmPurchase.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    factory.updateShoppingCartCancel = function(data) {
        return $http({ 
            method: 'POST', 
            url: "app/ajax/cancelPurchase.php",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };

    factory.removeShoppingCartItem = function(sku) {
        
    };

    return factory;

});