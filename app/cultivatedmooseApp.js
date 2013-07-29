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
                controller: 'purchaseController',
                templateUrl: 'app/partials/checkout.php'
            })
        .when('/shipping',
            {
                controller: 'purchaseController',
                templateUrl: 'app/partials/shipping.php'
            })
        .when('/payment',
            {
                controller: 'purchaseController',
                templateUrl: 'app/partials/payment.php'
            })   
        .when('/confirmation',
            {
                controller: 'purchaseController',
                templateUrl: 'app/partials/confirmation.php'
            })                       
        .otherwise({redirectTo: '/' });
});
