cultivatedmooseApp.service('productService', function () {

    this.getFabrics = function () {
        return fabrics;
    };

    this.getWalletFabricItem = function (id) {
        for (var i = 0; i < fabrics.length; i++) {
            if (fabrics[i].id === id) {
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
            fabricStr = fabricStr +"<div class='divFabricDisplay'><img id=img-"+this.value+" name='fabricdisplay' class='imgFabricDisplay' src="+this.imageLargeSrc+"><br /><center><div style='width:130px;word-wrap:break-word;'>"+this.description+"</div></center></div>";
        });

        return fabricStr;
    };

    this.getWalletImageSrc = function(id) {
         var walletObj = this.getWalletItem(id);
         var itemsrc = walletObj.imageLargeSrc;

         return itemsrc;
    };

    this.createWalletImageSelectStr = function () {
        var walletImageStr = "<center>";
        $.each(wallets, function() {
            walletImageStr = walletImageStr +"<div class='span4'>";
            walletImageStr = walletImageStr +"<img name='walletimage' class='imgWalletDisplay' id='"+this.id+"' src='"+this.imageLargeSrc+"'> ";
            walletImageStr = walletImageStr +"<div style='padding-top:10px;'><span style='font-size:10px;' >"+this.text+"</span></div>";
            walletImageStr = walletImageStr +"</div> <!-- end of span4 -->";
        });

        walletImageStr = walletImageStr + "</center>";

        return walletImageStr;
    }

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
            cost: 30.00,
            stringCost: "$30.00",
            imageLargeSrc: "img/SmallQuiltedWalletSingle.png"
        },
        {
            id: "mediumwallet",
            text: "Medium Wallet",
            value: 2,
            cost: 40.00,
            stringCost: "$40.00",
            imageLargeSrc: "img/MediumQuiltedWalletSingle.png"
        },
        {
            id: "largewallet",
            text: "Large Wallet",
            value: 3,            
            cost: 50.00,
            stringCost: "$50.00",
            imageLargeSrc: "img/LargeQuiltedWalletSingle.png"
        }
    ];

    var fabrics = [
        {
            id: "green",
            text: "Green",
            value: 1,
            description: "Green Quilt",
            imageLargeSrc: "img/SampleGreen.png",
            imageSrc: "img/SampleGreen-32.png"
        },
        {
            id: "fire",
            text: "Fire",
            value: 2,
            description: "Firey red, yellow and black",
            imageLargeSrc: "img/SampleFire.png",
            imageSrc: "img/SampleFire-32.png"
        },
        {
            id: "gold",
            text: "Gold",
            value: 3,
            description: "Gold fabric with swirls",
            imageLargeSrc: "img/SampleGold.png",
            imageSrc: "img/SampleGold-32.png"
        },
        {
            id: "flowersonblue",
            text: "Blue with Flowers",
            value: 4,
            description: "Flowers on blue background",
            imageLargeSrc: "img/SampleFlowersonBlue.png",
            imageSrc: "img/SampleFlowersonBlue-32.png"
        },
        {
            id: "hotpink",
            text: "Hot Pink",
            value: 5,
            description: "Vivid pink",
            imageLargeSrc: "img/SampleHotPink.png",
            imageSrc: "img/SampleHotPink-32.png"
        },
        {
            id: "pinkblue",
            text: "Pink with Blue",
            value: 6,
            description: "Pink with blue accents",
            imageLargeSrc: "img/SamplePinkBlue.png",
            imageSrc: "img/SamplePinkBlue-32.png"
        },
        {
            id: "pinkgrey",
            text: "Brown with Pink",
            value: 7,
            description: "Brown with pink accents",
            imageLargeSrc: "img/SamplePinkGrey.png",
            imageSrc: "img/SamplePinkGrey-32.png"
        },
        {
            id: "red",
            text: "Red",
            value: 8,
            description: "Vivid red",
            imageLargeSrc: "img/SampleRed.png",
            imageSrc: "img/SampleRed-32.png"
        },
        {
            id: "redgoldfloral",
            text: "Red with Flowers",
            value: 9,
            description: "Red with yellow flowers",
            imageLargeSrc: "img/SampleRedGoldFloral.png",
            imageSrc: "img/SampleRedGoldFloral-32.png"
        }
    ];

});