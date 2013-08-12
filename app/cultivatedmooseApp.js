var cultivatedmooseApp = angular.module ('cultivatedmooseApp', []);


// define routes for app
cultivatedmooseApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'cultivatedmooseController',
                templateUrl: 'app/partials/home.php'
            })
        .when('/wallets',
            {
                controller: 'productController',
                templateUrl: 'app/partials/wallets.php'
            })
        .when('/canvas',
            {
                controller: 'productController',
                templateUrl: 'app/partials/canvas.php'
            })
        .when('/aboutus',
            {
                controller: 'cultivatedmooseController',
                templateUrl: 'app/partials/aboutus.php'
            })
        .when('/shoppingcart',
            {
                controller: 'shoppingCartController',
                templateUrl: 'app/partials/shoppingcart.php'
            })            
        .when('/checkout',
            {
                controller: 'checkoutController',
                templateUrl: 'app/partials/checkout.php'
            })
        .when('/confirmation/:orderid',
            {
                controller: 'purchaseConfirmationController',
                templateUrl: 'app/partials/confirmation.php'
            })   
        .when('/cancel/:orderid',
            {
                controller: 'purchaseCancelController',
                templateUrl: 'app/partials/cancel.php'
            })                           
        .otherwise({redirectTo: '/' });
});
