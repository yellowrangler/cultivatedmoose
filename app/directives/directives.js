cultivatedmooseApp.directive('shoppingCartItemsDisplay', function () {
    return {
		restrict: 'E',
        scope: {
            itemsincart: '@'
        },
        template: '<span id=\"shoppingcartitems\" style=\"float:right;padding-right:35px;\"></span>',
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

// cultivatedmooseApp.directive('shoppingCartItemsDisplay', function () {
//     return function (scope, element, attrs) {
//         var i = 0;
//         // restrict: 'E',
//         // template: '<span id=\"shoppingcartitems\" style=\"float:right;padding-right:35px;\">{{shoppingcartdisplay}}</span>',
//         // // templateUrl: 'directive.html',
//         // // replace: false,
//         // // priority: 0,
//         // // transclude: false,
//         // // scope: {
//         // //     itemsinshoppingcart:'@shoppingcartDisplay'
//         // // },
//         // // terminal: false,
//         // // require: false,
//         // // controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
//         // // compile: function compile(tElement, tAttrs, transclude) {
//         // //   return {
//         // //     pre: function preLink(scope, iElement, iAttrs, controller) { ... },
//         // //     post: function postLink(scope, iElement, iAttrs, controller) { ... }
//         // //   }
//         // // },
//         // link: function (scope, elements, attrs, controllers) { 
//         //     scope.$watch('itemsinshoppingcart', function (newval, oldval) {
//         //         var shoppingcartdisplay = "";
//         //         if (name > 0)
//         //         {
//         //             shoppingcartdisplay = "<a style='padding-bottom:5px;text-decoration:none;color:orange;font-size:13px;'href='#/shoppingcart'>"+name+"</a><a href='#/shoppingcart' style='text-decoration:none;color:orange;font-size:30px;' <span class='glyphicon glyphicon-shopping-cart'></span></a>";
//         //         }
//         //     }, true);
//         // }
//     }

// });