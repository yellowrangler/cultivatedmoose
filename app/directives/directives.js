cultivatedmooseApp.directive('shoppingCartItemNbr', function () {
    return {
		restrict: 'A',
        template: '<div></div>',
        templateUrl: 'directive.html',
        replace: false,
        priority: 0,
        transclude: false,
        scope: false,
        terminal: false,
        require: false,
        controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
        compile: function compile(tElement, tAttrs, transclude) {
          return {
            pre: function preLink(scope, iElement, iAttrs, controller) { ... },
            post: function postLink(scope, iElement, iAttrs, controller) { ... }
          }
        },
        link: function postLink(scope, iElement, iAttrs) { ... }
    }
});