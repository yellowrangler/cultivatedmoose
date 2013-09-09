cultivatedmooseApp.service('productService', function () {

    this.getFabrics = function () {
        return fabrics;
    };

    this.getWalletFabricItem = function (id) {
        for (var i = 0; i < fabrics.length; i++) {
            if (fabrics[i].value === id) {
                return fabrics[i];
            }
        }
        return null;
    };


    this.getWallets = function () {
        return wallets;
    };

    this.getWalletItem = function (id) {
        for (var i = 0; i < wallets.length; i++) {
            if (wallets[i].value == id) {
                return wallets[i];
            }
        }
        return null;
    };

    this.calculateItemCost = function (size, qty) {
        var itemcostStr;
        if (size == 0 || qty == '' || qty == 0)
        {
            itemcostStr = '';
        }
        else
        {
            var walletObj = this.getWalletItem(size);
            var itemcost = walletObj.cost;

            var itemcostNbr = qty * itemcost;
            itemcostStr = "$ "+itemcostNbr.toFixed(2);
        }

        return(itemcostStr);     
    };

    this.createFabricModalStr = function () {
        var fabricStr = "";
        $.each(fabrics, function() {
            fabricStr = fabricStr +"<div class='divFabricDisplay'><img id=img-"+this.value;
            fabricStr = fabricStr +" name='fabricdisplay' class='imgFabricDisplay' src="+this.imageLargeSrc;
            fabricStr = fabricStr +"><br /><center><div style='width:130px;word-wrap:break-word;'>"+this.description;
            fabricStr = fabricStr +"</div></center></div>";
        });

        return fabricStr;
    };

    this.createWalletSizeModalStr = function () {
        var walletSizeStr = "";
        walletSizeStr = walletSizeStr + "<div class='container'><div class='row' style='padding-top:10px;' ><div class='col-lg-12'>";
        walletSizeStr = walletSizeStr + "<h2 class='bodyFont'><center>Wallet Size Information</center></h2>";
        walletSizeStr = walletSizeStr + "</div> <!-- end of section-article -->";
        walletSizeStr = walletSizeStr + "</div> <!-- end of col-lg-12-->";
        walletSizeStr = walletSizeStr + "</div> <!-- end of row -->";
        walletSizeStr = walletSizeStr + "<div class='row' style='padding-top:25px;' >";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesA col-lg-3'>Wallet</div> <!-- end of col-lg-3-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesA col-lg-4'>Width</div> <!-- end of col-lg-4-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesA col-lg-4'>Height</div> <!-- end of col-lg-4-->";
        walletSizeStr = walletSizeStr + "<div class='col-lg-1'></div> <!-- end of col-lg-1-->";

        walletSizeStr = walletSizeStr + "</div> <!-- end of row -->";
        walletSizeStr = walletSizeStr + "<div class='row' style='' >";
        walletSizeStr = walletSizeStr + "<div class='col-lg-3'></div> <!-- end of col-lg-3-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesB col-lg-2'>Open</div> <!-- end of col-lg-2-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesB col-lg-2'>Closed</div> <!-- end of col-lg-2-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesB col-lg-2'>Open</div> <!-- end of col-lg-2-->";
        walletSizeStr = walletSizeStr + "<div class='dialogTitlesB col-lg-2'>Closed</div> <!-- end of col-lg-2->";
        walletSizeStr = walletSizeStr + "<div class='col-lg-1'></div> <!-- end of col-lg-1-->";
        walletSizeStr = walletSizeStr + "</div> <!-- end of row -->";

        $.each(wallets, function() {
            walletSizeStr = walletSizeStr + "<div class='row' style='' >";
            walletSizeStr = walletSizeStr + "<div class='col-lg-3'>"+this.text+"</div> <!-- end of col-lg-3-->";
            walletSizeStr = walletSizeStr + "<div class='col-lg-2'>"+this.widthOpen+"</div> <!-- end of col-lg-2-->";
            walletSizeStr = walletSizeStr + "<div class='col-lg-2'>"+this.widthClosed+"</div> <!-- end of col-lg-2-->";
            walletSizeStr = walletSizeStr + "<div class='col-lg-2'>"+this.heightOpen+"</div> <!-- end of col-lg-2-->";
            walletSizeStr = walletSizeStr + "<div class='col-lg-2'>"+this.widthClosed+"</div> <!-- end of col-lg-2-->";
            walletSizeStr = walletSizeStr + "<div class='col-lg-1'></div> <!-- end of col-lg-1-->";
            walletSizeStr = walletSizeStr + "</div> <!-- end of row -->";
        });

        walletSizeStr = walletSizeStr + "<div class='row' style='' >";
        walletSizeStr = walletSizeStr + "<div class='dialogMsg col-lg-12'>These wallets are handmade and as a result these sizes are approximatations.</div> <!-- end of col-lg-12-->";
        walletSizeStr = walletSizeStr +"</div><!-- end of row -->";

        walletSizeStr = walletSizeStr +"</div><!-- end of container -->";

        return walletSizeStr;
    };

    this.getWalletImageSrc = function(id) {
         var walletObj = this.getWalletItem(id);
         var itemsrc = {};
         itemsrc.id = id;
         itemsrc.imgWallet = walletObj.imageLargeSrc;
         itemsrc.imgWalletClosed = walletObj.imageLargeClosedSrc;
         itemsrc.imgWalletOpen = walletObj.imageLargeOpenSrc;

         return itemsrc;
    };

    this.pad = function pad (str, max) {
      return str.length < max ? pad("0" + str, max) : str;
    }

    this.createSKU = function (product, color, size) {
        var sku = this.pad(product.toString(),3)+"-"+this.pad(color.toString(),2)+"-"+this.pad(size.toString(),2);

        return sku;
    }


    var wallets = [
        {
            id: "smallwallet",
            text: "Small Wallet",
            value: 1,
            cost: 0.01,
            stringCost: "$0.01",
            heightOpen:"6 inches",
            widthOpen:"4 inches",
            heightClosed:"3 inches",
            widthClosed:"4 inches",
            imageLargeSrc: "img/products/SmallQuiltedWalletSingle.png",
            imageLargeClosedSrc: "img/products/SmallQuiltedWalletClosed.png",
            imageSmallClosedSrc: "img/products/SmallQuiltedWalletClosed.png",
            imageLargeOpenSrc: "img/products/SmallQuiltedWalletOpen.png",
            imageSmallOpenSrc: "img/products/SmallQuiltedWalletOpen.png"     
        },      
        {
            id: "mediumwallet",
            text: "Medium Wallet",
            value: 2,
            cost: 0.01,
            stringCost: "$0.01",
            heightOpen:"7 inches",
            widthOpen:"6 inches",
            heightClosed:"3 1/2 inches",
            widthClosed:"6 inches",            
            imageLargeSrc: "img/products/MediumQuiltedWalletSingle.png",
            imageLargeClosedSrc: "img/products/MediumQuiltedWalletClosed.png",
            imageSmallClosedSrc: "img/products/MediumQuiltedWalletClosed.png",
            imageLargeOpenSrc: "img/products/MediumQuiltedWalletOpen.png",
            imageSmallOpenSrc: "img/products/MediumQuiltedWalletOpen.png"  
        },
        {
            id: "largewallet",
            text: "Large Wallet",
            value: 3,            
            cost: 0.01,
            stringCost: "$0.01",
            heightOpen:"7 inches",
            widthOpen:"6 inches",
            heightClosed:"3 1/2 inches",
            widthClosed:"7 inches",              
            imageLargeSrc: "img/products/LargeQuiltedWalletSingle.png",
            imageLargeClosedSrc: "img/products/LargeQuiltedWalletClosed.png",
            imageSmallClosedSrc: "img/products/LargeQuiltedWalletClosed.png",
            imageLargeOpenSrc: "img/products/LargeQuiltedWalletOpen.png",
            imageSmallOpenSrc: "img/products/LargeQuiltedWalletOpen.png"              
        }
    ];

    var fabrics = [
        {
            id: "green",
            text: "Green",
            value: 1,
            description: "Green Quilt",
            imageLargeSrc: "img/products/SampleGreen.png",
            imageSrc: "img/products/SampleGreen-32.png"
        },
        {
            id: "fire",
            text: "Fire",
            value: 2,
            description: "Firey red, yellow and black",
            imageLargeSrc: "img/products/SampleFire.png",
            imageSrc: "img/products/SampleFire-32.png"
        },
        {
            id: "gold",
            text: "Gold",
            value: 3,
            description: "Gold fabric with swirls",
            imageLargeSrc: "img/products/SampleGold.png",
            imageSrc: "img/products/SampleGold-32.png"
        },
        {
            id: "flowersonblue",
            text: "Blue with Flowers",
            value: 4,
            description: "Flowers on blue background",
            imageLargeSrc: "img/products/SampleFlowersonBlue.png",
            imageSrc: "img/products/SampleFlowersonBlue-32.png"
        },
        {
            id: "hotpink",
            text: "Hot Pink",
            value: 5,
            description: "Vivid pink",
            imageLargeSrc: "img/products/SampleHotPink.png",
            imageSrc: "img/products/SampleHotPink-32.png"
        },
        {
            id: "pinkblue",
            text: "Pink with Blue",
            value: 6,
            description: "Pink with blue accents",
            imageLargeSrc: "img/products/SamplePinkBlue.png",
            imageSrc: "img/products/SamplePinkBlue-32.png"
        },
        {
            id: "pinkgrey",
            text: "Brown with Pink",
            value: 7,
            description: "Brown with pink accents",
            imageLargeSrc: "img/products/SamplePinkGrey.png",
            imageSrc: "img/products/SamplePinkGrey-32.png"
        },
        {
            id: "red",
            text: "Red",
            value: 8,
            description: "Vivid red",
            imageLargeSrc: "img/products/SampleRed.png",
            imageSrc: "img/products/SampleRed-32.png"
        },
        {
            id: "redgoldfloral",
            text: "Red with Flowers",
            value: 9,
            description: "Red with yellow flowers",
            imageLargeSrc: "img/products/SampleRedGoldFloral.png",
            imageSrc: "img/products/SampleRedGoldFloral-32.png"
        }
    ];

});