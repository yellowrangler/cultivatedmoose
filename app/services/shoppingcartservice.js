cultivatedmooseApp.service('shoppingcartService', function () {
    this.getShoppingCartItems = function () {
        var shoppingcartitems = "";
        var storagecartLocalstoreItems = this.retreiveShoppingCartItems();
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            shoppingcartitems = JSON.parse(storagecartLocalstoreItems);
        }

        return shoppingcartitems;
    }

    this.setShoppingCartItemsDisplay = function () {
        var shoppingcartdisplay = "";
        var itemsinshoppingcart = this.numberOfShoppingCartItems();
        if (itemsinshoppingcart > 0)
        {
            shoppingcartdisplay = "<a class='shoppingCartDisplay' href='#/shoppingcart'>"+itemsinshoppingcart+"</a><a href='#/shoppingcart' class='shoppingCartIcon'><span class='glyphicon glyphicon-shopping-cart'></span></a>";
        }

        return shoppingcartdisplay;
    }

    // this.addToShoppingCart = function (newsku, newsizetext, newcostper, newcolortext, newproductimage, newqty, newtotalcost) {

    this.addToShoppingCart = function (newsku, newitem, newsizetext, newcostper, newcolortext, newproductimage, newproductimagelarge, newqty, newtotalcost) {
        var msg ="";

        var shoppingCart = "[";
        shoppingCart = shoppingCart + "{\"sku\":\""+newsku;
        shoppingCart = shoppingCart+"\",\"item\":\""+newitem;
        shoppingCart = shoppingCart+"\",\"size\":\""+newsizetext;
        shoppingCart = shoppingCart+"\",\"costper\":\""+newcostper;
        shoppingCart = shoppingCart+"\",\"color\":\""+newcolortext;
        shoppingCart = shoppingCart+"\",\"imageurl\":\""+newproductimage;
        shoppingCart = shoppingCart+"\",\"imagelargeurl\":\""+newproductimagelarge;
        shoppingCart = shoppingCart+"\",\"qty\":\""+newqty;
        shoppingCart = shoppingCart+"\",\"totalcost\":\""+newtotalcost;
        shoppingCart = shoppingCart+"\"}";

        var storagecartLocalstoreItems = this.retreiveShoppingCartItems();
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            var shoppingcartitems = JSON.parse(storagecartLocalstoreItems);

            $.each(shoppingcartitems, function() {
                if (this.sku != newsku)
                {
                    shoppingCart = shoppingCart + ",";
                    shoppingCart = shoppingCart + "{\"sku\":\""+this.sku;
                    shoppingCart = shoppingCart+"\",\"item\":\""+this.item;
                    shoppingCart = shoppingCart+"\",\"size\":\""+this.size;
                    shoppingCart = shoppingCart+"\",\"costper\":\""+this.costper;
                    shoppingCart = shoppingCart+"\",\"color\":\""+this.color;
                    shoppingCart = shoppingCart+"\",\"imageurl\":\""+this.imageurl;
                    shoppingCart = shoppingCart+"\",\"imagelargeurl\":\""+this.imagelargeurl;
                    shoppingCart = shoppingCart+"\",\"qty\":\""+this.qty;
                    shoppingCart = shoppingCart+"\",\"totalcost\":\""+this.totalcost;
                    shoppingCart = shoppingCart+"\"}";
                }
            });
        }

        shoppingCart = shoppingCart + "]";

        this.saveShoppingCartItems(shoppingCart);
        // alert ("sku = "+sku+"\nqty = "+qty);

        return msg;
    }

    this.removeAllItemsFromShoppingCart = function () {
        localStorage.removeItem("cultivatedmoose");
    }

    this.removeFromShoppingCart = function (sku) {
        var msg ="";
        var shoppingCart = "[";
        var count = 0;

        var storagecartLocalstoreItems = this.retreiveShoppingCartItems();
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            var shoppingcartitems = JSON.parse(storagecartLocalstoreItems);

            $.each(shoppingcartitems, function() {
                if (this.sku != sku)
                {
                    if (count > 0)
                        shoppingCart = shoppingCart + ",";

                    shoppingCart = shoppingCart + "{\"sku\":\""+this.sku;
                    shoppingCart = shoppingCart+"\",\"item\":\""+this.item;
                    shoppingCart = shoppingCart+"\",\"size\":\""+this.size;
                    shoppingCart = shoppingCart+"\",\"costper\":\""+this.costper;
                    shoppingCart = shoppingCart+"\",\"color\":\""+this.color;
                    shoppingCart = shoppingCart+"\",\"imageurl\":\""+this.imageurl;
                    shoppingCart = shoppingCart+"\",\"imagelargeurl\":\""+this.imagelargeurl;
                    shoppingCart = shoppingCart+"\",\"qty\":\""+this.qty;
                    shoppingCart = shoppingCart+"\",\"totalcost\":\""+this.totalcost;
                    shoppingCart = shoppingCart+"\"}";
                    
                    count = count + 1;
                }
            });
        }

        shoppingCart = shoppingCart + "]";

        this.saveShoppingCartItems(shoppingCart);
    }

    this.getShoppingCartTotalCostStr = function () {
        var totalcost = this.getShoppingCartTotalCostNbr();

        totalcostStr = "$ "+totalcost.toFixed(2);

        return totalcostStr;
    }

    this.getShoppingCartTotalCostNbr = function () {
        var totalcost = 0;
        var storagecartLocalstoreItems = this.retreiveShoppingCartItems();
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            var shoppingcartitems = JSON.parse(storagecartLocalstoreItems);

            $.each(shoppingcartitems, function() {
                var totalcostStr = this.totalcost;
                var tempArray = totalcostStr.split("$");
                totalcost = totalcost + tempArray[1]*1; 
            });
        }

        return totalcost;
    }

    this.getShoppingCartShippingCostNbr = function () {
        var shippingcost = 0;
        
        shippingcost = shipping[0].cost;
        
        return shippingcost;
    }

    this.saveShoppingCartItems = function (jsonStr) {
        localStorage.removeItem("cultivatedmoose");
        localStorage.setItem("cultivatedmoose", jsonStr);
    }

    this.retreiveShoppingCartItems = function () {
        var storagecartitemsStr = localStorage.getItem("cultivatedmoose");

        return storagecartitemsStr;
    }

    this.numberOfShoppingCartItems = function () {
        var cartitems = 0;
        var storagecartLocalstoreItems = localStorage.getItem("cultivatedmoose");
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            var shoppingcartitems = JSON.parse(storagecartLocalstoreItems);
            cartitems = shoppingcartitems.length;
        }
            
        return cartitems;
    }

});


var shipping = [
        {
            id: "default",
            text: "Standard USPS",
            value: 1,
            cost: 0.01,
            stringCost: "$0.01",
            imageLargeSrc: "TBD"
        },
        {
            id: "upsground",
            text: "UPS Ground",
            value: 2,
            cost: 0.01,
            stringCost: "$0.01",
            imageLargeSrc: "TBD"
        },
        {
            id: "upsovernight",
            text: "UPS Overnight",
            value: 3,            
            cost: 0.01,
            stringCost: "$0.01",
            imageLargeSrc: "TBD"
        }
    ];