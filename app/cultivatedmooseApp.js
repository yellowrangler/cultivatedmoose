var cultivatedmooseApp = angular.module ('cultivatedmooseApp', ['ui.bootstrap']);


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
                controller: 'walletController',
                templateUrl: 'app/partials/wallets.php'
            })
        .when('/canvas',
            {
                controller: 'cultivatedmooseController',
                templateUrl: 'app/partials/canvas.php'
            })
        .when('/aboutus',
            {
                controller: 'cultivatedmooseController',
                templateUrl: 'app/partials/aboutus.php'
            })
        .when('/addtocart',
            {
                controller: 'cartController',
                templateUrl: 'app/partials/cart.php'
            })        
        .when('/deletefromcart',
            {
                controller: 'cartController',
                templateUrl: 'app/partials/cart.php'
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
        .when('/executepaymant',
            {
                controller: 'purchaseController',
                templateUrl: 'app/partials/executepaymant.php'
            })  
        .when('/confirmation',
            {
                controller: 'purchaseController',
                templateUrl: 'app/partials/confirmation.php'
            })                       
        .otherwise({redirectTo: '/' });
});
