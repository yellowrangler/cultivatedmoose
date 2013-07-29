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

    // this.addToShoppingCart = function (newsku, newsizetext, newcostper, newcolortext, newproductimage, newqty, newtotalcost) {

    this.addToShoppingCart = function (newsku, newitem, newsizetext, newcostper, newcolortext, newproductimage, newqty, newtotalcost) {
        var msg ="";

        var shoppingCart = "[";
        shoppingCart = shoppingCart + "{\"sku\":\""+newsku+"\",\"item\":\""+newitem+"\",\"size\":\""+newsizetext+"\",\"costper\":\""+newcostper+"\",\"color\":\""+newcolortext+"\",\"imageurl\":\""+newproductimage+"\",\"qty\":\""+newqty+"\",\"totalcost\":\""+newtotalcost+"\"}";

        var storagecartLocalstoreItems = this.retreiveShoppingCartItems();
        if (storagecartLocalstoreItems != ""  && storagecartLocalstoreItems != null)
        {
            var shoppingcartitems = JSON.parse(storagecartLocalstoreItems);

            $.each(shoppingcartitems, function() {
                if (this.sku != newsku)
                {
                    shoppingCart = shoppingCart + ",";
                    shoppingCart = shoppingCart + "{\"sku\":\""+this.sku+"\",\"item\":\""+this.item+"\",\"size\":\""+this.size+"\",\"costper\":\""+this.costper+"\",\"color\":\""+this.color+"\",\"imageurl\":\""+this.imageurl+"\",\"qty\":\""+this.qty+"\",\"totalcost\":\""+this.totalcost+"\"}";
                    // shoppingCart = shoppingCart + "{\"sku\":\""+this.sku+"\",\"qty\":\""+this.qty+"\"}";
                }
            });
        }

        shoppingCart = shoppingCart + "]";

        this.saveShoppingCartItems(shoppingCart);
        // alert ("sku = "+sku+"\nqty = "+qty);

        return msg;
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

                    shoppingCart = shoppingCart + "{\"sku\":\""+this.sku+"\",\"item\":\""+this.item+"\",\"size\":\""+this.size+"\",\"costper\":\""+this.costper+"\",\"color\":\""+this.color+"\",\"imageurl\":\""+this.imageurl+"\",\"qty\":\""+this.qty+"\",\"totalcost\":\""+this.totalcost+"\"}";
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
        
        shippingcost = 10.00;
        
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
        var storagecartitemsStr = localStorage.getItem("cultivatedmoose");
        var shoppingcartitems = JSON.parse(storagecartitemsStr);

        return shoppingcartitems.length;
    }

});