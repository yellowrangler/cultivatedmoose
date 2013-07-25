// define controllers for app
var controllers = {};
controllers.cultivatedmooseController = function ($scope, $http, $location, cultivatedmooseApp) {

    init();
    function init() {
    	
	};
}

controllers.walletController = function ($scope, $http, $location, cultivatedmooseApp, walletService) {

    init();
    function init() {
        $( "#walletqty" ).spinner({
            stop: function( event, ui ) {
                var costStr = walletService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
                $("#walletcost").html(costStr);   
            }
        });

        $scope.fabrics = walletService.getFabrics();
        $scope.wallets = walletService.getWallets();

        $('[name="walletimage"]').click(function() {
             var newImageSrc = walletService.getWalletImageSrc(this.id);
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
            var costStr = walletService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
            $("#walletcost").html(costStr);   
        });

        $("#walletqty").change(function () {
            var costStr = walletService.calculateItemCost($("#walletsize").val(),$("#walletqty").val());
            $("#walletcost").html(costStr);   
        });

    };


    $scope.addToCart = function() {
        var i = 0;

        var ddData = $('#fabriclist').data('ddslick');
        var walletfabricid = ddData.selectedData ? ddData.selectedData.value : "";
        // var walletfabricid = ddData.selectedData.value;
         // var ddData = $('#demoShowSelected').data('ddslick');
        var walletsize = $("#walletsize").val();
        var walletqty = $("#walletqty").val();

        alert("the fabricid = "+walletfabricid+"\nthe size is "+walletsize+"\nthe qty = "+walletqty)

    }

    $scope.showModalDialog = function (item) {
        if (item == 'fabric')
        {
            var fabricModalStr = walletService.createFabricModalStr();
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

controllers.cartController = function ($scope, $http, $location, $window, $anchorScroll) {

    init();
    function init() {
    	
	};
}

controllers.purchaseController = function ($scope, $http, $location, cultivatedmooseApp) {

    init();
    function init() {

	} // end of init
}

cultivatedmooseApp.controller(controllers); 
